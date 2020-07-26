import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../PopulationList/PopulationList.module.css";
import ListItem from "../../Components/ListItem";
import CustomLoader from "../../Components/CustomLoader";
import ItemDetail from "../../Components/ItemDetail";

const PopulationList = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [noResults, setNoResults] = useState(false);

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

  const selectedItemHandler = (id) => {
    let selected = data ? data[id] : {};
    setIsSelected(true);
    setSelectedItem(selected);
  };

  const namesList = data ? (
    pagination.map((el) => (
      <ListItem
        itemName={el.name}
        key={el.id}
        id={el.id}
        click={selectedItemHandler}
      />
    ))
  ) : (
    <CustomLoader />
  );

  return (
    <div className={classes.Wrapper}>
      <div className={classes.ListHeader}>
        {/* <p>Actual Population:{data ? ` ${data.length}` : ""} </p> */}
        <input
          className={classes.SearchInput}
          type="text"
          placeholder="Search by name!"
        />
        <h2>Filter</h2>
      </div>
      <div className={classes.ListItemContainer}>
        <div className={classes.NamesList}>{namesList}</div>
        <div className={classes.ItemDetail}>
          <ItemDetail
            item={selectedItem}
            isSelected={isSelected}
            noResults={noResults}
          />
        </div>
      </div>
    </div>
  );
};

export default PopulationList;
