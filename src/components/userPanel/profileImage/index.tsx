import React from "react";
import "./style.scss";

function ProfileImage(props: any) {
  return (
    <div className="profileImage">
      <img src={props.url} alt="" width="100px"></img>
    </div>
  );
}

export default ProfileImage;
