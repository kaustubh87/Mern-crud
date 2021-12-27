import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item pr-5 pt-5 pb-5">
        <Link to="/">Home</Link>
      </li>
      <br />
      <li className="nav-item pr-5 pt-5 pb-5">
        <Link to="/create">Create</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
