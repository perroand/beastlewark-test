import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={classes.ListContainer}>
      <div
        className={classes.ItemContainer}
        onClick={() => props.click(props.id)}
      >
        <h1 className={classes.Column1}>{props.itemName}</h1>
      </div>
    </div>
  );
};

export default ListItem;
