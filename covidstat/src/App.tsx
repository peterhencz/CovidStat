import React, { useState } from "react";

import { Navbar, Button, Chart } from "./components";
import "./App.scss";

function App() {
  const [chartType, setChartType] = useState<string>("bar");

  return (
    <div className="App">
      <Navbar>
        <div>
          <Button
            type="button"
            additionalStyles="btn-primary"
            onClick={() => setChartType("pie")}>
            chart 1
          </Button>   
          <Button
            type="button"
            additionalStyles="btn-primary"
            onClick={() => setChartType("bar")}>
            chart 2
          </Button>
          <Button
            type="button"
            additionalStyles="btn-primary"
            onClick={() => setChartType("radial")}>
            chart 3
          </Button>
        </div>
      </Navbar>

      <div className="container-fluid d-flex vh-100 w-100 justify-content-center align-items-center">
        <Chart type={chartType} />
      </div>
    </div>
  );
}

export default App;
