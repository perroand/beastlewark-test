import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../PopulationList/PopulationList.module.css";
import ListItem from "../../Components/ListItem";
import CustomLoader from "../../Components/CustomLoader";
import ItemDetail from "../../Components/ItemDetail";
import SearchFilter from "../../Components/Filters/SearchFilter";
import SortFilter from "../../Components/Filters/SortFilter";
import FiltersList from "../../Components/Filters/FiltersList";

const PopulationList = () => {
  const [data, setData] = useState(null);
  const [pageResults, setPageResults] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [error, setError] = useState("");
  const [filterOpen, setOpenFilter] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [filters, setFilters] = useState({ hairColor: [], professions: [] });
  const [buttonBg, setButtonBg] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then((res) => {
        const data = res.data.Brastlewark;
        setData(data);
      })
      .catch(() => setError("There was an error while fetching the data."));
  }, []);

  useEffect(() => {
    setPageResults(
      filteredItems ? filteredItems.slice((page - 1) * 10, page * 10) : []
    );
  }, [filteredItems, page]);

  useEffect(
    () =>
      setFilteredItems(
        data
          ? data.filter((el) =>
              el.name.toLowerCase().startsWith(inputValue.toLowerCase())
            )
          : data
      ),
    [data, inputValue]
  );

  useEffect(() => {
    setNoResults(filteredItems && !filteredItems.length ? true : false);
  }, [filteredItems]);

  useEffect(() => {
    const professions = data
      ? Array.from(
          new Set(
            data
              .map((el) => el.professions)
              .reduce((pre, act) => [...pre, ...act])
          )
        )
      : [];
    const hairColor = data
      ? Array.from(new Set(data.map((el) => el.hair_color)))
      : [];
    setFilterValues({
      professions: professions,
      hairColor: hairColor,
    });
  }, [data]);

  useEffect(() => {
    if (data !== null) {
      const items = [...data];
      const filteredArray = items.filter((item) => {
        let include = false;

        if (filters.hairColor.length) {
          include = filters.hairColor.includes(item.hair_color);
        }
        if (filters.professions.length) {
          include = filters.professions.some((el) =>
            item.professions.includes(el)
          );
        }

        console.log(include);
        return include;
      });
      setFilteredItems(filteredArray);
    }
  }, [filters]);

  const paginationHandler = (val) => {
    if (val === "+") {
      setPage(page + 1);
    } else if (val === "-") {
      setPage(page === 1 ? page : page - 1);
    }
  };

  const selectedItemHandler = (id) => {
    let selected = data ? data[id] : {};
    setIsSelected(true);
    setSelectedItem(selected);
  };

  const searchByNameHandler = (event) => {
    setIsSelected(false);
    setPage(1);
    setInputValue(event.target.value);
  };

  const sortHandler = (event) => {
    const { value } = event.target;
    let sortArray = [...data];

    if (value === "name-des")
      sortArray = sortArray.sort((a, b) => (a.name < b.name ? -1 : 1));
    if (value === "name-asc")
      sortArray = sortArray.sort((a, b) => (a.name > b.name ? -1 : 1));
    if (value === "age-asc")
      sortArray = sortArray.sort((a, b) => (a.age < b.age ? -1 : 1));
    if (value === "age-des")
      sortArray = sortArray.sort((a, b) => (a.age > b.age ? -1 : 1));

    setFilteredItems(sortArray);
  };

  const openFilterHandler = () => {
    setOpenFilter(!filterOpen);
  };

  const filtersHandler = (name, val) => {
    if (filters) {
      let newFiltersObj = { ...filters };
      let newFilters;
      !newFiltersObj[name].includes(val)
        ? (newFilters = {
            ...filters,
            [name]: [...filters[name], val],
          })
        : (newFilters = {
            ...filters,
            [name]: [...filters[name].filter((el) => el !== val)],
          });
      setFilters(newFilters);
    }
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
        <div className={classes.FiltersHeader}>
          <div>
            <SearchFilter search={searchByNameHandler} />
            <SortFilter sort={sortHandler} />
          </div>
          <h2 onClick={openFilterHandler}>Filter</h2>
        </div>
        <FiltersList
          isOpen={filterOpen ? "Open" : "Close"}
          values={filterValues}
          click={filtersHandler}
        />
      </div>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
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
              {filteredItems && filteredItems.length
                ? `Page ${page} of ${Math.ceil(filteredItems.length / 10)}`
                : "No Results"}
            </p>
            <p onClick={() => paginationHandler("+")}>NEXT</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PopulationList;
