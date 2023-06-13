import React, { useState, useEffect } from "react";
import Header from "../header";
import InputField from "../search/inputField";
import ProfileImage from "../userPanel/profileImage";
import ProfileName from "../userPanel/profileName";
import ProfileOverview from "../userPanel/profileOverview";
import ProfileLinks from "../userPanel/profileLinks";
import "./style.scss";

function WrapperComponent() {
  const [githubData, setGithubData]: any = useState([]);
  const [githubUser, setGithubUser]: any = useState();
  const [userFound, setUserFound]: any = useState(false);

  const Token = "{yourToken}";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${githubUser}`,
        {
          headers: {
            Authorization: `token ${Token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setGithubData(data);
        setUserFound(true);
      } else {
        console.error("Failed to fetch data from GitHub API");
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };
  console.log(githubData);
  const githubUserDataI = {
    public_repos: githubData.public_repos,
    followers: githubData.followers,
    following: githubData.following,
  };
  return (
    <div className="wrapper">
      <div className="wrapperHeader">
        <Header />
      </div>
      <div className="wrapperInputField">
        <InputField
          fetch={fetchData}
          setuser={setGithubUser}
          user={githubUser}
          data={githubData}
        />
      </div>
      {userFound ? (
        <div className="wrapperProfile">
          <div className="wrapperPicture">
            <ProfileImage url={githubData.avatar_url} />
          </div>
          <div className="wrapperUserInfo">
            <ProfileName data={githubData} />
            <ProfileOverview data={githubUserDataI} />
            <ProfileLinks data={githubData} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default WrapperComponent;
