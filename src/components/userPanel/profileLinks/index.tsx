import React from "react";
import "./style.scss";
import { Location, Link, Twitter, Office } from "../../icons";
interface Data {
  location?: string;
  url?: string;
  twitterUsername?: string;
  company?: string;
  theme: string;
}
const ProfileLinks: React.FC<Data> = ({
  location,
  url,
  twitterUsername,
  company,
  theme,
}) => {
  return (
    <div className="profileLinks">
      <div className={`linkCard ${theme}`}>
        <Location />
        <h3>{location ? location : "Not Available"}</h3>
      </div>
      <div className={`linkCard ${theme}`}>
        <Twitter />
        <h3>{twitterUsername ? twitterUsername : "Not Available"}</h3>
      </div>
      <div className={`linkCard ${theme}`}>
        <Link />
        <h3 className="linkStyle">{url ? url : "Not Available"}</h3>
      </div>
      <div className={`linkCard ${theme}`}>
        <Office />
        <h3>{company ? company : "Not Available"}</h3>
      </div>
    </div>
  );
};

export default ProfileLinks;
