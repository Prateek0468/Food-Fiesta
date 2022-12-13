import React from "react";
import "./Card.css";

function Card({ cardName, img, color }) {
  return (
    <div className="card">
      <img className="card__img" src={img} alt="" />
      <div className="card__shape">
        <h2>{cardName}</h2>
      </div>
    </div>
  );
}

export default Card;
