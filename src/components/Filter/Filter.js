import React from "react";
import PropTypes from "prop-types";

const Filter = ({onChangeFilter}) => (
  <label>Find contacts by name
    <br/>
    <input type="text" name="filter" onChange={onChangeFilter}/>
  </label>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
}

export default Filter;