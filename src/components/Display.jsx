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

  const [sort, setSort] = useState("new");


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


  const priorityColor = (priority) => {
    switch (priority) {
      case 'important':
        return { backgroundColor: 'lightcoral' };
      case 'medium':
        return { backgroundColor: "#FFFED3" };
      case 'low':
        return { backgroundColor: 'lightgreen' };
      default:
        return { backgroundColor: '' };
    }
  };


  // NL: Sorting function, based on filtering option as only actual tasks should be sorted

  const sortedTasks = [...filteredTasks];

  if (sort === "important") {
    sortedTasks.sort((a, b) => {
      const priorityOrder = { important: 1, medium: 2, low: 3 };
      return (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4);
    });
  } else if (sort === "new") {
    sortedTasks.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); 
  } else if (sort === "latest") {
    sortedTasks.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); 
  }



  return (
    <div className="todo-container">
    <div className = "menu">
      <button><NavLink to="/add">Add</NavLink> </button>
      

    {/* Filter Component */}
    <Filter setFilter={setFilter} />

   {/* NL: Sorting list Dropdown */}
    <Sort setSort={setSort}/>
    </div>
    
    {/* To-Do List */}
    {/*NL: I have changed filteredTasks for sortedTasks as it contains filtered tasks already */}
    <div className="todo-list">
        {sortedTasks.map((task) => (
          <div key={task.id} className={`todo-item ${task.completed ? "completed" : ""}`} style={priorityColor(task.priority)} >

 
            
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

                <span>{task.text <strong>({task.priority})</strong> || "No text available"} </span> // Fixed issue: Ensure `task.text` is not undefined
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
