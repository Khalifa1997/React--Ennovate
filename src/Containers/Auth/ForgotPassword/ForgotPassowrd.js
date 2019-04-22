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
    validationError: <p />,
    inputValid: false
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
      validationError = (
        <p className="ValidationError"> Email format is incorrect</p>
      );
      this.setState({ inputValid: false });
    } else this.setState({ inputValid: true });
    this.setState({
      email: email,
      inputClasses: inputClasses,
      validationError: validationError
    });
  };
  submitHandler = (event, email) => {
    axios
      .get("http://localhost:8080/forgetPassword/" + email)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
  render() {
    return (
      <div>
        <AuthNav />
        <div className="PasswordPageCanvas">
          <div className="container">
            <div className="PageHeader Edge">Reset Password</div>
            <p>Enter the email associated with your Ennovate account</p>

            <input
              className={this.state.inputClasses}
              autoFocus={true}
              onChange={event => this.inputChangedHandler(event)}
            />
            {this.state.validationError}
            <Button
              clicked={event => this.submitHandler(event, this.state.email)}
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

export default forgotPassword;
