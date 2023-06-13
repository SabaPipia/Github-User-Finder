import React from "react";
import "./style.scss";

function ProfileName(props: any) {
  const dateString = props.data.created_at;
  const date = new Date(dateString);

  const options: any = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className="userName">
      <div className="name">
        <h2>{props.data.name}</h2>
        <h6>{props.data.login}</h6>
        <p>This profile has no bio</p>
      </div>
      <div className="joined">
        <h3>Joined {formattedDate}</h3>
      </div>
    </div>
  );
}

export default ProfileName;
