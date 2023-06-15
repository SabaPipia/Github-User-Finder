import React from "react";
import "./style.scss";
import { ProfileN } from "../../../interface";

const ProfileName: React.FC<ProfileN> = (props) => {
  const dataDate = props.date;
  const nDate = new Date(dataDate);

  const options: any = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = nDate.toLocaleDateString("en-US", options);
  return (
    <div className="userName">
      <div className="name">
        <h2
          className={props.theme === "lightTheme" ? "lightTheme" : "darkTheme"}
        >
          {props.name}
        </h2>
        <h6>{props.userName}</h6>
        <p>{props.bio ? props.bio : "This profile has no bio"}</p>
      </div>
      <div className="joined">
        <h3>Joined {formattedDate}</h3>
      </div>
    </div>
  );
};

export default ProfileName;
