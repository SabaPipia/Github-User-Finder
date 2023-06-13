import React from "react";
import "./style.scss";
import { Location, Link, Twitter, Office } from "../../icons";

function ProfileLinks(props: any) {
  return (
    <div className="profileLinks">
      <div className="linkCard">
        <Location />
        <h3>{props.data.location ? props.data.location : "Not Available"}</h3>
      </div>
      <div className="linkCard">
        <Twitter />
        <h3>Not Available</h3>
      </div>
      <div className="linkCard">
        <Link />
        <h3>{props.data.html_url ? props.data.html_url : "Not Available"}</h3>
      </div>
      <div className="linkCard">
        <Office />
        <h3>{props.data.company ? props.data.company : "Not Available"}</h3>
      </div>
    </div>
  );
}

export default ProfileLinks;
