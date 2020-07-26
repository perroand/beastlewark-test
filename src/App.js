import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Components/Header";
import PopulationList from "./Containers/PopulationList";

function App() {
  return (
    <div>
      <Header />
      <PopulationList />
    </div>
  );
}

export default App;
