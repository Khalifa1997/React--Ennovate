import React, { Component } from "react";
import AuthNav from "../../../Components/AuthNav/AuthNav";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Button from "../../../Components/UI/button//button";
import Input from "../../../Components/UI/Input/Input";

import "./ForgotPassword.css";
import axios from "../../../axios-users";
/**
 * This is a description of the forgotPassword component.
 * @class
 * */
class forgotPassword extends Component {
  /**
   * @property {string} email -The email associated with the account.
   * @property {string} inputClasses -The input element styling classes.
   * @property {jsx} errorMessage - A paragraph containing the message to be displayed in case of errors.
   */
  state = {
    email: "",
    inputClasses: "form-control InputElement",
    errorMessage: <p />
  };
  /**
   * Handles any changes in the input element's value by running validation checks on the new value and updating the email value in the state.
   * @param {event} event -The input changed event.
   */
  inputChangedHandler(event) {
    let email = this.state.email;
    let inputClasses = "form-control InputElement ";
    let errorMessage = <p />;
    email = event.target.value;
    if (
      !event.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      inputClasses = "InputElement Invalid";
      errorMessage = <p className="ValidationError"> Invalid email</p>;
    }
    this.setState({
      email: email,
      inputClasses: inputClasses,
      errorMessage: errorMessage
    });
  }
  render() {
    return (
      <div>
        <AuthNav />
        <div className="PasswordPageCanvas">
          <div className="container">
            <div className="PageHeader Edge">Reset Password</div>
            <p>Enter the email sssociated with your Innovate account</p>
            <form>
              <input
                className={this.state.inputClasses}
                autoFocus={true}
                onChange={event => this.inputChangedHandler(event)}
              />
              {this.state.errorMessage}
              <Button>Reset</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default forgotPassword;
