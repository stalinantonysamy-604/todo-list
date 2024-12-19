import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState(''); // To store the current task input
  const [tasks, setTasks] = useState([]); // To store the list of tasks

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add a new task
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]); // Add the new task to the list
      setTask(''); // Clear the input field
    }
  };

  // Delete a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            {t}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
