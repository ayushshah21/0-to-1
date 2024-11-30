const jwt = require("jsonwebtoken");
const {secret} = require("../config.js");
const z = require("zod");
const { Admin } = require("../db/index.js");

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const tokenArr = req.headers.authorization;
    const token = tokenArr.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    if(decoded.username){
        next();
    }
    else{
        res.status(403).send("JWT Token is not valid");
    }
}

async function adminExists(req, res, next) {
    const validateBody = schema.safeParse(req.body);
    if (!validateBody.success) {
      return res.status(400).json({ errors: validateBody.error.issues });
    }
    const username = req.body.username;
    const adminExists = await Admin.findOne({ username: username });
    if (adminExists) {
      return res.status(400).send("Admin Already Exists");
    }
    next();
  }

module.exports = {adminMiddleware, adminExists};