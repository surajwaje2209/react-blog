import React from "react";
import { Link } from "react-router-dom";
import "./styles/Model.css";

const bikes = [

  {
    id: "ola-s1-pro",
    name: "Ola S1 Pro",
    type: "Electric",
    price: "₹1.40 Lakh",
    image: "https://imgs.search.brave.com/UwL2JofmPPK6YwdgI-vZsjeSEms9uNEjeSm1j2T1Na0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhY3Rvcmp1/bmN0aW9uLmNvbS9B/bWV0aHlzdF83X2U4/MzNmMjAyZDcucG5n/P2Zvcm1hdD13ZWJw/JnF1YWxpdHk9NDAm/d2lkdGg9NzYwJmhl/aWdodD00MjQ",
    description: "Ola S1 Pro is a high-performance electric scooter with 181 km range and fast charging."
  },
  {
    id: "ather-450x",
    name: "Ather 450X",
    type: "Electric",
    price: "₹1.30 Lakh",
    image: "https://imgs.search.brave.com/LmEZhyAbPGgFWRC1Hqyu7UtAYfIwgxxHTWHr7iWEmO4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhY3Rvcmp1/bmN0aW9uLmNvbS9T/dGlsbF9XaGl0ZV8x/XzI0ZWU1NDY3NmQu/cG5nP2Zvcm1hdD13/ZWJw",
    description: "Smart and efficient, Ather 450X features fast charging, Bluetooth and navigation."
  },
  {
    id: "revolt-rv400",
    name: "Revolt RV400",
    type: "Electric",
    price: "₹1.25 Lakh",
    image: "https://imgs.search.brave.com/03C6UEhoO86c7bZ7Ji7fuasqZOxXL_5RmatYPwTY3n8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzQ3NngyNjgvbi9j/dy9lYy80MDcxMC9y/di00MDAtcmlnaHQt/c2lkZS12aWV3LTEy/LnBuZz9pc2lnPTAm/cT04MA",
    description: "India’s first AI-enabled electric bike with swappable battery and engine sound options."
  }
];

const Model = () => {
  return (
    <div className="model-container">
      <h1>EV Bikes</h1>
      <div className="model-grid">
        {bikes.map((bike) => (
          <Link to={`/bike/${bike.id}`} className="model-card" key={bike.id}>
            <img src={bike.image} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.price}</p>
            <span className={`tag ${bike.type.toLowerCase()}`}>
              {bike.type}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Model;
