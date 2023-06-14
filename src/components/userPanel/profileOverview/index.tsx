import React from "react";
import Card from "./card";
import "./style.scss";

interface Data {
  publicRepos?: number;
  followingCount?: number;
  followersCount?: number;
}

const ProfileOverview: React.FC<Data> = ({
  publicRepos,
  followingCount,
  followersCount,
}) => {
  return (
    <div className="profileOverview">
      <Card title="Repos" count={publicRepos} />
      <Card title="Followers" count={followersCount} />
      <Card title="Following" count={followersCount} />
    </div>
  );
};

export default ProfileOverview;
