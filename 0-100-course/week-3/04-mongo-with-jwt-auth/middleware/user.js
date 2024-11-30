const jwt = require("jsonwebtoken");
const {secret} = require("../config.js");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const tokenArr = req.headers.authorization;
    const token = tokenArr.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    if(decoded.username){
        req.username = decoded.username;
        next();
    }
    else{
        res.status(403).send("JWT Token is not valid");
    }
}


async function userExists(req, res, next) {
    const validateBody = schema.safeParse(req.body);
    if (!validateBody.success) {
      return res.status(400).json({ errors: validateBody.error.issues });
    }
    const username = req.body.username;
    const userExists = await User.findOne({ username: username });
    if (userExists) {
      return res.status(400).send("User Already Exists");
    }
    next();
  }

module.exports = {userMiddleware, userExists};