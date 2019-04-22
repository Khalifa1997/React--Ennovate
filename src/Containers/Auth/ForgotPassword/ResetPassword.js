import React, { Component } from "react";
import AuthNav from "../../../Components/AuthNav/AuthNav";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Button from "../../../Components/UI/button//button";
import Input from "../../../Components/UI/Input/Input";

import "./ForgotPassword.css";
import axios from "../../../axios-users";

class resetPassword extends Component {
  state = {
    password: "",
    inputClasses: "form-control InputElement",
    validationError: <p />,
    inputValid: false
  };
  inputChangedHandler = (event, id) => {
    if (id == 0) {
    }
  };
  render() {
    return (
      <div>
        <AuthNav />
        <div className="PasswordPageCanvas">
          <div className="container">
            <div className="PageHeader Edge">Reset Password</div>
            <p>Enter the new password</p>

            <input
              className={this.state.inputClasses}
              autoFocus={true}
              onChange={event => this.inputChangedHandler(event)}
              type="password"
            />
            <input
              type="password"
              className={this.state.inputClasses}
              autoFocus={true}
              onChange={event => this.inputChangedHandler(event)}
            />
            {this.state.validationError}
            <Button
              onClick={event => this.submitHandler(event)}
              disabled={!this.state.inputValid}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default resetPassword;
