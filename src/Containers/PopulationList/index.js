import React, { useState, useEffect } from "react";
import axios from "axios";

const PopulationList = () => {
  const [data, setData] = useState([]);
  //   const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then((res) => {
        const data = res.data;
        setData(data);
      });
    //   .catch((error) =>
    //     setErrorMessage("Server not responding.")
    //   );
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default PopulationList;
