const { Router } = require("express");
const {userExists, userMiddleware} = require("../middleware/user");
const router = Router();
const jwt = require("jsonwebtoken");
const { secret } = require("../config");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", userExists, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username: username,
    password: password,
    purchasedCourses: [],
  });
  res.status(201).send("User created successfully");
});

router.post("/signin", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
  
    const isUser = User.exists({ username, password });
  
    if (isUser) {
      const token = jwt.sign({ username }, secret);
      res.json(token);
    } else {
      res.send("Incorrect Password");
    }
});

router.get("/courses", userMiddleware, async (req, res) => {
    const data = await Course.find();
    res.status(200).json(data);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    console.log(courseId);
    try{
      const course = await Course.findById(courseId);
      if(course){
        console.log(req.username);
          const user = await User.findOne({username: req.username});
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

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({username: req.username}).populate("purchasedCourses");
  res.status(200).send(user.purchasedCourses);
});

module.exports = router;
