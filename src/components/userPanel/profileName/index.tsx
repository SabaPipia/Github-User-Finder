import React from "react";
import "./style.scss";

interface Data {
  name?: string;
  userName?: string;
  bio?: string;
  date?: any;
  theme: string;
}
const ProfileName: React.FC<Data> = ({ name, userName, bio, date, theme }) => {
  const dataDate = date;
  const nDate = new Date(dataDate);

  const options: any = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = nDate.toLocaleDateString("en-US", options);
  return (
    <div className="userName">
      <div className="name">
        <h2 className={theme === "lightTheme" ? "lightTheme" : "darkTheme"}>
          {name}
        </h2>
        <h6>{userName}</h6>
        <p>{bio ? bio : "This profile has no bio"}</p>
      </div>
      <div className="joined">
        <h3>Joined {formattedDate}</h3>
      </div>
    </div>
  );
};

export default ProfileName;
