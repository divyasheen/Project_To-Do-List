
import React, { useState } from "react";
import "./Display.css";
import Filter from "./Filter";

const initialTasks = [
    { id: 1, text: "Create a React project ✌️", completed: false, timestamp: "5:23 AM, 01/06/2022" },
    { id: 2, text: "Learn React ❤️", completed: false, timestamp: "5:22 AM, 01/06/2022" },
    { id: 3, text: "Create a Todo App 📑", completed: true, timestamp: "5:21 AM, 01/06/2022" },
    { id: 4, text: "Create a React project ✌️", completed: false, timestamp: "5:23 AM, 01/06/2022" },
    { id: 5, text: "Learn React ❤️", completed: false, timestamp: "5:22 AM, 01/06/2022" },
    { id: 6, text: "Create a Todo App 📑", completed: true, timestamp: "5:21 AM, 01/06/2022" },
    { id: 7, text: "Create a React project ✌️", completed: false, timestamp: "5:23 AM, 01/06/2022" },
    { id: 8, text: "Learn React ❤️", completed: false, timestamp: "5:22 AM, 01/06/2022" },
    { id: 9, text: "Create a Todo App 📑", completed: true, timestamp: "5:21 AM, 01/06/2022" },
  ];

function Display() {

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");


  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
// Enable Edit Mode
const startEditing = (taskId, text) => {
    setEditingTaskId(taskId);
    setEditText(text);
  };

  // Handle Input Change
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  // Save Edited Task
  const saveEdit = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTaskId ? { ...task, text: editText } : task
      )
    );
    setEditingTaskId(null);
    setEditText("");
  };

  // Cancel Editing
  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditText("");
  };

  // Filter tasks based on selection
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });


  return (
    <div className="todo-container">
    

    {/* Filter Component */}
    <Filter setFilter={setFilter} />
    
    

    {/* To-Do List */}
    <div className="todo-list">
        {filteredTasks.map((task) => (
          <div key={task.id} className={`todo-item ${task.completed ? "completed" : ""}`}>
            
            {/* Task Content */}
            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />

              {/* Edit Mode: Show Input Field */}
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  className="edit-input"
                />
              ) : (
                <span>{task.text}</span>
              )}
            </div>

            {/* Timestamp */}
            <span className="timestamp">{task.timestamp}</span>

            {/* Task Actions */}
            <div className="task-buttons">
              {editingTaskId === task.id ? (
                <>
                  <button className="save-btn" onClick={saveEdit}>💾 Save</button>
                  <button className="cancel-btn" onClick={cancelEdit}>❌ Cancel</button>
                </>
              ) : (
                <>
                  <button className="edit-btn" onClick={() => startEditing(task.id, task.text)}>✏️ Edit</button>
                  <button className="delete-btn" onClick={() => deleteTask(task.id)}>🗑️ Delete</button>
                </>
              )}
            </div>

          </div>
        ))}
      </div>
  </div>
  )
}

export default Display
