import { useState } from "react";

function Add() {
  const [data, setData] = useState({ heading: "", toDo: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e-preventDefault();

  }

  console.log(data);

  return (
    <>
      <div>Add</div>
      <form onSubmit = {handleSubmit}>
        <label>
          Heading
          <input
            type="text"
            name="heading"
            value={data.heading}
            placeholder="Type your heading here ... "
            onChange={handleChange}
          />
        </label>

        <label>
          To-Do
          <textarea
            name="toDo"
            value={data.toDo}
            placeholder="Type your to-do here ..."
            onChange={handleChange}
          ></textarea>
        </label>
        <button>Save</button>
      </form>
    </>
  );
}

export default Add;
