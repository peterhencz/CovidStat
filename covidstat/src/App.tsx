import React from "react";

import { Navbar, Button, Chart } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar>
        <div>
          <Button type="button" additionalStyles="btn-primary">
            chart 1
          </Button>
          <Button type="button" additionalStyles="btn-primary">
            chart 2
          </Button>
          <Button type="button" additionalStyles="btn-primary">
            chart 3
          </Button>
        </div>
      </Navbar>

      <div className="container-fluid d-flex vh-100 w-100 justify-content-center align-items-center">
        <Chart type="radial" />
      </div>
    </div>
  );
}

export default App;
