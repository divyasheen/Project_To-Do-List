import React from "react";

function Prio({ setPrior }) {
  return (
    <div className="selectPrio">
      <select onChange={(e) => setPrior(e.target.value)}>
        <option value="">Prioritize:</option>
        <option value="important"> Important 🍅</option>
        <option value="medium"> Medium importance 🍋</option>
        <option value="low"> Low importance 🍏</option>
      </select>
    </div>
  );
}

export default Prio;
