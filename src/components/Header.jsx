// src/components/Header.jsx
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div >
        
        
        <h1 className="dd" >E-Commerce</h1>
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
          <li>
            <NavLink
              to="/user"
             
            >
              Users
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;