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
    category: "", //DS Replacing heading with category
    text: "",
    completed: false,
    timestamp: "",
    sorttime: "",
    priority: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setThisData({
      ...thisData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if text is empty
    if (!thisData.text.trim()) {
      alert("Please enter a to-do item.");
      return;
    }

    // Assign ID before setting data
    const newTask = {
      ...thisData,
      category: thisData.category || "Others", //DS Set "Others" if empty
      id: Date.now(),
      sorttime: new Date().toISOString(), ///NL: stores full timeform for sorting
    };

    setData((prevData) => [...prevData, newTask]); //DS Ensure previous data i

    setThisData({
      id: null,
      category: "",
      text: "",
      completed: false,
      timestamp: thisData.length,
      sorttime: new Date().toISOString(),
      priority: "",
    });

    navigate("/");

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

  return (
    <>
      <div className="addContainer">
        <form onSubmit={handleSubmit} style={priorityColor(thisData.priority)}>
          {/* Here the Category and Priority will be */}
          <div className="selectComp">
            <Category
              setCategory={(category) => setThisData({ ...thisData, category })}
              value={thisData.category} // Ensure category selection is reflected
            />
            <Prio setPrior={setPrior} />
          </div>

          <div className="formInput">
            <label>
              To-Do
              <textarea
                name="text"
                value={thisData.text}
                placeholder="Type your to-do here ..."
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <div className="lastRow">
              <label>
                Due Date:
                <input
                  type="date"
                  name="timestamp"
                  value={thisData.timestamp}
                  onChange={handleChange}
                />
              </label>
              <div className="add-buttons">
              
                <button>Save</button>
                <button onClick={() => navigate("/")} className="go-back-btn">Go back</button>
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
