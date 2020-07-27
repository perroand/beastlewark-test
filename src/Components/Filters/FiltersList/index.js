import React from "react";
import classes from "./FiltersList.module.css";
import Button from "../FilterButton";

const FiltersList = (props) => {
  return (
    <div
      className={[classes.FiltersContainer, classes[props.isOpen]].join(" ")}
    >
      <div>
        <h3>Hair Color</h3>
        <Button />
      </div>
      <div>
        <h3>Profession</h3>
        <Button />
      </div>
    </div>
  );
};

export default FiltersList;
