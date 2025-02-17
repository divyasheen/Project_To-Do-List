import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/FormContext";
import Prio from "./Prio";
import Category from "./Category";
import "./Add.css";

function Add() {
  const { data, setData } = useContext(FormContext);
  const [thisData, setThisData] = useState({
    id: null,
    heading: "",
    text: "",
    completed: false,
    timestamp: "",
    priority: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setThisData({ ...thisData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assign ID before setting data
    const newTask = { ...thisData, id: Date.now() };

    setData((prevData) => [...prevData, newTask]); // Ensure previous data is retained

    setThisData({
      id: null,
      heading: "",
      text: "",
      completed: false,
      timestamp: "",
      priority: "",
    });

    navigate("/");

    console.log("Updated Data:", newTask); // Ensure correct data structure
  };

  console.log(thisData);

  //NL: updating data with selected priority
  const setPrior = (priority) => {
    setThisData((prev) => ({ ...prev, priority }));
  };

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
  const [category, setCategory] = useState();

  return (
    <>
      <div className="addContainer">
        <form onSubmit={handleSubmit} style={priorityColor(thisData.priority)}>
          
          <div className="selectComp">
            <Category setCategory={setCategory} />
            <Prio setPrior={setPrior} />
          </div>

          <label>
            To-Do
            <textarea
              name="text"
              value={thisData.text}
              placeholder="Type your to-do here ..."
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="lastRow">
            <label>
              Due Date:
              <input
                type="date"
                name="dueDate"
                value={thisData.dueDate}
                onChange={handleChange}
              />
            </label>
            <button>Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
