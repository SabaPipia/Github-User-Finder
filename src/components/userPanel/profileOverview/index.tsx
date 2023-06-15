import React from "react";
import Card from "./card";
import "./style.scss";
import { Overview } from "../../../interface";

const ProfileOverview: React.FC<Overview> = (props) => {
  return (
    <div className={`profileOverview ${props.theme}`}>
      <Card title="Repos" count={props.publicRepos} theme={props.theme} />
      <Card
        title="Followers"
        count={props.followingCount}
        theme={props.theme}
      />
      <Card
        title="Following"
        count={props.followersCount}
        theme={props.theme}
      />
    </div>
  );
};

export default ProfileOverview;
