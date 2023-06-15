import React from "react";
import "./style.scss";
import { Avatar } from "../../../interface";

const ProfileImage: React.FC<Avatar> = (props) => {
  return (
    <div className="profileImage">
      <img src={props.avatarUrl} alt="" width="100px"></img>
    </div>
  );
};

export default ProfileImage;
