import React from "react";
import myimg from '../../assets/images/nav2.jpg'
import "./AuthNav.css";

const authNav = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light AuthNav">
      <a className="navbar-brand" href="#">
        <img
          src={myimg}
          height="34"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <strong>Home</strong> <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <strong>About</strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default authNav;
