import React from "react";
import classes from "./FiltersList.module.css";
import Button from "../FilterButton";

const FiltersList = (props) => {
  return (
    <div
      className={[classes.FiltersContainer, classes[props.isOpen]].join(" ")}
    >
      <div>
        <hr />
        <h3>HAIR COLOR</h3>
        <hr />
        {props.values.hairColor
          ? props.values.hairColor.map((el) => (
              <Button
                name={el}
                key={el}
                click={props.click}
                value={el}
                tag={"hairColor"}
                selected={props.selected.hairColor}
              />
            ))
          : ""}
        <hr />
      </div>
      <div>
        <h3>PROFESSION</h3>
        <hr />
        {props.values.professions
          ? props.values.professions.map((el) => (
              <Button
                name={el}
                key={el}
                click={props.click}
                value={el}
                tag={"professions"}
                selected={props.selected.professions}
              />
            ))
          : ""}
        <hr />
      </div>
    </div>
  );
};

export default FiltersList;
