import React from "react";

import { Navbar, Button } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar>
        <div>
          <Button type="button" additionalStyles="btn-primary">
            cica1
          </Button>
          <Button type="button" additionalStyles="btn-primary">
            cica2
          </Button>
          <Button type="button" additionalStyles="btn-primary">
            cica3
          </Button>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
