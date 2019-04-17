import React, { Component } from "react";
import AuthNav from "../../../Components/AuthNav/AuthNav";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Button from "../../../Components/UI/button//button";
import Input from "../../../Components/UI/Input/Input";

import "./Signup.css";
import axios from "../../../axios-users";
/**
 * This is a description of the signup Component.
 * @class
 * */
class signup extends Component {
  /**
   
   * @property {json}  signupForm               - The Signup Form object that contains all the form's components properties.
   * @property {json} signupForm.screenname -User's screen name properties and configurations.
   * @property {string} signupForm.screenname.elementType -The type of the input element.
   * @property {json} signupForm.screenname.elementConfig -The input element configurations.
   * @property {string} signupForm.screenname.elementConfig.type -The input element type.
   * @property {string} signupForm.screenname.elementConfig.placeholder -The input element's placeholder.
   * @property {string} signupForm.screenname.value -The value of the Screen Name.
   * @property {boolean} signupForm.screenname.valid -indicates whether the input value is valid or not.
   * @property {boolean} signupForm.screenname.touched -indicates whether the the input element has been touched or not.
   * @property {boolean} signupForm.screenname.autoFocus - Is set to true when the element should be autofocused.
   * @property {string} signupForm.screenname.errorMessage -The error message to be displayed when the input is invalid.
   * @property {json} signupForm.screenname.validation -The validations required for the screen name.
   * @property {boolean} signupForm.screenname.validation.required -Indicates whether the field is necessary or not to signup.
   * @property {boolean} signupForm.screenname.validation.nospace -Is set to true when spaces are not allowed in the input value.
   * @property {boolean} signupForm.screenname.validation.startLetter -Is set to true when the input value should start with a letter only.
   * @property {integer} signupForm.screenname.validation.maxLength -The maximum length for the input value.
   * @property {json} signupForm.username -User's username properties and configurations.
   * @property {string} signupForm.username.elementType -The type of the element.
   * @property {json} signupForm.username.elementConfig -The input element configurations.
   * @property {string} signupForm.username.elementConfig.type -The input element type.
   * @property {string} signupForm.username.elementConfig.placeholder -The input element's placeholder.
   * @property {string} signupForm.username.value -The value of the Username.
   * @property {boolean} signupForm.username.valid -indicates whether the input value is valid or not.
   * @property {boolean} signupForm.username.touched -indicates whether the the input element has been touched or not.
   * @property {string} signupForm.username.errorMessage -The error message to be displayed when the input is invalid.
   * @property {json} signupForm.username.validation -The validations required for the username.
   * @property {boolean} signupForm.username.validation.required -Indicates whether the field is necessary or not to signup.
   * @property {integer} signupForm.username.validation.maxLength -The maximum length for the input value.
   * @property {json} signupForm.email -User's email properties and configurations.
   * @property {string} signupForm.email.elementType -The type of the element.
   * @property {json} signupForm.email.elementConfig -The input element configurations.
   * @property {string} signupForm.email.elementConfig.type -The input element type.
   * @property {string} signupForm.email.elementConfig.placeholder -The input element's placeholder.
   * @property {string} signupForm.email.value -The value of the Username.
   * @property {boolean} signupForm.email.valid -indicates whether the input value is valid or not.
   * @property {boolean} signupForm.email.touched -indicates whether the the input element has been touched or not.
   * @property {string} signupForm.email.errorMessage -The error message to be displayed when the input is invalid.
   * @property {json} signupForm.email.validation -The validations required for the email.
   * @property {boolean} signupForm.email.validation.required -Indicates whether the field is necessary or not to signup.
   * @property {boolean} signupForm.email.validation.email -Check the user's input against emails' regex.
   * @property {json} signupForm.password -User's password properties and configurations.
   * @property {string} signupForm.password.elementType -The type of the input element.
   * @property {json} signupForm.password.elementConfig -The input element configurations.
   * @property {string} signupForm.password.elementConfig.type -The input element type.
   * @property {string} signupForm.password.elementConfig.placeholder -The input element's placeholder.
   * @property {string} signupForm.password.value -The value of the password.
   * @property {boolean} signupForm.password.valid -indicates whether the input value is valid or not.
   * @property {boolean} signupForm.password.touched -indicates whether the the input element has been touched or not.
   * @property {string} signupForm.password.errorMessage -The error message to be displayed when the input is invalid.
   * @property {json} signupForm.password.validation -The validations required for the password.
   * @property {boolean} signupForm.password.validation.required -Indicates whether the field is necessary or not to signup.
   * @property {integer} signupForm.password.validation.maxLength -The maximum length for password.
   * @property {integer} signupForm.password.validation.minLength -The minimum length for password.
   * @property {json} signupForm.reenter -User's reentered password properties and configurations.
   * @property {string} signupForm.reenter.elementType -The type of the input element.
   * @property {json} signupForm.reenter.elementConfig -The input element configurations.
   * @property {string} signupForm.reenter.elementConfig.type -The input element type.
   * @property {string} signupForm.reenter.elementConfig.placeholder -The input element's placeholder.
   * @property {string} signupForm.reenter.value -The value of the reenter.
   * @property {boolean} signupForm.reenter.valid -indicates whether the input value is valid or not.
   * @property {boolean} signupForm.reenter.touched -indicates whether the the input element has been touched or not.
   * @property {string} signupForm.reenter.errorMessage -The error message to be displayed when the input is invalid.
   * @property {json} signupForm.reenter.validation -The validations required for the reentered password.
   * @property {boolean} signupForm.reenter.validation.required -Indicates whether the field is necessary or not to signup.
   * @property {integer} signupForm.reenter.validation.matching -Check whether the reentered password matched the password
   * @property {boolean} formIsValid -indicates whether the data in the signup form is valid ot not.
   * @property {boolean} loading -Is set to true while posting users to the database.
   * @property {json} error -The error respone caught from the backend.
   * @property {string} token -The session's token.
   * @property {boolean} erroremail -Is set true when the submitted email is invalid.
   * @property {boolean} errorscreenname -Is set to true when the screenname already exists in the database */

