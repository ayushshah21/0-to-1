const { Router } = require("express");
const router = Router();
const {userMiddleware, userExists} = require("../middleware/user");
const { User } = require("../db/index.js");
const { Course } = require("../db/index.js");
const z = require("zod");



// User Routes
router.post("/signup", userExists, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = new User({
    username: username,
    password: password,
    purchasedCourses: [],
  });
  user.save();
  res.status(201).send("User created successfully");
});

router.use(userMiddleware);

router.get("/courses", async (req, res) => {
    try {
        const data = await Course.find();
        res
          .status(200)
          .json(data);
      } catch (err) {
        res.status(500).json({ error: "Failed to retrieve courses" });
      }
});

router.post("/courses/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
  console.log(courseId);
  try{
    const course = await Course.findById(courseId);
    console.log(course);
    if(course){
        const user = await User.findOne({username: req.headers.username});
        if(user.purchasedCourses.includes(course._id)){
            return res.status(400).send("Course already purchased");
        }
        user.purchasedCourses.push(course._id);
        user.save();
        res.status(200).send("Course purchased successfully");
    }
    else{
        res.status(400).send("Course Doesn't Exist");
    }
  }
  catch(err){
    res.status(500).json({ error: "Error adding course" });
  }
});

router.get("/purchasedCourses", async (req, res) => {
  const user = await User.findOne({username: req.headers.username}).populate("purchasedCourses");
  res.status(200).send(user.purchasedCourses);
});

module.exports = router;
