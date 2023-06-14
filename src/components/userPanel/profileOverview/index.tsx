import React from "react";
import Card from "./card";
import "./style.scss";

interface Data {
  publicRepos?: number;
  followingCount?: number;
  followersCount?: number;
  theme: string;
}

const ProfileOverview: React.FC<Data> = ({
  publicRepos,
  followingCount,
  followersCount,
  theme,
}) => {
  return (
    <div className={`profileOverview ${theme}`}>
      <Card title="Repos" count={publicRepos} theme={theme} />
      <Card title="Followers" count={followingCount} theme={theme} />
      <Card title="Following" count={followersCount} theme={theme} />
    </div>
  );
};

export default ProfileOverview;
