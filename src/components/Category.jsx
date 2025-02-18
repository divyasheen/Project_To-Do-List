import React from 'react';

function Category({ setCategory, value }) {
  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)} value={value}>
        <option value="">Category:</option> {/* Placeholder */}
        <option value="Work"> Work</option>
        <option value="Hobby"> Hobby</option>
        <option value="Appointments"> Appointments</option>
        <option value="Shopping"> Shopping</option>
        <option value="Family"> Family</option>
        <option value="Friends"> Friends</option>
        <option value="Others"> Others</option>
      </select>
    </div>
  );
}

export default Category;
