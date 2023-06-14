import React from "react";
import "./style.scss";

interface CardProps {
  title?: string;
  count?: number | null;
  theme: string;
}

const Card: React.FC<CardProps> = ({ title, count, theme }) => {
  return (
    <div className={`card ${theme}`}>
      <h1>{title}</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Card;
