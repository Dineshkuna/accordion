import React, { useState, useEffect } from "react";
import "./Todo_List.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Edit a task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="filter-section">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Active" ? "active" : ""}
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
        <button
          className={filter === "Completed" ? "active" : ""}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button
              onClick={() => {
                const newText = prompt("Edit task", task.text);
                if (newText) editTask(task.id, newText);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
