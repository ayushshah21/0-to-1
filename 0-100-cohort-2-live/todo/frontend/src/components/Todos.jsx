/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";

const Todos = ({ todos, setTodos }) => {
  useEffect(() => {
    async function fetchTodos() {
        const response = await axios.get("http://localhost:3000/todos");
        console.log(response.data);
        if(response.status === 200) setTodos(response.data);
    }
    fetchTodos();
  }, []);
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as completed"}</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
