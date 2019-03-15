import React, { Component } from "react";
//import Aux from "./../../../HOC/Aux";
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import "./Login.css";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <AuthNav />
        <div className="jumbotron jumbotron-fluid PageCanvas">
          <div className="container">
            <form className="loginBox">
              <h3 className="headerText">Log in to Nova</h3>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control inputFields"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  autofocus="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control inputFields passField"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary loginButton">
                Log in
              </button>
              <a className="Links" href="#">
                Forgot password?
              </a>
            </form>
          </div>
          <div className="downDiv">
            <p class="text-sm-left downText">
              New to Nova?{" "}
              <a className="Links" href="#">
                Sign up now..
              </a>
            </p>
            <p class="text-sm-left downText">
              Need to know more{" "}
              <a className="Links" href="#">
                About us
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
