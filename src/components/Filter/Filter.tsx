import React from "react";
import styles from "./Filter.module.css";

interface propTypes {
  onChangeFilter: any
}

const Filter = ({onChangeFilter}: propTypes) => (
  <div className={styles["findBlock"]}>
    <label className={styles["findLabel"]}>Find contacts by name</label>
    <input type="text" name="filter" onChange={onChangeFilter}/>
  </div>
);

export default Filter;