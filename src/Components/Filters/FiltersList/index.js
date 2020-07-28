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
        {props.values.hairColor
          ? props.values.hairColor.map((el) => (
              <Button
                name={el}
                key={el}
                click={props.click}
                value={el}
                tag={"hairColor"}
              />
            ))
          : ""}
      </div>
      <div>
        <h3>Profession</h3>
        {props.values.professions
          ? props.values.professions.map((el) => (
              <Button
                name={el}
                key={el}
                click={props.click}
                value={el}
                tag={"professions"}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default FiltersList;
