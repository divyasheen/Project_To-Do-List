import React from 'react'


function Sort({setSort}) {
  return (
    <select onChange={(e) => setSort(e.target.value)}>
        <option value="sort">Sort:</option>
      <option value="important">Important first</option>
      <option value="new">New first</option>
      <option value="latest">Latest first</option>
    </select>
  )
}

export default Sort