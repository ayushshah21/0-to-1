const { Router } = require("express");
const {
  adminMiddleware,
  adminExists,
  courseMiddleware,
} = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db/index.js");
const { Course } = require("../db/index.js");

// Admin Routes
router.post("/signup", adminExists, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const admin = new Admin({
    username: username,
    password: password,
  });
  admin.save();
  res.status(201).send("Admin created successfully");
});

router.use(adminMiddleware);

router.post("/courses", courseMiddleware, async (req, res) => {
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

router.get("/courses", async (req, res) => {
  try {
    const existingUser = await Admin.findOne({username: req.headers.username, password: req.headers.password});
    console.log(existingUser);
    if(!existingUser){
        return res.status(401).send("Incorrect username or password");
    }
    const data = await Course.find();
    res
      .status(200)
      .json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve courses" });
  }
});

module.exports = router;
