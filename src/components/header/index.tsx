import React from "react";
import "./style.scss";
import { Light, Dark } from "../icons";

const Header = (props: any) => {
  return (
    <div className={`header ${props.theme}`}>
      <div className="name">
        <h3>devfinder</h3>
      </div>
      <div
        className="themeSelector"
        onClick={() => {
          if (props.theme === "darkTheme") {
            props.changeTheme("lightTheme");
          } else {
            props.changeTheme("darkTheme");
          }
        }}
      >
        <h6>{props.theme === "darkTheme" ? "light" : "dark"}</h6>
        {props.theme === "darkTheme" ? <Dark /> : <Light />}
      </div>
    </div>
  );
};

export default Header;
