// src/pages/Booking.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setDestination] = useState("");
  const [phonenumber, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Details:", { name, email, phonenumber });
    navigate("/confirmation", { state: { name, email, phonenumber } });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            id="Email"
            value={email}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="PhoneNumber">Phone Number:</label>
          <input
            type="number"
            id="PhoneNumber"
            value={phonenumber}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Contact</button>
      </form>
    </div>
  );
};

export default Contact;