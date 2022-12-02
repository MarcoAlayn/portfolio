import React from "react";
import "./workcard.css";

function WorkCard({ image, name, linkPage, linkCode }) {
  return (
    <div className="workCard">
      <img src={image} alt={name} />
      <p className="h3">{name}</p>
      <div className="btn">
        <a href={linkCode}>Ver Código</a>
        <a href={linkPage}>Ver Pagina</a>
      </div>
    </div>
  );
}

export default WorkCard;
