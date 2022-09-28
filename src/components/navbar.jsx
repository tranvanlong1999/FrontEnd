import React, { Component } from "react";

// convert from call to stateless Functional Component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar- Rendered");
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-fill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
