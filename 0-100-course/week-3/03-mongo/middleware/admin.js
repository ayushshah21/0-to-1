const z = require("zod");
const { Admin } = require("../db/index.js");

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

const courseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  imageLink: z.string(),
});

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const validateAdmin = schema.safeParse({
    username: req.headers.username,
    password: req.headers.password,
  });
  if (!validateAdmin.success) {
    console.log(req.headers.username);
    console.log(req.headers.password);
    return res.status(400).json({ errors: validateAdmin.error.issues });
  }
  next();
}

async function courseMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  const existingAdmin = await Admin.findOne({ username, password });
  if (!existingAdmin) {
    return res.status(401).send("Incorrect username or password");
  }
  const validateCourse = courseSchema.safeParse(req.body);
  if (!validateCourse.success) {
    return res.status(400).json({ errors: validateCourse.error.issues });
  }
  next();
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

module.exports = { adminMiddleware, adminExists, courseMiddleware };