  state = {
    signupForm: {
      screenname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Screen Name"
        },
        value: "",
        validation: {
          required: true,
          nospace: true,
          maxLength: 15,
          startLetter: true
        },
        valid: false,
        touched: false,
        autoFocus: true,
        errorMessage:
          "The screen name should start with a letter and with no spaces"
      },
      username: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your UserName"
        },
        value: "",
        validation: {
          required: true,
          maxLength: 15
        },
        errorMessage: "Maximum length is 15",
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail"
        },
        value: "",
        validation: {
          required: true,
          email: true
        },
        errorMessage: "Please enter a valid email",
        valid: false,
        touched: false
      },
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
    formIsValid: false,
    loading: false,
    error: {},
    token: "",
    erroremail: false,
    errorscreenname: false
  };
  /**
   * Handles changes in the input elements by running its validity checks and updating its value in the state.
   * @param {event} event - The change event.
   * @param {integer} inputIdentifier - The input element's identifier.
   */
  inputChangedHandler(event, inputIdentifier) {
    const updatedSignupForm = {
      ...this.state.signupForm
    };
    const updatedFormElement = {
      ...updatedSignupForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedSignupForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedSignupForm) {
      formIsValid = updatedSignupForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ signupForm: updatedSignupForm, formIsValid: formIsValid });
  }
  /**
   * Check if a value matches a given set of validation rules.
   * @param {string} value - The value to be checked.
   * @param {json} rules - The set of vaidation rules to check against.
   */
  checkValidity(value, rules) {
    let isValid = true;

    if (rules.startLetter) {
      isValid = !!value.match(/^[a-zA-Z][a-zA-Z_0-9]*$/) && isValid;
    }
    if (rules.email) {
      isValid =
        !!value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) && isValid;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.nospace) {
      isValid = !(value.indexOf(" ") >= 0) && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.matching) {
      isValid = value === this.state.signupForm.password.value && isValid;
    }

    return isValid;
  }
  /**
   * Handles the signup form submission and sends a signup request to the server.
   * @param {event} event - The submit form event.
   
   */
  submitHandler(event) {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.signupForm) {
      formData[formElementIdentifier] = this.state.signupForm[
        formElementIdentifier
      ].value;
    }

    const data = {
      /*
        username:this.state.signupForm.username.value,
        screenname:this.state.signupForm.screenname.value,
        email:this.state.signupForm.email.value,
        password:this.state.signupForm.password.value
      */
      userData: formData
    };

    axios
      .post("/users.json", data)
      .then(res => {
        /*
        if (response.status === 404) {
          this.setState({ error: true });
          */
        const clone = {
          ...this.state.signupForm
        };
        clone.token = res.data.idtoken;
        this.setState({ token: clone.token });
        this.setState({ loading: false });
        // this.props.history.push( '/' );
      })
      .catch(err => {
        const clone = {
          ...this.state.signupForm
        };
        this.setState({ loading: false });
        clone.error = err.response.data;
        this.setState({ error: clone.error });
        if (
          this.state.error.error.message === "INVALID_EMAIL" ||
          this.state.error.error.message === "EMAIL_NOT_FOUND"
        ) {
          this.setState({ erroremail: true });
        } else if (
          this.state.errors.error.message === "INVALID_USERNAME" ||
          this.state.errors.error.message === "EXISTING_PASSWORD"
        ) {
          this.setState({ errorscreenname: true });
        }
      });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.signupForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signupForm[key]
      });
    }
    let form = (
      <form onSubmit={this.submitHandler} className="signupBox">
        <h3 className="signupHeader">Sign up to Nova</h3>
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
            invalidEmail={this.state.signupForm.erroremail}
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
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="Body">
        <AuthNav />
        <div className="jumbotron jumbotron-fluid signupPageCanvas">
          <div className="container">{form}</div>
          <div className="downDivSignup">
            <p className="text-sm-left downText">
              Already have an account?{" "}
              <a className="Links" href="/login">
                Login now..
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default signup;
