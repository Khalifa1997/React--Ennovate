import React, { Component } from "react";
import AuthNav from "../../../Components/AuthNav/AuthNav";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Button from "../../../Components/UI/button//button";
import Input from "../../../Components/UI/Input/Input";

import "./Signup.css";
import axios from "../../../axios-users";

class signup extends Component {
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
        errorMessage: "The screen name should start with a letter and with no spaces"
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
    token:"",
    erroremail:false,
    errorscreenname:false
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

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.startLetter) {
      isValid = !!value.match(/^[a-zA-Z][a-zA-Z_0-9]*$/) && isValid;
    }
    if (rules.email) {
      isValid =
        !!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && isValid;
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
      isValid = value == this.state.signupForm.password.value && isValid;
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
          }
          else if (
            this.state.errors.error.message === "INVALID_USERNAME" ||
            this.state.errors.error.message === "EXISTING_PASSWORD"
          )
          {
            this.setState({ errorscreenname: true }); 
          }
      });
  };

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
