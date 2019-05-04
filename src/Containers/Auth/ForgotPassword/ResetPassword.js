import React, { Component } from "react";
import AuthNav from "../../../Components/AuthNav/AuthNav";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Button from "../../../Components/UI/button//button";
import Input from "../../../Components/UI/Input/Input";

import "./ForgotPassword.css";
import axios from "../../../axios-users";

class resetPassword extends Component {
  state = {
    resetPasswordForm: {
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Your password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 25
        },
        errorMessage: "Password should be between 8 and 25 characters long",
        valid: false,
        touched: false
      },
      reenter: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Re-enter Password"
        },
        value: "",
        validation: {
          required: true,
          matching: true
        },
        errorMessage: "Passwords mismatch",
        valid: false,
        touched: false
      }
    },
    inputClasses: "form-control InputElement",
    validationError: <p />,
    formIsValid: false
  };
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedResetPasswordForm = {
      ...this.state.resetPasswordForm
    };
    const updatedFormElement = {
      ...updatedResetPasswordForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedResetPasswordForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedResetPasswordForm) {
      formIsValid =
        updatedResetPasswordForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      resetPasswordForm: updatedResetPasswordForm,
      formIsValid: formIsValid
    });
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.matching) {
      isValid =
        value === this.state.resetPasswordForm.password.value && isValid;
    }

    return isValid;
  }
  submitHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    let password = { password: this.state.resetPasswordForm.password.value };
    axios
      .post(
        "/reset_password?token=" + this.props.match.params.token,
        password,
        {
          headers: {
            token: this.props.match.params.token
          }
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.resetPasswordForm) {
      formElementsArray.push({
        id: key,
        config: this.state.resetPasswordForm[key]
      });
    }
    let form = (
      <form onSubmit={this.submitHandler} className="signupBox">
        <h3 className="signupHeader">Reset your password</h3>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            errorMessage={formElement.config.errorMessage}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            autoFocus={formElement.config.autoFocus}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button
          //className="btn btn-primary signupButton"
          //onClick={this.passwordHandler}
          disabled={!this.state.formIsValid}
        >
          Signup
        </Button>
      </form>
    );
    return (
      <div>
        <AuthNav />
        <div className="PasswordPageCanvas">
          <div className="container">{form}</div>
        </div>
      </div>
    );
  }
}
export default resetPassword;
