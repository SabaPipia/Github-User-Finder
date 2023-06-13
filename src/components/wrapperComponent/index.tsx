import React, { useState, useEffect } from "react";
import Header from "../header";
import InputField from "../search/inputField";
import ProfileImage from "../userPanel/profileImage";
import ProfileName from "../userPanel/profileName";
import "./style.scss";

function WrapperComponent() {
  const [githubData, setGithubData]: any = useState([]);
  const [githubUser, setGithubUser] = useState("SabaPipia");
  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };
  // useEffect(() => {
  //   fetchData();

  // }, []);
  // all info
  console.log(githubData);
  return (
    <div className="wrapper">
      <div className="wrapperHeader">
        <Header />
      </div>
      <div className="wrapperInputField">
        <InputField fetch={fetchData} setuser={setGithubUser} />
      </div>
      <div className="wrapperProfile">
        <div className="wrapperPicture">
          <ProfileImage url={githubData.avatar_url} />
        </div>
        <div className="wrapperUserInfo">
          <ProfileName data={githubData} />
        </div>
      </div>
    </div>
  );
}

export default WrapperComponent;
