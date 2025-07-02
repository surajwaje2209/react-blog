import React from "react";
import { Link } from "react-router-dom";
import "./BikeCard.css";

const BikeCard = ({ name, price, image }) => {
  const bikeId = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/bike/${bikeId}`} className="bike-link">
      <div className="bike-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </Link>
  );
};

export default BikeCard;
