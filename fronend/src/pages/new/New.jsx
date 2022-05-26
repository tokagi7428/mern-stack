import axios from "axios";
import React, { useState ,Component } from "react";
import "./new.scss";
function New() {
  const [todox, setTodo1] = useState("");
  const [todoy, setTodo2] = useState("");

  function onSubmitTodo(e) {
    e.preventDefault();
    const todoObj = {
      todo1:todox,
      todo2:todoy
    }
    axios.post('http://localhost:5500/todo/create',todoObj)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setTodo1('')
    setTodo2('')
  }

  return (
    <div className="container">
      <h1>Create Todo</h1>
      <form onSubmit={(e) => onSubmitTodo(e)}>
        <div className="form-group">
          <label htmlFor="todo1">Todo1</label>
          <input
            type="text"
            name="todo1"
            id="todo1"
            onChange={(e) => setTodo1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="todo1">Todo2</label>
          <input
            type="text"
            name="todo2"
            id="todo2"
            onChange={(e) => setTodo2(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit">
            Create todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default New;
