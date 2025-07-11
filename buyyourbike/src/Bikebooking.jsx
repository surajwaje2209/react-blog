import React from "react";
import "./BikeDetail.css";

const BikeBooking = ({ bike }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;

    alert(`✅ Booking confirmed for ${bike.name}!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`);
    e.target.reset(); // clear form
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Book This Bike</h3>

      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="username" required />
      </div>

      <div className="form-group">
        <label>Phone:</label>
        <input type="tel" name="phone" required />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>

      <button type="submit" className="submit-btn">Book Now</button>
    </form>
  );
};

export default BikeBooking;
