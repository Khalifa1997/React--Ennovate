import React, { Component } from "react";
import Aux from "./../../../Components/Wrapper/Auxilary";
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Classnames from "classnames";
import Axios from "axios";
import Profile from "../../Profile/Profile";
import "./Login.css";

/**
 * This is a description of the Login Component.
 * @class
 * @classdesc This Class is a statefull component used to create the Login form
 * */
class login extends Component {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);

    /**
     * @States
     * @property {string}  email               - The email state.
     * @property {string}  email.value       - The default value of the email.
     * @property {object}  email.validation         - The email validations requirements.
     * @property {boolean}  email.validation.required      - It is required.
     * @property {boolean}  email.validation.email - It must be an email.
     * @property {boolean}  email.valid - Boolean to check if the email is valid
     * @property {object}  email.meta - Utility props.
     * @property {boolen}  email.meta.touched - Is the field touched
     * @property {string}  email.meta.errorMessage - Error message to notify the user.
     *
     * @property {string}  Password               - The Password state.
     * @property {string}  Password.value       - The default value of the Password.
     * @property {object}  Password.validation         - The Password validations requirements.
     * @property {boolean}  Password.validation.required      - It is required.
     * @property {number}  Password.validation.minLength - Password Must be greater than.
     * @property {number}  Password.validation.maxLength - Password Must be less than.
     * @property {boolean}  Password.valid - Boolean to check if the Password is valid
     * @property {object}  Password.meta - Utility props.
     * @property {boolean}  Password.meta.touched - Is the field touched
     * @property {string}  Password.meta.errorMessage - Error message to notify the user.
     *
     * @property {string}  Token - To save the token of the logedIn user.
     * @property {boolean}  sentRequest - utility state to show if a request was sent.
     * @property {string}  errors - an object to save all the errors from the database.
     */
    this.state = {
      email: {
        value: "",
        validation: {
          required: true,
          email: true
        },
        valid: false,
        meta: {
          touched: false,
          errorMessage: "Please enter a valid email"
        }
      },
      password: {
        value: "",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 25
        },
        valid: false,
        meta: {
          touched: false,
          errorMessage: "Password should be between 8 and 25 characters long"
        }
      },
      token: "",
      sentRequest: false,
      errors: {}
    };

    this.onChangeHandler.bind(this);
    this.Login.bind(this);
  }

  /**
   * This is a description of the checkvalidity function.
   * This function checks the validity of the data inside the input form.
   * @param {string} Value - The value of the input box.
   * @param {object} rules - An object of the required rules for this input.
   *
   * @returns {boolean} isValid
   * */
  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.email) {
      isValid =
        !!value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  /**
   * This is a description of the onChangeHandler function.
   * This function checks if the input form has changed and unpdate the states with the corresponding data.
   * @param {event} event - Changed event from the input box.
   * @param {string} stateIdentifier - The type of the input box.
   *
   * */
  onChangeHandler (event, stateIdentifier) {
    const cloneState = {
      ...this.state
    };

    const deepClone = {
      ...cloneState[stateIdentifier]
    };

    deepClone.value = event.target.value;
    deepClone.meta.touched = true;
    deepClone.valid = this.checkValidity(deepClone.value, deepClone.validation);

    this.setState({ [stateIdentifier]: deepClone });
    this.setState({ touched: true });
    this.setState({ sentRequest: false });
  };

  /**
   * This function submits the data inside the form.
   * It creates an object an submit the latter to the database using axios.
   * Also it handles any type of errors comming back from the database
   *
   * @param {event} event - Submit button is cliked event.
   *
   * */
  Login (event) {
    event.preventDefault();

    this.setState({ sentRequest: true });

    const user = {
      email: this.state.email.value,
      password: this.state.password.value
    };

    Axios.post(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBUoi3TDU9jfZRE7jVC0QoA08DK8mJC6wo",
      user
    )
      .then(res => {
        const clone = {
          ...this.state
        };
        clone.token = res.data.idToken;
        this.setState({ token: clone.token }, () => (
          <Profile username={res.data.email} />
        ));
      })
      .catch(err => {
        const clone = {
          ...this.state
        };
        clone.errors = err.response.data;
        this.setState({ errors: clone.errors }, () =>
          console.log(this.state.errors)
        );

        if (
          this.state.errors.error.message === "INVALID_EMAIL" ||
          this.state.errors.error.message === "EMAIL_NOT_FOUND"
        ) {
          clone.email.valid = false;
          clone.password.valid = true;
          this.setState({ email: clone.email });
          this.setState({ password: clone.password });
        } else if (
          this.state.errors.error.message === "INVALID_PASSWORD" ||
          this.state.errors.error.message === "MISSING_PASSWORD"
        ) {
          clone.password.valid = false;
          clone.email.valid = true;
          this.setState({ password: clone.password });
          this.setState({ email: clone.email });
        }
      });
  };

  /**
   * This function renders the jsx component on the screen using react DOM.
   *
   * @returns {JSX} The JSX code used to render the component.
   * */
  render() {
    var submitButtonDisabled = true;
    console.log(this.state.email.valid + " " + this.state.password.valid);
    if (this.state.email.valid === true && this.state.password.valid === true) {
      submitButtonDisabled = false;
    }

    return (
      <Aux>
        <div className="Body">
          <AuthNav />
          <div className="jumbotron jumbotron-fluid PageCanvas">
            <div className="container">
              <form className="loginBox" onSubmit={this.Login}>
                <h3 className="headerText">Log in to eNOVAte</h3>
                <div className="form-group">
                  <input
                    className={Classnames("form-control inputFields", {
                      "is-invalid":
                        this.state.email.valid === false &&
                        this.state.email.meta.touched === true
                    })}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    autoFocus
                    onChange={event => this.onChangeHandler(event, "email")}
                  />
                  {this.state.email.valid === false &&
                    this.state.sentRequest === true && (
                      <div className="invalid-feedback">
                        {" "}
                        {this.state.errors.error.message}{" "}
                      </div>
                    )}
                  {this.state.email.valid === false &&
                    submitButtonDisabled === true &&
                    this.state.sentRequest === false && (
                      <div className="invalid-feedback">
                        {" "}
                        {this.state.email.meta.errorMessage}{" "}
                      </div>
                    )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    style={{ marginBottom: "25px" }}
                    className={Classnames("form-control inputFields", {
                      "is-invalid":
                        this.state.password.valid === false &&
                        this.state.password.meta.touched === true
                    })}
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={event => this.onChangeHandler(event, "password")}
                  />
                  {this.state.password.valid === false &&
                    this.state.sentRequest === true && (
                      <div
                        style={{ marginTop: "-22px" }}
                        className="invalid-feedback"
                      >
                        {" "}
                        {this.state.errors.error.message}{" "}
                      </div>
                    )}
                  {this.state.password.valid === false &&
                    submitButtonDisabled === true &&
                    this.state.sentRequest === false && (
                      <div className="invalid-feedback PassErrorSpace">
                        {" "}
                        {this.state.password.meta.errorMessage}{" "}
                      </div>
                    )}
                </div>
                <button
                  type="submit"
                  disabled={submitButtonDisabled}
                  className="btn btn-primary loginButton"
                >
                  Log in
                </button>
                <a className="Links" href="/forgotpassword">
                  Forgot password?
                </a>
              </form>
            </div>
            <div className="downDiv">
              <p className="text-sm-left downText">
                New to Nova?{" "}
                <a className="Links" href="/signup">
                  Sign up now..
                </a>
              </p>
              <p className="text-sm-left downText">
                Need to know more{" "}
                <a className="Links" href="/">
                  About us
                </a>
              </p>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default login;
