import React from 'react'


function Sort({setSort}) {
  return (
    <select onChange={(e) => setSort(e.target.value)}>
      <option value="Important">- Important first</option>
      <option value="New">- New first</option>
      <option value="Latest">- Latest first</option>
    </select>
  )
}

export default Sort