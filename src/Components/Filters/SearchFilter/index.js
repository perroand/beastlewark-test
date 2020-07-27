import React from "react";
import classes from "./SearchFilter.module.css";

const SearchFilter = (props) => {
  return (
    <input
      className={classes.SearchInput}
      type="text"
      placeholder="Search by name!"
      onChange={props.search}
    />
  );
};

export default SearchFilter;
