import React, { useState, useEffect } from "react";
import WrapperComponent from "./components/wrapperComponent";
import "./App.scss";

function App() {
  // const [githubData, setGithubData]: any = useState([]);
  // const [githubUser, setGithubUser] = useState("SabaPipia");
  // const fetchData = () => {
  //   return fetch(`https://api.github.com/users/${githubUser}`)
  //     .then((response) => response.json())
  //     .then((data) => setGithubData(data));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className="App">
      {/* <input
        type="text"
        placeholder="Search for User"
        onChange={(e) => setGithubUser(e.target.value)}
        className="input_search"
      />
      <button onClick={fetchData} className="search_button">
        Search Github
      </button> */}
      <WrapperComponent />
    </div>
  );
}

export default App;
