import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="nav-wrapper black">
      <div className="container">
        <a href="/">Mode</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/additem">Add Item</NavLink>
          </li>
          <li>
            <NavLink to="/Items">Items</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
