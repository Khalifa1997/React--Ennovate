import React, { Component } from "react";
//import Aux from "./../../../HOC/Aux";
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Input from "./../../../Components/UI/Input/Input";
import "./Signup.css";
class signup extends Component {
  state = {
    signupForm: {
      username: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your UserName"
        },
        value: "",
        validation: {
          required: true,
          nospace: true,
          maxLength: 15,
          startLetter: true
        },
        valid: false,
        touched: false
      },
      screenname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Screen Name"
        },
        value: "",
        validation: {
          required: true,
          maxLength: 15
        },
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
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    loading: false
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
    //updatedFormElement.touched = true;
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
        !!value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/) && isValid;
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

  render() {
    const formElementsArray = [];
    for (let key in this.state.signupForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signupForm[key]
      });
    }
    let form = (
      <form>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <button
          className="btn btn-primary signupButton"
          onClick={this.passwordHandler}
        >
          Signup
        </button>
      </form>
    );
    return (
      <div>
        <AuthNav />
        <div className="jumbotron jumbotron-fluid PageCanvas">
          <div className="container">{form}</div>
        </div>
      </div>
    );
  }
}
export default signup;
