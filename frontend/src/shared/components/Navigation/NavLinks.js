import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Classes
        </NavLink>
      </li>

      <NavLink to="/addmat">Upload Material</NavLink>

      <li>
        <NavLink to="/result">View Results</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
