import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/FormContext";
import Prio from "./Prio";

function Add() {
  const { data, setData } = useContext(FormContext);
  const [thisData, setThisData] = useState(
    { id: null, heading: "", text: "", completed: false, timestamp: "", priority:"" },
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    setThisData({ ...thisData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setThisData({ ...thisData, id: data.length });
    setData([...data, thisData]);
    navigate("/");
  console.log(data);
  };

  console.log(thisData);

//NL: updating data with selected priority
  const setPrior = (priority) => {
    setThisData((prev) => ({ ...prev, priority }));
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case "important":
        return {backgroundColor: "lightcoral"}; 
      case "medium":
        return {backgroundColor: "yellow"};
      case "low":
        return {backgroundColor: "lightgreen"};
      default:
        return {backgroundColor: ""};
    }
  };

 

  return (
    <>
      <div>Add</div>
      <form onSubmit={handleSubmit} style={priorityColor(thisData.priority)}>

        {/* Here the Category and Priority will be */}
<Prio setPrior={setPrior}/>


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
            value={thisData.toDo}
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
      </form>
    </>
  );
}

export default Add;
