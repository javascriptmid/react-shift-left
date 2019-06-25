import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">
          <Link to="/trivia">
            Learn React
          </Link>
        </Button>
      </header>
    </div>
  );
}

export default App;
