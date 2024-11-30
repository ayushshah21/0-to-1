const express = require("express");
const z = require("zod");

const app = express();

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "Ayush" || password != "pass") {
    res.status(400).json({ msg: "Somethings up with your inputs" });
  } else {
    next();
  }
}
function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Somethings up with your inputs" });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!",
  });
});

app.use(express.json());


const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.post('/health-checkup', function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send(response);
})


// //global caches
// app.use(function(err, req, res, next){
//     res.json({
//         message: "Sorry something is wrong with your server"
//     })
// })





app.listen(3000);
