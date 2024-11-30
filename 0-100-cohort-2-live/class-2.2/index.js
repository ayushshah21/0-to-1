const express = require("express");


const port = 3000;

const app = express();

// Middleware to parse JSON in the request body
app.use(express.json());

app.get('/', function(req, res){
    res.send("<h1>Hi There </h1>");
})
app.post('/conversations', function(req, res){
    console.log(req.body);
    res.send("<h1>Body Received</h1>");
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`);
})