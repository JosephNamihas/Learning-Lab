import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand">
        Learning Lab
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>    
          <li className="nav-item">
            <NavLink
              to="/math"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              MathLab
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/english"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              EnglishLab
            </NavLink>
          </li>          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
