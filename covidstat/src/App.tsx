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
      <Chart name="cica" />
    </div>
  );
}

export default App;
