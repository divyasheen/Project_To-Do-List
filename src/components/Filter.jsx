import React from "react";

function Filter({ setFilter }) {
  return (
    <div className="selectFilter">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">Filter: </option>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
}

export default Filter;
