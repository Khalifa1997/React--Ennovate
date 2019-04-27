import React from "react";
import Aux from "./../../Components/Wrapper/Auxilary";
import img from "../../assets/images/Nova.png";
import MyVerticallyCenteredModal from "../UI/Modal/Modal";

import { withRouter } from "react-router-dom";
import "./NavBar.css";

class authNav extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  logout = () => {
    localStorage.removeItem("jwtToken");
    this.props.history.push("/");
  };
  submitHandler = event => {
    this.props.history.push("/search/" + event.target.value);
  };

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
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
                  <strong>Home</strong>{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <strong>Profile</strong>{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://about.twitter.com/en_us.html"
                >
                  <strong>Notifications</strong>
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 searchForm">
              <input
                class="form-control mr-sm-2 searchBar"
                placeholder="Search"
                aria-label="Search"
                onDoubleClick={this.submitHandler}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 tweetButton"
                onClick={() => this.setState({ modalShow: true })}
                type="button"
              >
                Nova
              </button>

              <button
                className="btn btn-outline-dark  logoutButton"
                onClick={this.logout}
                type="button"
              >
                Logout
              </button>

              <MyVerticallyCenteredModal
                show={this.state.modalShow}
                onHide={modalClose}
              />
            </form>
          </div>
        </nav>
      </Aux>
    );
  }
}

export default withRouter(authNav);
