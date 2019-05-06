import React, { Component } from "react";
import Aux from "./../../../Components/Wrapper/Auxilary";
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Classnames from "classnames";
import Axios from "../../../axios-users";
import Profile from "../../Profile/Profile";

import propTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../Actions/authActions";

import "./Login.css";

/**
 * This is a description of the Login Component.
 * @class
 * */
class login extends Component {
  /**
   * Constructor.
   * @constructor
   */
  constructor(props) {
    super(props);

    /**
     * @States
     * @property {email}  email               - The email state.
     * @property {value}  email.value       - The default value of the email.
     * @property {validation}  email.validation         - The email validations requirements.
     * @property {required}  email.validation.required      - It is required.
     * @property {email}  email.validation.email - It must be an email.
     * @property {valid}  email.valid - Boolean to check if the email is valid
     * @property {meta}  email.meta - Utility props.
     * @property {touched}  email.meta.touched - Is the field touched
     * @property {errorMessage}  email.meta.errorMessage - Error message to notify the user.
     *
     * @property {password}  Password               - The Password state.
     * @property {value}  Password.value       - The default value of the Password.
     * @property {validation}  Password.validation         - The Password validations requirements.
     * @property {required}  Password.validation.required      - It is required.
     * @property {MinLength}  Password.validation.minLength - Password Must be greater than.
     * @property {MaxLength}  Password.validation.maxLength - Password Must be less than.
     * @property {valid}  Password.valid - Boolean to check if the Password is valid
     * @property {meta}  Password.meta - Utility props.
     * @property {touched}  Password.meta.touched - Is the field touched
     * @property {errorMessage}  Password.meta.errorMessage - Error message to notify the user.
     *
     * @property {Token}  Token - To save the token of the logedIn user.
     * @property {sentRequest}  sentRequest - utility state to show if a request was sent.
     * @property {errors}  errors - an object to save all the errors from the database.
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
  }

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

  onChangeHandler = (event, stateIdentifier) => {
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

  Login = event => {
    event.preventDefault();

    this.setState({ sentRequest: true });

    const user = {
      email: this.state.email.value,
      password: this.state.password.value
    };

    this.props.loginUser(user);
    // Axios.post(
    //   "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBUoi3TDU9jfZRE7jVC0QoA08DK8mJC6wo",
    //   user
    // )
    // Axios.post("http://localhost:8080/accounts/signin", user)
    //   .then(res => {
    //     const clone = {
    //       ...this.state
    //     };
    //     clone.token = res.data;
    //     this.setState({ token: clone.token }, () =>
    //       console.log("user is signed in with token " + this.state.token)
    //     );
    //   })
    //   .catch(err => {
    //     const clone = {
    //       ...this.state
    //     };

    //     console.log(err.response.data.msg);
    //     clone.errors = err.response.data.msg;

    //     this.setState({ errors: clone.errors }, () =>
    //       console.log(this.state.errors)
    //     );

    //     if (this.state.errors === "UserNotFound") {
    //       clone.email.valid = false;
    //       clone.password.valid = true;
    //       this.setState({ email: clone.email });
    //       this.setState({ password: clone.password });
    //     } else if (this.state.errors === "IncorrectPassword") {
    //       clone.password.valid = false;
    //       clone.email.valid = true;
    //       this.setState({ password: clone.password });
    //       this.setState({ email: clone.email });
    //     }
    //   });
  };

  componentWillReceiveProps(nextProps) {
    console.log("jv", nextProps.auth);
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push(
        "/profile/" + nextProps.auth.currentUser.screen_name
      );
    }

    if (nextProps.error) {
      this.setState({ errors: nextProps.error }, () => {
        console.log("from login", this.state.errors);
        let clone = JSON.parse(JSON.stringify(this.state));

        if (this.state.errors === "UserNotFound") {
          clone.email.valid = false;
          clone.password.valid = true;

          this.setState({ email: clone.email });
          this.setState({ password: clone.password });
        } else if (this.state.errors === "IncorrectPassword") {
          clone.password.valid = false;
          clone.email.valid = true;

          this.setState({ password: clone.password });
          this.setState({ email: clone.email });
        }
      });
    }
  }

  render() {
    var submitButtonDisabled = true;
    //console.log(this.state.email.valid + " " + this.state.password.valid);
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
                      <div id="emailBack" className="invalid-feedback">
                        {" "}
                        {this.state.errors}{" "}
                      </div>
                    )}
                  {this.state.email.valid === false &&
                    submitButtonDisabled === true &&
                    this.state.sentRequest === false && (
                      <div id="emailFront" className="invalid-feedback">
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
                        id="passBack"
                        style={{ marginTop: "-22px" }}
                        className="invalid-feedback"
                      >
                        {" "}
                        {this.state.errors}{" "}
                      </div>
                    )}
                  {this.state.password.valid === false &&
                    submitButtonDisabled === true &&
                    this.state.sentRequest === false && (
                      <div
                        id="passFront"
                        className="invalid-feedback PassErrorSpace"
                      >
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
                <a
                  className="Links"
                  href="https://about.twitter.com/en_us.html"
                >
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

// login.propTypes = {
//   loginUser: propTypes.func.isRequired,
//   auth: propTypes.object.isRequired,
//   error: propTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(login);
