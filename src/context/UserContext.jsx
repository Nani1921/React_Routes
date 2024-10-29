// src/context/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users] = useState([
    { id: 1, name: "Siva", email: "Siva@example.com", phone: "123-456-7890", address: "123 Main St, Cityville" },
    { id: 2, name: "Nani", email: "Nani@example.com", phone: "234-567-8901", address: "456 Elm St, Townsville" },
    { id: 3, name: "Kiran", email: "Kiran@example.com", phone: "345-678-9012", address: "789 Oak St, Villagetown" },
  ]);

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
};
