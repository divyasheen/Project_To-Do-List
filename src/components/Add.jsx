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
  setData([...data, newTask]); 
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
  const [category, setCategory] = useState();



  return (
    <>
      <div className="addContainer">
      <form onSubmit={handleSubmit} style={priorityColor(thisData.priority)} >

        {/* Here the Category and Priority will be */}
        <Category setCategory={setCategory}/>
        <Prio setPrior={setPrior}/>

          <div className="formInput">
            <label>
              Heading
              <input
                type="text"
                name="heading"
                value={thisData.heading}
                placeholder="Type your heading here ... "
                onChange={handleChange}
              />
            </label>

            <label>
              To-Do
              <textarea
                name="text"

                value={thisData.text}

                placeholder="Type your to-do here ..."
                onChange={handleChange}
              ></textarea>
            </label>

            <label>
              Due Date:
              <input
                type="date"
                name="timestamp"
                value={thisData.timestamp}
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
