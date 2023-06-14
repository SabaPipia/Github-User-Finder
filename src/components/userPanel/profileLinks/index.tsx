import React from "react";
import "./style.scss";
import { Location, Link, Twitter, Office } from "../../icons";
interface Data {
  location?: string;
  url?: string;
  twitterUsername?: string;
  company?: string;
}
const ProfileLinks: React.FC<Data> = ({
  location,
  url,
  twitterUsername,
  company,
}) => {
  return (
    <div className="profileLinks">
      <div className="linkCard">
        <Location />
        <h3>{location ? location : "Not Available"}</h3>
      </div>
      <div className="linkCard">
        <Twitter />
        <h3>{twitterUsername ? twitterUsername : "Not Available"}</h3>
      </div>
      <div className="linkCard">
        <Link />
        <h3>{url ? url : "Not Available"}</h3>
      </div>
      <div className="linkCard">
        <Office />
        <h3>{company ? company : "Not Available"}</h3>
      </div>
    </div>
  );
};

export default ProfileLinks;
