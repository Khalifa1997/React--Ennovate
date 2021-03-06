import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { registerUser } from "../../../Actions/authActions";

import AuthNav from "../../../Components/AuthNav/AuthNav";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Button from "../../../Components/UI/button//button";
import Input from "../../../Components/UI/Input/Input";

import "./Signup.css";
import { nfapply } from "q";
/**
 * This is a description of the signup Component.
 * @class
 * */
class signup extends Component {
  /**
   * @States
   * @property {json}  signupForm               - The Signup Form object that contains all the form's components properties.
   * @property {json} signupForm.screenname -User's screen name properties and configurations
   * @property {string} signupForm.screenname.elementType -The type of the input element
   * @property {string} signupForm.screenname.value -The value of the Screen Name
   * @property {boolean} signupForm.screenname.valid -indicates whether the input value is valid or not
   * @property {boolean} signupForm.screenname.touched -indicates whether the the input element has been touched or not
   * @property {boolean} signupForm.screenname.autoFocus - Is set to true when the element should be autofocused
   * @property {string} signupForm.screenname.errorMessage -The error message to be displayed when the input is invalid
   * @property {json} signupForm.screenname.validation -The validations required for the screen name
   * @property {boolean} signupForm.screenname.validation.required -Indicates whether the field is necessary or not to signup
   * @property {boolean} signupForm.screenname.validation.nospace -Is set to true when spaces are not allowed in the input value
   * @property {boolean} signupForm.screenname.validation.startLetter -Is set to true when the input value should start with a letter only
   * @property {integer} signupForm.screenname.validation.maxLength -The maximum length for the input value*/
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
          "The screen name should start with a letter and with no spaces",
        invalidScreenname: false
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
    errorEmail: false,
    errorScreenname: false,
    errorLenScreenname: false,
    errorMessage: null
  };

  inputChangedHandler = (event, inputIdentifier) => {
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
  };

  sum(a, b) {
    return a + b;
  }
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

  submitHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.signupForm) {
      formData[formElementIdentifier] = this.state.signupForm[
        formElementIdentifier
      ].value;
    }
    /*
    console.log(formData);
    const data = {
      userData: formData
    };
    */
    const user = {
      screen_name: this.state.signupForm.screenname.value,
      name: this.state.signupForm.username.value,
      email: this.state.signupForm.email.value,
      password: this.state.signupForm.password.value
    };

    this.props.registerUser(user);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push(
        "/profile/" + nextProps.auth.currentUser.screen_name
      );
    }

    if (nextProps.error) {
      //last
      this.setState({ error: nextProps.error }, () => {
        this.setState({ loading: false });
        if (this.state.error === "screen name already registered.") {
          this.setState({ errorScreenname: false });
        } else if (this.state.error === "email already registered.") {
          this.setState({ errorEmail: false });
        } else if (this.state.error === ' "email" must be a valid email') {
          this.setState({ errorEmail: false });
        } else if (
          this.state.error ===
          ' "screen_name" length must be at least 3 characters long'
        ) {
          this.setState({ errorLenScreenname: false });
        } else if (
          this.state.error ===
          ' "screen_name" length must be less than or equal to 15 characters long'
        ) {
          this.setState({ errorLenScreenname: false });
        }
      });
      this.setState({ errorMessage: nextProps.error });
      if (nextProps.loader) {
        this.setState({ loading: nextProps.loader });
      }
      //last

      //   /*
      //   const clone = {
      //     ...this.state.signupForm
      //   };

      //  // clone.error = err.response.data;
      //   //this.setState({ error: clone.error });
      //   if (
      //     this.state.error.error.message === "INVALID_EMAIL" ||
      //     this.state.error.error.message === "EMAIL_NOT_FOUND"
      //   ) {
      //     this.setState({ erroremail: true });
      //   } else if (
      //     this.state.errors.error.message === "INVALID_SCREENNAME" ||
      //     this.state.errors.error.message === "EXISTING_SCREENNAME"
      //   ) {
      //     this.setState({ errorscreenname: true });
      //   }
      //   */
      //   console.log(err.response.data.msg);
      //   this.setState({ loading: false });
      //   if (err.response.data.msg === "screen name already registered.") {
      //     console.log("hello");
      //     this.setState({ errorScreenname: true });
      //   } else if (err.response.data.msg === "email already registered.") {
      //     this.setState({ errorEmail: true });
      //   } else if (err.response.data.msg === ' "email" must be a valid email') {
      //     this.setState({ errorEmail: true });
      //   } else if (
      //     err.response.data.msg ===
      //     ' "screen_name" length must be at least 3 characters long'
      //   ) {
      //     this.setState({ errorLenScreenname: true });
      //   } else if (
      //     err.response.data.msg ===
      //     ' "screen_name" length must be less than or equal to 15 characters long'
      //   ) {
      //     this.setState({ errorLenScreenname: true });
      //   }
    }
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
        <h3 className="signupHeader">Sign up to eNOVAte</h3>
        {this.state.errorMessage}
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
            invalidEmail={this.state.signupForm.errorEmail}
            invalidScreenname={this.state.errorScreenname}
            invalidLenScreenname={this.state.signupForm.errorLenScreenname}
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

signup.prototypes = {
  registerUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  error: propTypes.object.isRequired,
  loader: propTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.errors,
    loader: state.loader
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(signup);
