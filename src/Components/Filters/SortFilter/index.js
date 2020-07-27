import React from "react";

const SortFilter = (props) => {
  return (
    <>
      <select onChange={props.sort}>
        <option selected value="title">
          --Sort Items--
        </option>
        <option value="name-des">Name Descending</option>
        <option value="name-asc">Name Ascending</option>
        <option value="age-asc">Younger to Older</option>
        <option value="age-des">Older to Younger</option>
      </select>
      ;
    </>
  );
};

export default SortFilter;
