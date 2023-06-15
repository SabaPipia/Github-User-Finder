import React, { useState } from "react";
import axios from "axios";

import Header from "../header";
import InputField from "../search/inputField";
import ProfileImage from "../userPanel/profileImage";
import ProfileName from "../userPanel/profileName";
import ProfileOverview from "../userPanel/profileOverview";
import ProfileLinks from "../userPanel/profileLinks";
import { User } from "../../interface";

import "./style.scss";

const WrapperComponent = () => {
  const [githubData, setGithubData] = useState<User | undefined>();
  const [githubUser, setGithubUser] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string>("");
  const [userFound, setUsetFound] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("darkTheme");

  const Token = "yourToken";

  const fetchData = async () => {
    try {
      // setIsLoading(true);
      const resp = await axios(`https://api.github.com/users/${githubUser}`, {
        headers: {
          Authorization: `token ${Token}`,
        },
      });
      const data = resp.data;
      setGithubData(data);
      setSearchResult("");
      setUsetFound(true);
    } catch (error) {
      setSearchResult("Not found");
      setUsetFound(false);
    }
  };

  const handleFetchData = () => {
    fetchData();
  };
  return (
    <div className={`mainBackground ${theme}`}>
      <div className="wrapper">
        <div className="wrapperHeader">
          <Header changeTheme={setTheme} theme={theme} />
        </div>
        <div className="wrapperInputField">
          <InputField
            searchResult={searchResult}
            fetch={handleFetchData}
            setuser={setGithubUser}
            user={githubUser}
            // data={githubData}
            theme={theme}
          />
        </div>
        {userFound ? (
          <div className={`wrapperProfile ${theme}`}>
            <div className="wrapperPicture">
              {githubData ? (
                <ProfileImage avatarUrl={githubData.avatar_url} />
              ) : null}
            </div>
            <div className="wrapperUserInfo">
              <ProfileName
                name={githubData?.name}
                userName={githubData?.login}
                bio={githubData?.bio}
                date={githubData?.created_at}
                theme={theme}
              />
              <ProfileOverview
                publicRepos={githubData?.public_repos}
                followingCount={githubData?.following}
                followersCount={githubData?.followers}
                theme={theme}
              />
              <ProfileLinks
                location={githubData?.location}
                url={githubData?.html_url}
                twitterUsername={githubData?.twitter_username}
                company={githubData?.company}
                theme={theme}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WrapperComponent;
