import React from "react";
import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  const message = props.noResults ? (
    <h1>No search results! Try another name</h1>
  ) : (
    <h1>Click on any name to see details</h1>
  );
  return props.isSelected ? (
    <div
      style={{
        background: `url(${props.item.thumbnail}) no-repeat center / cover `,
      }}
      className={classes.DetailsContainer}
    >
      <div className={classes.DescriptionContainer}>
        <div className={classes.DescriptionWrapper}>
          <h1>{props.item.name}</h1>
          <hr style={{ width: "60%" }} />
          <p>
            <span>AGE:</span> {props.item.age}
          </p>
          <p>
            <span>WEIGHT:</span> {props.item.weight.toFixed(1)} kg
          </p>
          <p>
            <span>HEIGHT:</span> {(props.item.height / 100).toFixed(2)} m
          </p>
          <p>
            <span>HAIR COLOR:</span> {props.item.hair_color}
          </p>
          <p>
            <span>PROFESSIONS:</span>{" "}
            {props.item.professions.length !== 0
              ? props.item.professions.join(", ")
              : "Unknown"}
          </p>
          <p>
            <span>FRIENDS:</span>{" "}
            {props.item.friends.length !== 0 ? (
              props.item.friends.join(", ")
            ) : (
              <em>Unknown</em>
            )}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className={classes.NotSelectedContainer}>{message}</div>
  );
};

export default ItemDetail;
