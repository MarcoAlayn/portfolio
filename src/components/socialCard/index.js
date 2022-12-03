import React from "react";
import "./socialcard.css";

function SocialCard({ img, name, link }) {
  return (
    <a href={link} target="_blank" className="socialCard" rel="noreferrer">
      <img src={img} alt={name} />
      <p>{name}</p>
    </a>
  );
}

export default SocialCard;
