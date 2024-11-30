const z = require("zod");
const { User } = require("../db/index.js");

const schema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
  });

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const validateBody = schema.safeParse({username: req.headers.username, password: req.headers.password});
  if (!validateBody.success) {
    return res.status(400).json({ errors: validateBody.error.issues });
  }
  const username = req.headers.username;
  const password = req.headers.password;
  const existingUser = await User.exists({ username, password });
  if(!existingUser){
    return res.status(401).send("Incorrect username or password");
  }
  next();
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

module.exports = { userMiddleware, userExists };
