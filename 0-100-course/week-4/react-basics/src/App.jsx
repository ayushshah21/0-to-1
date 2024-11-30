import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleAddTodo(){
   if(title === '' || description === ''){
    return;
   }
   const newTask = {id: Date.now(), title, description};
   setTitle("");
   setDescription("");
   setTasks([...tasks, newTask]);
  }
  function handleDeleteTask(e, id){
    e.preventDefault();
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className='main'>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter title'/>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter description'/>
      <button onClick={handleAddTodo}>Add todo</button>
      <div className='container'>
        {tasks.map((task) => 
          <ul key={tasks.id}>
            <li>{task.title}</li>
            <li>{task.description}</li>
            <button onClick={(e) => handleDeleteTask(e, task.id)} >Delete Task</button>
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
