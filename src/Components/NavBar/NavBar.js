import React from "react";
import Aux from "./../../Components/Wrapper/Auxilary";
import img from "../../assets/images/Nova.png";
import "./NavBar.css";

const authNav = props => (
  <Aux>
    <nav className="navbar navbar-expand-lg navbar-light bg-light AuthNav">
      <a className="navbar-brand" href="/">
        <img className="LogoNavBar" src={img} alt="" height="40" />
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
            <a className="nav-link" href="/">
              <strong>Home</strong> <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <strong>Profile</strong>{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://about.twitter.com/en_us.html">
              <strong>Notifications</strong>
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 searchForm">
          <input
            class="form-control mr-sm-2 searchBar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0 tweetButton" type="submit">
            Nova
          </button>
        </form>
      </div>
    </nav>
  </Aux>
);

export default authNav;
