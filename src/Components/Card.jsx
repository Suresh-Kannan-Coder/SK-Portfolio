import React from "react";
import "../Pages/About.css";

const Card = ({ title, content, image }) => {
  return (
    <div>
      <div className="cards">
        <img src={image} alt={title} className="image" />
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default Card;
