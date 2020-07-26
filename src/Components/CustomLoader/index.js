import React from "react";
import Loader from "react-loader-spinner";
import classes from "./CustomLoader.module.css";

const CustomLoader = () => (
  <div className={classes.Loader}>
    <Loader type="ThreeDots" color="#000" height={40} width={40} />
  </div>
);

export default CustomLoader;
