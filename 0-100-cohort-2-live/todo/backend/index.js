const express = require("express");
const {createTodo, updateTodo} = require("./types");
const { Todo } = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//body {
    // title: string,
    // description: string,
// }


app.post('/todo', async (req, res) => {
    console.log("GHI");
    const checkBody = createTodo.safeParse(req.body);
    if(!checkBody.success){
        return res.status(411).send("Invalid Input");
    }
    const resp = await Todo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false
    })
    res.status(201).json({msg : "Todo Created"});

})

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
})

app.put('/completed', async (req, res) => {
    const checkId = updateTodo.safeParse(req.body);
    if(!checkId.success){
        return res.status(411).send("Invalid Input");
    }
    const update = await Todo.findByIdAndUpdate(req.body.id, {completed: true}); 
    if(update){
        res.status(200).json({msg: "Task Updated"});
    }
    else{
        return res.status(404).json({msg: "Task Not Found"});
    }
    
})

app.listen(3000);