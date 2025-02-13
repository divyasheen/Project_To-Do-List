import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/FormContext";

function Add() {
  const { data, setData } = useContext(FormContext);
  const [thisData, setThisData] = useState(
    { id: null, heading: "", text: "", completed: false, timestamp: "" },
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
    //console.log(data);
  };

  //console.log(thisData);

  return (
    <>
      <div>Add</div>
      <form onSubmit={handleSubmit}>
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
