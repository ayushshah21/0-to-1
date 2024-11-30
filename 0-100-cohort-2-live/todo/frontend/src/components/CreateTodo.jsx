/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from 'axios';

const CreateTodo = ({setTodos, todos}) => {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    async function addTodo(){
        if(title == '' || description == '') return;
        const todoObj = {title, description};
        const response = await axios.post("http://localhost:3000/todo", todoObj);
        const newTodo = {title, description};
        if(response.status === 201){
            setTodos([...todos, newTodo]);
        }
    }

  return (
    <div>
      <input
        style={{
          padding: "10px",
          margin: "10px",
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
      />
      <input
        style={{
          padding: "10px",
          margin: "10px",
        }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="description"
      />
      <button
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onClick={addTodo}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;
