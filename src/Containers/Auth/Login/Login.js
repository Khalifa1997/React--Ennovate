import React, { Component } from "react";
import Aux from "./../../../Components/Wrapper/Auxilary";
import AuthNav from "./../../../Components/AuthNav/AuthNav";
import Classnames from "classnames";
import Axios from "axios";

import "./Login.css";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: "",
        validation: {
          required: true,
          email: true
        },
        valid: true
      },
      password: {
        value: "",
        validation: {
          required: true
        },
        valid: true
      },
      token: "",
      errors: {}
    };
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
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
    //deepClone.valid = this.checkValidity(deepClone.value, deepClone.validation);

    this.setState({ [stateIdentifier]: deepClone });
    this.setState({ touched: true });
  };

  Login = event => {
    event.preventDefault();
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
        this.setState({ token: clone.token }, () => console.log(res.data));
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

  render() {
    return (
      <Aux>
        <div className="Body">
          <AuthNav />
          <div className="jumbotron jumbotron-fluid PageCanvas">
            <div className="container">
              <form className="loginBox" onSubmit={this.Login}>
                <h3 className="headerText">Log in to Nova</h3>
                <div className="form-group">
                  <input
                    className={Classnames("form-control inputFields", {
                      "is-invalid": this.state.email.valid === false
                    })}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    autoFocus
                    onChange={event => this.onChangeHandler(event, "email")}
                  />
                  {this.state.email.valid === false && (
                    <div className="invalid-feedback">
                      {" "}
                      {this.state.errors.error.message}{" "}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    style={{ marginBottom: "25px" }}
                    className={Classnames("form-control inputFields", {
                      "is-invalid": this.state.password.valid === false
                    })}
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={event => this.onChangeHandler(event, "password")}
                  />
                  {this.state.password.valid === false && (
                    <div style={{ marginTop: "-22px" }} className="invalid-feedback">
                      {" "}
                      {this.state.errors.error.message}{" "}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary loginButton">
                  Log in</button>
                <a className="Links" href="#">
                  Forgot password?
                </a>
              </form>
            </div>
            <div className="downDiv">
              <p className="text-sm-left downText">
                New to Nova?{" "}
                <a className="Links" href="#">
                  Sign up now..
                </a>
              </p>
              <p className="text-sm-left downText">
                Need to know more{" "}
                <a className="Links" href="#">
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
