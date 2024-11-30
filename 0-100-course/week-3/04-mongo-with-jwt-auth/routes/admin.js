const { Router } = require("express");
const { adminMiddleware, adminExists } = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { secret } = require("../config");
const { Course, Admin } = require("../db/index");

// Admin Routes
router.post("/signup", adminExists, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Admin.create({
    username: username,
    password: password,
  });
  res.status(201).send("Admin created successfully");
});

router.post("/signin", async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const isUser = Admin.exists({ username, password });

  if (isUser) {
    const token = jwt.sign({ username }, secret);
    res.json(token);
  } else {
    res.send("Incorrect Password");
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
    published: req.body.published,
  });
  try {
    const newCourse = await course.save();
    const courseId = newCourse._id;
    res
      .status(201)
      .json({ msg: "Course created successfully", courseId: courseId });
  } catch (err) {
    res.status(500).json({ error: "Failed to create course" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const data = await Course.find();
  res.status(200).json(data);
});

module.exports = router;
