import React from 'react'

function Filter({ setFilter }) {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
    </select>
  )
}

export default Filter
