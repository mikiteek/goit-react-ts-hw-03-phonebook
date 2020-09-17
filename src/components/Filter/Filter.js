import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({onChangeFilter}) => (
  <div className={styles["findBlock"]}>
    <label className={styles["findLabel"]}>Find contacts by name</label>
    <input type="text" name="filter" onChange={onChangeFilter}/>
  </div>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
}

export default Filter;