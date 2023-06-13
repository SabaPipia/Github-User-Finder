import React from "react";
import "./style.scss";

interface CardProps {
  data: {
    title: string;
    count: number;
  };
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <h1>{props.data.title}</h1>
      <h2>{props.data.count}</h2>
    </div>
  );
};

export default Card;
