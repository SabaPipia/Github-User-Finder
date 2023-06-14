import React, { useState, useEffect } from "react";
import WrapperComponent from "./components/wrapperComponent";
import "./App.scss";

function App() {
  return (
    <div className="back">
      <div className="App">
        <WrapperComponent />
      </div>
    </div>
  );
}

export default App;
