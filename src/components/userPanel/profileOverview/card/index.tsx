import React from "react";
import "./style.scss";
import { CardO } from "../../../../interface";

const Card: React.FC<CardO> = (props) => {
  return (
    <div className={`card ${props.theme}`}>
      <h1>{props.title}</h1>
      <h2>{props.count}</h2>
    </div>
  );
};

export default Card;
