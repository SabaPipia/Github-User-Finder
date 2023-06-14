import React, { useState } from "react";
import Header from "../header";
import InputField from "../search/inputField";
import ProfileImage from "../userPanel/profileImage";
import ProfileName from "../userPanel/profileName";
import ProfileOverview from "../userPanel/profileOverview";
import ProfileLinks from "../userPanel/profileLinks";
import "./style.scss";
interface Data {
  name: string;
  login: string;
  bio: string;
  created_at: string | number;
  public_repos: number;
  following: number;
  followers: number;
  avatar_url: string;
  location: string;
  html_url: string;
  twitter_username: string;
  company: string;
}
const WrapperComponent: React.FC = () => {
  const [githubData, setGithubData] = useState<Data | null>(null);
  const [githubUser, setGithubUser]: any = useState("");
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
            <ProfileImage avatarUrl={githubData?.avatar_url} />
          </div>
          <div className="wrapperUserInfo">
            <ProfileName
              name={githubData?.name}
              userName={githubData?.login}
              bio={githubData?.bio}
              date={githubData?.created_at}
            />
            <ProfileOverview
              publicRepos={githubData?.public_repos}
              followingCount={githubData?.following}
              followersCount={githubData?.followers}
            />
            <ProfileLinks
              location={githubData?.location}
              url={githubData?.html_url}
              twitterUsername={githubData?.twitter_username}
              company={githubData?.company}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WrapperComponent;
