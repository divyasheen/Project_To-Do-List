import React, { useState , useContext} from "react";
import "./Display.css";
import Filter from "./Filter";
import Sort from "./Sort";
import FormContext from "../context/FormContext";
import Add from "./Add";
import Category from "./Category";
import { NavLink } from "react-router-dom";

function Display() {

  const { data, setData } = useContext(FormContext);
  const [filter, setFilter] = useState("All");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  const [sort, setSort] = useState("New");


  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setData((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // Function to delete a task
  const deleteTask = (taskId) => {
    setData((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
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
    setData((prevTasks) =>
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
  const filteredTasks = data.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  // NL Sorting function
  // const sortedTasks = [...data].sort((a, b) => {
  //   if (sort === "Important") {
  //     if (a.priority === "Important" && b.priority !== "Important") return -1;
  //     if (a.priority !== "Important" && b.priority === "Important") return 1;
  //   }
  //   if (sort === "Latest") {
  //     return new Date(b.timestamp) - new Date(a.timestamp);
  //   }
  //   return 0;
  // });



  return (
    <div className="todo-container">
    <div className = "menu">
      <button><NavLink to="/add">Add</NavLink> </button>
        <Category />
      

    {/* Filter Component */}
    <Filter setFilter={setFilter} />

   {/* NL Sorting list Dropdown */}
    <Sort setSort={setSort}/>
    </div>
    
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
