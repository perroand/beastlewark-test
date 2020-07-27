import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../PopulationList/PopulationList.module.css";
import ListItem from "../../Components/ListItem";
import CustomLoader from "../../Components/CustomLoader";
import ItemDetail from "../../Components/ItemDetail";

const PopulationList = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(data);

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

  const paginationHandler = (val) => {
    if (val === "+") {
      setPage(page + 1);
    } else if (val === "-") {
      setPage(page === 1 ? page : page - 1);
    }
  };

  console.log(page);

  const pageResults = filteredItems
    ? filteredItems.slice((page - 1) * 10, page * 10)
    : [];

  useEffect(
    () =>
      setFilteredItems(
        data
          ? data.filter((el) =>
              el.name.toLowerCase().includes(inputValue.toLowerCase())
            )
          : data
      ),
    [data, inputValue]
  );

  useEffect(() => {
    setNoResults(data ? (filteredItems.length === 0 ? true : false) : false);
  }, [filteredItems]);

  const selectedItemHandler = (id) => {
    let selected = data ? data[id] : {};
    setIsSelected(true);
    setSelectedItem(selected);
  };

  const searchByNameHandler = (event) => {
    // console.log(event.target.value);
    setIsSelected(false);
    setPage(1);
    setInputValue(event.target.value);
  };

  const namesList = data ? (
    pageResults.map((el) => (
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
          onChange={searchByNameHandler}
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
      <div className={classes.PaginationContainer}>
        <p onClick={() => paginationHandler("-")}>PREV</p>
        <p>
          {filteredItems && filteredItems.length > 0
            ? `Page ${page} of ${Math.ceil(filteredItems.length / 10)}`
            : "No Results"}
        </p>
        <p onClick={() => paginationHandler("+")}>NEXT</p>
      </div>
    </div>
  );
};

export default PopulationList;
