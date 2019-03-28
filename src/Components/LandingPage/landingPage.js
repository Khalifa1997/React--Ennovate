import React from "react";
import lap from "../../assets/images/laptop.jpg";
//import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faGrin,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faDocker,
  faNode,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import NavbarPic from "../../assets/images/Nova.png";

import "./LandingPage.css";
function LandingPage(props) {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light primary-color fixed-top navbarbg">
          <div className="container-fluid">
            <a className="navbar-brand aclass" href="/">
              <img
                src={NavbarPic}
                height="48px"
                alt="pic"
                className="NavBarLogoLanding"
              />
            </a>

            <div className="collapse navbar-collapse" id="basicExampleNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link aclass" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link aclass"
                    href="https://about.twitter.com/en_us.html"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="https://twitter.com/" className="aclass">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="navicon"
                      style={{ color: "darkgrey", marginRight: "20px" }}
                      size="2x"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://github.com/AyahElSamadoni/FrontEnd"
                    className="aclass"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="navicon"
                      style={{
                        color: "darkgrey",
                        marginRight: "20px",
                        marginLeft: "0px"
                      }}
                      size="2x"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" nav-link aclass" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="aclass">
                    <button type="button" className="btn btn-outline-success">
                      Sign up
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className=" text-white tm-font-big bg">
        <div className="tm-next tm-intro-next">
          <a href="#introduction" className="text-center tm-down-arrow-link">
            <FontAwesomeIcon
              icon={faArrowCircleDown}
              size="3x"
              style={{ color: "#3496d8", marginBottom: "30px" }}
            />
          </a>
        </div>
      </div>
      <section className=" tm-section-pad-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={lap} alt="" className="img-fluid tm-intro-img" />
            </div>
            <div className="col-lg-6">
              <div className="tm-intro-text-container" id="introduction">
                <h2 className="tm-text-primary mb-4 tm-section-title">
                  Introduction
                </h2>
                <p className="mb-4 tm-intro-text">This is eNovate Website.</p>
                <p className="mb-5 tm-intro-text">
                  Connect with your friends immediatelly and enjoy one of the
                  most pleasent and user-friendly experiences you'd ever have in
                  your lifetime!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row tm-section-pad-top"
          style={{ paddingBottom: "60px" }}
        >
          <div className="col-lg-4 text-center">
            <FontAwesomeIcon
              icon={faReact}
              size="6x"
              style={{
                color: "#3496d8",
                marginBottom: "30px",
                textAlign: "center"
              }}
            />
            <h4 className="text-center tm-text-primary mb-4"> 100% Reactful</h4>
            <div className="container">
              <p>
                Using React Library as our main frontend for quick development
                and little to no down-time.
              </p>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <FontAwesomeIcon
              icon={faNode}
              size="6x"
              style={{ color: "#3496d8", marginBottom: "30px" }}
            />
            <h4 className="text-center tm-text-primary mb-4">NodeJS</h4>
            <div className="container">
              <p>
                With NodeJS as our main Backend, Enjoy one of the quickest and
                smoothest experiences ever!
              </p>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <FontAwesomeIcon
              icon={faDocker}
              size="6x"
              style={{ color: "#3496d8", marginBottom: "30px" }}
            />
            <h4 className="text-center tm-text-primary mb-4">Docker</h4>
            <div className="container">
              <p>
                Secure, Powerful environment for the least downtime possible and
                the best user experience possible!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" tm-section-pad-top bg2"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div class="col-sm text-center">
              <FontAwesomeIcon
                icon={faGrin}
                size="6x"
                style={{ color: "white", marginBottom: "30px" }}
              />
              <h1 style={{ display: "block" }}>Totally Moderated Content</h1>
            </div>

            <div class="col-sm text-center">
              <FontAwesomeIcon
                icon={faUserFriends}
                size="6x"
                style={{ color: "white", marginBottom: "30px" }}
              />
              <h1 style={{ display: "block" }}>Super Friendly Community!</h1>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" tm-section-pad-top  text-center"
        style={{ paddingTop: "60px", paddingBottom: "30px" }}
      >
        <h1
          className="text-center"
          style={{ paddingBottom: "3px", color: "#3496d8" }}
        >
          No fees needed at all!
        </h1>
        <a href="/signup">
          <button
            type="button"
            class="btn btn-light btn-lg"
            style={{
              paddingTop: "3px",
              marginBottom: "20px",
              color: "White",
              backgroundColor: "#3496d8"
            }}
          >
            Join us now!
          </button>
        </a>
      </section>
    </div>
  );
}

export default LandingPage;
