// src/pages/Confirmation.jsx
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { name, email, phonenumber } = location.state || {};

  return (
    <div>
      <h2>Contact Confirmation</h2>
      {name ? (
        <div>
          <p>Thank you, {name}!</p>
          <p>
            Your Email {email} is recieved.
          </p>
          <p>Phone Number  {phonenumber}.</p>
        </div>
      ) : (
        <p>No contact details available.</p>
      )}
    </div>
  );
};

export default Confirmation;