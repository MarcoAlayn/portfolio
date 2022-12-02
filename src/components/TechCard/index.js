import React from "react";
import "./techcard.css";

function TechCard({ img, name }) {
  return (
    <div className="techCard">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default TechCard;
