/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      axios.get("https://dummyjson.com/todos/random/5").then((res) => {
        console.log(res);
        setTodos(res.data);
      });
      setLoading(false);
    }, n * 1000);
  }, []);

  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(20);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      {todos.map((todo, i) => (
        <Track key={i} todo={todo} loading={loading} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.todo}
      <br />
      {todo.completed ? "Done" : "Not done"}
    </div>
  );
}

export default App;
