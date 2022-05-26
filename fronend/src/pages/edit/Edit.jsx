import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./edit.scss";
function Edit() {
  const [todo1, setTodo1] = useState("");
  const [todo2, setTodo2] = useState("");
  const { todoId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    async function componentDidMount() {
      await axios
        .get(`http://localhost:5500/todo/${todoId}`)
        .then((res) => {
          setTodo1(res.data.todo1);
          setTodo2(res.data.todo2);
        })
        .catch((err) => console.log(err));
    }
    componentDidMount();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const todoObj = {
      todo1,
      todo2,
    };
    await axios
      .put(` http://localhost:5500/todo/edit/${todoId}`, todoObj)
      .then((res) => {
        console.log("id : ", todoId);
        console.log("data : ", res.data);
        console.log("Todo successfully Updated");
      })
      .catch((err) => console.log(err));
    setTodo1("");
    setTodo2("");
  }

  return (
    <div className="edit">
      <h1>Update Student</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label>todo1</label>
          <input
            type="text"
            className="form-control"
            value={todo1}
            onChange={(e) => setTodo1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>todo2</label>
          <input
            type="text"
            className="form-control"
            value={todo2}
            onChange={(e) => setTodo2(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn-edit"
            onClick={() => {
              navigate("/");
            }}
          >
            Edit todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
