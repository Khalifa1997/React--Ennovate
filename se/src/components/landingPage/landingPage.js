import React from 'react';
import lap from '../../assets/images/laptop.jpg'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faReact, faDocker, faNode, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import NavbarPic from '../../assets/images/nav2.jpg'

import './LandingPage.css'
function LandingPage(props) {


  return (

    <div>
      <div >

        <nav className="navbar navbar-expand-lg navbar-light primary-color fixed-top navbarbg">

          <div className="container-fluid">

            <a className="navbar-brand" href="#"><img src={NavbarPic} width="133px" /></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="basicExampleNav">

              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home

                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>

              </ul>
              <div className="md-form my-0">
                <div class="btn-toolbar ">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: 'black', marginRight: '20px' }} size="2x" /></a>
                    </li>
                    <li className="nav-item">
                      <a href="#"><FontAwesomeIcon icon={faGithub} style={{ color: 'black', marginRight: '20px', marginLeft: '0px' }} size="2x" /></a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-link" href="#">Login</a></li>
                    <li className="nav navbar-nav">
                      <button type="button" className="btn btn-outline-success">Sign up</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </nav>

      </div>
      <div className=" text-white tm-font-big bg">
        <div className="tm-next tm-intro-next" >
          <a href="#introduction" className="text-center tm-down-arrow-link">
            <FontAwesomeIcon icon={faArrowCircleDown} size="3x" style={{ color: '#3496d8', marginBottom: '30px', }} />
          </a>
        </div>
      </div>
      <section className=" tm-section-pad-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={lap} alt="Image" className="img-fluid tm-intro-img" />

            </div>
            <div className="col-lg-6">
              <div className="tm-intro-text-container" id="introduction">
                <h2 className="tm-text-primary mb-4 tm-section-title">Introduction</h2>
                <p className="mb-4 tm-intro-text">
                  This is our website lol.
            </p>
                <p className="mb-5 tm-intro-text">
                  Please tell your friends about our site
              <a rel="nofollow" href="https://templatemo.com">templatemo</a>. Thank you.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Curabitur dapibus tristique enim a imperdiet. Etiam
              tristique sem sed condimentum posuere. </p>
                <div className="tm-next">
                  <a href="#work" className="tm-intro-text tm-btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="row tm-section-pad-top">
          <div className="col-lg-4 text-center">
            <FontAwesomeIcon icon={faReact} size="6x" style={{ color: '#3496d8', marginBottom: '30px', textAlign: 'center' }} />
            <h4 className="text-center tm-text-primary mb-4">100% Reactful</h4>
            <p>
              Using React Library as our main frontend for quick development and little to no down-time.
          </p>
          </div>

          <div className="col-lg-4 text-center">
            <FontAwesomeIcon icon={faNode} size="6x" style={{ color: '#3496d8', marginBottom: '30px' }} />
            <h4 className="text-center tm-text-primary mb-4">NodeJS</h4>
            <p>
              Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc.
              Vivamus imperdiet sem quis orci pharetra convallis. Nunc a tempus
              nisi, sed fringilla purus. In hac habitasse platea.
          </p>
          </div>

          <div className="col-lg-4 text-center">
            <FontAwesomeIcon icon={faDocker} size="6x" style={{ color: '#3496d8', marginBottom: '30px' }} />
            <h4 className="text-center tm-text-primary mb-4">Docker</h4>
            <p>
              Donec vestibulum libero nisl. Curabitur ac orci ac lorem blandit
              volutpat. Sed ac sodales nibh, ut porttitor elit. Sed id dui mi.
              Vestibulum ante ipsum primis in faucibus.
          </p>
          </div>
        </div>

      </section>


    </div >


  );
}



export default LandingPage;
