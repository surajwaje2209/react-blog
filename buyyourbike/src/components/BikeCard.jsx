import React from "react";
import "./BikeCard.css";

const BikeCard = ({ name, price, image }) => {
  return (
    <div className="bike-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default BikeCard;
