import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import InputProfile from "../../../Components/UI/InputProfile/InputProfile";

import "./EditProfile.css";

class editProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfileForm: {
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
            maxLength: 15
          },
          errorMessage: "Maximum length is 15",
          valid: false,
          touched: false
        },

        bio: {
          elementType: "input",
          elementConfig: {
            type: "input",
            placeholder: "Your bio"
          },
          value: "",
          validation: {
            maxLength: 100
          },
          errorMessage: "Maximum length is 100",
          valid: false,
          touched: false
        }
      },
      formIsValid: false,
      loading: false,
      error: {}
      //token: "",
    };
  }
  inputChangeHandler = (event, inputIdentifier) => {
    const updatedEditsProfileForm = {
      ...this.state.editProfileForm
    };
    const updatedFormElement = {
      ...updatedEditsProfileForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedEditsProfileForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedEditsProfileForm) {
      formIsValid =
        updatedEditsProfileForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      editProfileForm: updatedEditsProfileForm,
      formIsValid: formIsValid
    });
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.startLetter) {
      isValid = !!value.match(/^[a-zA-Z][a-zA-Z_0-9]*$/) && isValid;
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

    return isValid;
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.editProfileForm) {
      formElementArray.push({
        id: key,
        config: this.state.editProfileForm[key]
      });
    }
    let form = (
      <form>
        {formElementArray.map(formElement => (
          <InputProfile
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            errorMessage={formElement.config.errorMessage}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            autoFocus={formElement.config.autoFocus}
            changed={event => this.inputChangeHandler(event, formElement.id)}
          />
        ))}
      </form>
    );

    return (
      <div>
        <div>
          <h1 className="text-center">Edit profile</h1>

          <div class="row">
            <div class="col-sm-5" />
            <div class="col-sm-4">
              {" "}
              <img
                src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input
                type="file"
                className="text-center center-block file-upload"
              />{" "}
            </div>
          </div>
        </div>
        <div className="text-center">
          <h4> </h4>
          <h4> </h4>
          <h2 className="editHeader">Edit your info</h2>

          <div className="col-xs-20">
            <div className="container">
              {form}
              <div class="col-sm-20">
                <select class="form-control">
                  <option selected="">Select location</option>
                  <option value="cairo">Egypt</option>
                  <option>Canada</option>
                  <option>United States</option>
                  <option>England</option>
                  <option>Italy</option>
                  <option>Lebanon</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(editProfile);
