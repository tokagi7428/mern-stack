import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./single.scss";
import axios from "axios";
function Single(props) {
  const [isEdit, setIsEdit] = useState(false);

  const deleteTodo = async () => {
    await axios
      .delete("http://localhost:5500/todo/remove/" + props.obj._id)
      .then((res) => {
        console.log("Todo successfully deleted!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="single">
      <p className="todo">{props.obj.todo1}</p>
      <p className="todo">{props.obj.todo2}</p>
      <div className="btn">
        <Link to={"/todo/edit/" + props.obj._id} className="edit-link">
          Edit
        </Link>
        <button className="btn-delete" onClick={() => deleteTodo()}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Single;
