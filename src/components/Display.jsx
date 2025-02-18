import React, { useState, useContext } from "react";
import "./Display.css";
import Filter from "./Filter";
import Sort from "./Sort";
import FormContext from "../context/FormContext";
import { NavLink } from "react-router-dom";

function Display() {
  const { data, setData } = useContext(FormContext);
  const [filter, setFilter] = useState("All");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editTimestamp, setEditTimestamp] = useState("");
  const [sort, setSort] = useState("new");

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setData((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Toggle all tasks under a category
  const toggleCategoryCompletion = (category) => {
    const allCompleted = data
      .filter((task) => task.category === category)
      .every((task) => task.completed);

    setData((prevTasks) =>
      prevTasks.map((task) =>
        task.category === category
          ? { ...task, completed: !allCompleted }
          : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setData((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Enable Edit Mode
  const startEditing = (taskId, text, timestamp) => {
    setEditingTaskId(taskId);
    setEditText(text);
    setEditTimestamp(timestamp || ""); // Ensure existing timestamp is used
  };

  // Handle Input Change
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };
  // Handle Input Change for Due Date
  const handleTimestampChange = (e) => {
    setEditTimestamp(e.target.value);
  };

  // Save Edited Task
  const saveEdit = () => {
    setData((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTaskId
          ? { 
              ...task, 
              text: editText, 
              timestamp: editTimestamp === "" ? null : editTimestamp // Allow clearing the due date
            }
          : task
      )
    );
    setEditingTaskId(null);
    setEditText("");
    setEditTimestamp(""); // Reset timestamp state
  };
  
  

  // Cancel Editing
  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditText("");
    setEditTimestamp("");
  };

  // Apply filtering before sorting
  const filteredTasks = data.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });
  const priorityColor = (priority) => {
    switch (priority) {
      case "important":
        return { backgroundColor: "lightcoral" };
      case "medium":
        return { backgroundColor: "#FFFED3" };
      case "low":
        return { backgroundColor: "lightgreen" };
      default:
        return { backgroundColor: "" };
    }
  };
  // NL: Sorting function, based on filtering option as only actual tasks should be sorted
  const sortedTasks = [...filteredTasks];

  if (sort === "important") {
    sortedTasks.sort((a, b) => {
      const priorityOrder = { important: 1, medium: 2, low: 3, default: 4 };
      return (
        (priorityOrder[a.priority] || priorityOrder.default) -
        (priorityOrder[b.priority] || priorityOrder.default)
      );
    });
  } else if (sort === "new") {
    sortedTasks.sort((a, b) => new Date(b.sorttime) - new Date(a.sorttime));
  } else if (sort === "latest") {
    sortedTasks.sort((a, b) => new Date(a.sorttime) - new Date(b.sorttime));
  }

  // Now group tasks AFTER sorting
  const groupedTasks = sortedTasks.reduce((acc, task) => {
    acc[task.category] = acc[task.category] || [];
    acc[task.category].push(task);
    return acc;
  }, {});

  return (
    <div className="todo-container GoUp-box" id="top">
      <div className="menu">
        {/* Filter Component */}
        <Filter setFilter={setFilter} />

        <button>
          <NavLink to="/add">Add</NavLink>
        </button>

        {/* Sorting Component */}
        <Sort setSort={setSort} />
      </div>

      {/* To-Do List Grouped by Category */}
      <div className="todo-list">
        {Object.entries(groupedTasks).map(([category, tasks]) => (
          <div key={category} className="category-group">
            {/* Category Heading with Checkbox */}
            <div className="category-header">

              <input
                type="checkbox"
                checked={tasks.every((task) => task.completed)}
                onChange={() => toggleCategoryCompletion(category)}
              />

              <h3>{category || "Others"}</h3>
            </div>

            {tasks.map((task) => (
              <div
                key={task.id}
                className={`todo-item ${task.completed ? "completed" : ""}`}
                style={priorityColor(task.priority)}
              >
                {/* Task Content */}
                <div className="task-content">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />

                  {/* Edit Mode: Show Input Field */}
                  {editingTaskId === task.id ? (
                    <>
                      <div className="editMenu">
                        <textarea
                          value={editText}
                          onChange={handleEditChange}
                          className="edit-input"
                        />
                        <input
                          type="date"
                          value={editTimestamp}
                          onChange={handleTimestampChange}
                          className="edit-date"
                        />
                      </div>
                    </>
                  ) : (
                    <span>
                      {task.priority ? 
                        <span className = "prio-text">{task.priority}</span>
                       : null}{" "}
                      <strong>{task.text}</strong>
                    </span>
                  )}
                </div>

                {/* Timestamp */}
                <span className="timestamp">
                ⏳ Due: {task.timestamp ? task.timestamp : "No Date"}
                </span>

                {/* Task Actions */}
                <div className="task-buttons">
                  {editingTaskId === task.id ? (
                    <>
                      <button className="save-btn" onClick={saveEdit}>
                        Save
                      </button>
                      <button className="cancel-btn" onClick={cancelEdit}>
                        ❌
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="edit-btn" onClick={() => startEditing(task.id, task.text, task.timestamp)}>Edit</button>
                      <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        <a href="#top">
          <button className="GoUp-button">Go up</button>
        </a>
      </div>
    </div>
  );
}

export default Display;
