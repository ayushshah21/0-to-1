const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://aashah2003:0z8dimKdJgkGC5mq@cluster0.ckt43.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
  );

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    Todo
}