import React from "react";
import "./style.scss";

interface CardProps {
  title?: string;
  count?: number | null;
}

const Card: React.FC<CardProps> = ({ title, count }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Card;
