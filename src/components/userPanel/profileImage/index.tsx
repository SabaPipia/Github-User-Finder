import React from "react";
import "./style.scss";
interface Data {
  avatarUrl?: string;
}
const ProfileImage: React.FC<Data> = ({ avatarUrl }) => {
  return (
    <div className="profileImage">
      <img src={avatarUrl} alt="" width="100px"></img>
    </div>
  );
};

export default ProfileImage;
