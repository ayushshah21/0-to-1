const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://aashah2003:0z8dimKdJgkGC5mq@cluster0.ckt43.mongodb.net/cards?retryWrites=true&w=majority&appName=Cluster0"
);

// Define schemas
const CardSchema = new mongoose.Schema({
  name: String,
  description: String,
  interests: [String],
  socials: [String]

});

const Card = mongoose.model("Card", CardSchema);

module.exports = {
  Card
};
