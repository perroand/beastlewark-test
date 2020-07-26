import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../PopulationList/PopulationList.module.css";
import ListItem from "../../Components/ListItem";
import CustomLoader from "../../Components/CustomLoader";

const PopulationList = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then((res) => {
        const data = res.data.Brastlewark;
        setData(data);
      });
  }, []);

  useEffect(() => {
    setPagination(data ? data.slice((page - 1) * 10, page * 10) : []);
  }, [data, page]);

  const paginationHandler = (val) => {
    setPage(val === "+" ? page + 1 : page - 1);
  };

  const namesList = data ? (
    pagination.map((el) => <ListItem itemName={el.name} key={el.id} />)
  ) : (
    <CustomLoader />
  );

  return (
    <div className={classes.Wrapper}>
      <h1>actual population:{data ? ` ${data.length}` : ""} </h1>
      <div className={classes.ListItemContainer}>
        <div className={classes.NamesList}>{namesList}</div>
      </div>
    </div>
  );
};

export default PopulationList;
