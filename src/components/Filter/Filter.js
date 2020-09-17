import React from "react";

const Filter = ({onChangeFilter}) => (
  <label>Find contacts by name
    <br/>
    <input type="text" name="filter" onChange={onChangeFilter}/>
  </label>
);

export default Filter;