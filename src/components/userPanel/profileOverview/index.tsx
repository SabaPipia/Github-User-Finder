import React from "react";
import Card from "./card";
import "./style.scss";

interface ProfileOverviewProps {
  data: {
    public_repos: number;
    followers: number;
    following: number;
  };
}
const ProfileOverview: React.FC<ProfileOverviewProps> = (props) => {
  return (
    <div className="profileOverview">
      <Card data={{ title: "Repos", count: props.data.public_repos }} />
      <Card data={{ title: "Followers", count: props.data.followers }} />
      <Card data={{ title: "Following", count: props.data.following }} />
    </div>
  );
};

export default ProfileOverview;
