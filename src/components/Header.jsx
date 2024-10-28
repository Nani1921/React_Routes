// src/components/Header.jsx
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="logo-container">
        
        {/* Replace with your logo path */}
        <h1 className="site-name">E-Commers</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
             
            >
              Contact
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;