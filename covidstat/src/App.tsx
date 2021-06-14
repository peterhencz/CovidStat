import React, { useState } from "react";

import { Navbar, Button, Chart } from "./components";
import "./App.scss";

function App() {
  const [chartType, setChartType] = useState<string>("bar");

  return (
    <div className="App">
      <Navbar>
        <div>
          <a className="navbar-brand" href="#">
            <h3>Covid Hungary Statistics. Please select a chart type: </h3>
          </a>
          <div className="collapse navbar-collapse">
            <Button
              type="button"
              additionalStyles="btn-primary"
              onClick={() => setChartType("pie")}>
              <p>PIE</p>
            </Button>
            <Button
              type="button"
              additionalStyles="btn-primary"
              onClick={() => setChartType("bar")}>
              <p>BAR</p>
            </Button>
            <Button
              type="button"
              additionalStyles="btn-primary"
              onClick={() => setChartType("radial")}>
              <p>FUNNEL</p>
            </Button>
          </div>
        </div>
      </Navbar>

      <div className="container-fluid d-flex vh-100 w-100 justify-content-center align-items-center">
        <Chart type={chartType} />
      </div>
    </div>
  );
}

export default App;
