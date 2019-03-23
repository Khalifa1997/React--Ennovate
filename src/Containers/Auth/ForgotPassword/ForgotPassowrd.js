import React, { Component } from "react";
import AuthNav from "../../../Components/AuthNav/AuthNav";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Button from "../../../Components/UI/button//button";
import Input from "../../../Components/UI/Input/Input";

import "./ForgotPassword.css";
import axios from "../../../axios-users";
class forgotPassword extends Component {
  state = {
    email: "",
    inputClasses: "form-control InputElement",
    validationError: <p />
  };

  inputChangedHandler = event => {
    let email = this.state.email;
    let inputClasses = "form-control InputElement ";
    let validationError = <p />;
    email = event.target.value;
    if (
      !event.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      inputClasses = "InputElement Invalid";
      validationError = <p className="ValidationError"> Invalid email</p>;
    }
    this.setState({
      email: email,
      inputClasses: inputClasses,
      validationError: validationError
    });
  };
  render() {
    return (
      <div>
        <AuthNav />
        <div className="PasswordPageCanvas">
          <div className="container">
            <div className="PageHeader Edge">Reset Password</div>
            <p>Enter the email associated with your Innovate account</p>
            <form>
              <input
                className={this.state.inputClasses}
                autoFocus={true}
                onChange={event => this.inputChangedHandler(event)}
              />
              {this.state.validationError}
              <Button>Reset</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default forgotPassword;
