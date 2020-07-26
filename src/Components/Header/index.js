import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.HeaderWrapper}>
      {/* <h2>Welcome to</h2> */}
      <h1>brastlewark town</h1>
      <p>Where the journey begins</p>
    </div>
  );
};

export default Header;
