import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        Study Engine
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contributions
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
