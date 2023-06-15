import React from "react";
import "./style.scss";
import { Location, Link, Twitter, Office } from "../../icons";
import { ProfileL } from "../../../interface";

const ProfileLinks: React.FC<ProfileL> = (props) => {
  return (
    <div className="profileLinks">
      <div className={`linkCard ${props.theme}`}>
        <Location />
        <h3>{props.location ? props.location : "Not Available"}</h3>
      </div>
      <div className={`linkCard ${props.theme}`}>
        <Twitter />
        <h3>
          {props.twitterUsername ? props.twitterUsername : "Not Available"}
        </h3>
      </div>
      <div className={`linkCard ${props.theme}`}>
        <Link />
        <h3 className="linkStyle">{props.url ? props.url : "Not Available"}</h3>
      </div>
      <div className={`linkCard ${props.theme}`}>
        <Office />
        <h3>{props.company ? props.company : "Not Available"}</h3>
      </div>
    </div>
  );
};

export default ProfileLinks;
