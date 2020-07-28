import React from "react";
import classes from "./FilterButton.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.Button}
      onClick={() => props.click(props.tag, props.value)}
    >
      {" "}
      {props.name}
    </button>
  );
};

export default Button;
