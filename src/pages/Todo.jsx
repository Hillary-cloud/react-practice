import React, { useState } from 'react'

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    const handleChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        setTodoList([...todoList, newTask]);
    }
    const deleteTask = (taskName) => {
        const newTodoList = todoList.filter((task)=>{
            if (task === taskName) {
                return false;
            }else{
                return true;
            }
        });
        setTodoList(newTodoList);
    }
  return (
    <div>
      <input type="text" onChange={handleChange} />
    <button onClick={addTask}>Add Task</button><br />
    {todoList.map((task) => (
        
        <div>
             <h2>{task}</h2> 
            <button onClick={() => deleteTask(task)}> x </button>
        </div>
       
    ))}
    
    </div>
  )
}

export default Todo
