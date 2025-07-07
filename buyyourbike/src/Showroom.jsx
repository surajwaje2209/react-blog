import React from "react";
import "./Showroom.css";

const Showroom = () => {
  return (
    <div className="showroom-container">
      <h1>🏢 Our Showroom</h1>
      <img
        src="https://imgs.search.brave.com/Ay-CKRywn7DpBxgkrUOmIW0Ghy_sEET-o5_8oE1r54s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhhL2Y4/LzMyLzhhZjgzMjAz/YWY0ZDFmNzA5NDE5/ZDNlMTY5MDc3OWQz/LmpwZw"
        alt="Showroom"
        className="showroom-image"
      />
      <div className="showroom-info">
        <h2>BuyYourBike Showroom</h2>
        <p><strong>📍 Location:</strong> MG Road, Pune, Maharashtra, India</p>
        <p><strong>📞 Contact:</strong> +91 98765 43210</p>
        <p><strong>📧 Email:</strong> contact@buyyourbike.com</p>
        <p><strong>🕘 Hours:</strong> Mon–Sat: 9:00 AM – 8:00 PM</p>
        <p><strong>🌐 Website:</strong> www.buyyourbike.com</p>

        <h3>📌 Map</h3>
        <iframe
          title="Showroom Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.498228168711!2d73.877612074715!3d18.55180728255954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c066d45c7aeb%3A0x7715b30e44188d7b!2sMG%20Road%2C%20Pune!5e0!3m2!1sen!2sin!4v1623773990987!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px", marginTop: "15px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Showroom;
