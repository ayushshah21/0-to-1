const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username: "aashah2003@gmail.com",
    password: "123",
    name: "Ayush Shah",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  const checkUser = ALL_USERS.filter(user => user.username === username && user.password === password);
  console.log(checkUser);
  if(checkUser){
    return true;
  }
  return false;
}

app.use(express.json());

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, password);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  console.log(token);
  try {
    const decoded = jwt.verify(token, "123");
    const username = decoded.username;
    const users = ALL_USERS.filter(user => user.username !== username);
    res.json(users);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)