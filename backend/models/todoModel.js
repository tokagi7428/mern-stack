const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo1: {
    type: String,
    required: true,
  },
  todo2: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todoItem", todoSchema);
module.exports = Todo;
