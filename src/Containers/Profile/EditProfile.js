import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import InputProfile from "../../../Components/UI/InputProfile/InputProfile";
import { editUser } from "../../../Actions/editProfileActions";
import { getProfile } from "../../../Actions/editProfileActions";
import { editImage } from "../../../Actions/editProfileActions";
import Button from "../../../Components/UI/button//button";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../Actions/authActions";

import "./EditProfile.css";
import Radium, { StyleRoot } from "radium";
/**
 * This is a description of the editProfile Component.
 * @class
 * */
class editProfile extends Component {
  /**
   * @property {json}  editProfileForm               - The Signup Form object that contains all the form's components properties.
   * @property {json} editProfileForm.screen_name  -User's screen name properties and configurations.
   * @property {string} editProfileForm.screen_name.elementType   -The type of the input element.
   * @property {json} editProfileForm.screen_name.elementConfig   -The input element configurations.
   * @property {string} editProfileForm.screen_name.elementConfig.type     -The input element type.
   * @property {string} editProfileForm.screen_name.elementConfig.placeholder  -The input element's placeholder.
   * @property {string} editProfileForm.screen_name.value  -The value of the Screen Name.
   * @property {boolean} editProfileForm.screen_name.valid  -indicates whether the input value is valid or not.
   * @property {boolean} editProfileForm.screen_name.touched  -indicates whether the the input element has been touched or not.
   * @property {boolean} editProfileForm.screen_name.autoFocus  - Is set to true when the element should be autofocused.
   * @property {string} editProfileForm.screen_name.errorMessage  -The error message to be displayed when the input is invalid.
   * @property {json} editProfileForm.screen_name.validation  -The validations required for the screen name.
   * @property {boolean} editProfileForm.screen_name.validation.required  -Indicates whether the field is necessary or not to signup.
   * @property {boolean} editProfileForm.screen_name.validation.nospace  -Is set to true when spaces are not allowed in the input value.
   * @property {boolean} editProfileForm.screen_name.validation.startLetter  -Is set to true when the input value should start with a letter only.
   * @property {integer} editProfileForm.screen_name.validation.maxLength  -The maximum length for the input value.
   * @property {json} editProfileForm.name  -User's name properties and configurations.
   * @property {string} editProfileForm.name.elementType  -The type of the element.
   * @property {json} editProfileForm.name.elementConfig  -The input element configurations.
   * @property {string} editProfileForm.name.elementConfig.type  -The input element type.
   * @property {string} editProfileForm.name.elementConfig.placeholder  -The input element's placeholder.
   * @property {string} editProfileForm.name.value  -The value of the Username.
   * @property {boolean} editProfileForm.name.valid  -indicates whether the input value is valid or not.
   * @property {boolean} editProfileForm.name.touched  -indicates whether the the input element has been touched or not.
   * @property {string} editProfileForm.name.errorMessage -The error message to be displayed when the input is invalid.
   * @property {json} editProfileForm.name.validation  -The validations required for the name.
   * @property {boolean} editProfileForm.name.validation.required  -Indicates whether the field is necessary or not to signup.
   * @property {integer} editProfileForm.name.validation.maxLength  -The maximum length for the input value.
   * @property {json} editProfileForm.bio  -User's bio properties and configurations.
   * @property {string} editProfileForm.bio.elementType  -The type of the element.
   * @property {json} editProfileForm.bio.elementConfig  -The input element configurations.
   * @property {string} editProfileForm.bio.elementConfig.type  -The input element type.
   * @property {string} editProfileForm.bio.elementConfig.placeholder -The input element's placeholder.
   * @property {string} editProfileForm.bio.value -The value of the Username.
   * @property {boolean} editProfileForm.bio.valid -indicates whether the input value is valid or not.
   * @property {boolean} editProfileForm.bio.touched -indicates whether the the input element has been touched or not.
   * @property {string} editProfileForm.bio.errorMessage -The error message to be displayed when the input is invalid.
   * @property {json} editProfileForm.bio.validation -The validations required for the bio.
   * @property {boolean} editProfileForm.bio.validation.required -Indicates whether the field is necessary or not to signup.
   * @property {integer} editProfileForm.bio.validation.maxLength -The maximum length for the input value.
   * @property {string} loc -location of user.
   * @property {bool} formIsValid -indicates whether the form is valid or not before submitting.
   * @property {bool} loading -indicates whether the spinner should be displayed or not.
   * @property {string} file -image file path.
   * @property {string} imapePreview  -default image url.
   * @property {JSON} currentProfile -data of current user.
   */

  state = {
    editProfileForm: {
      screen_name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your updated screen name"
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
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your updated name"
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
          placeholder: "Enter your bio "
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
    loc: "",
    formIsValid: false,
    loading: false,
    error: {},
    file: "",
    imagePreview: "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",
    currentProfile: {}
    //token: "",
  };
  /**
   * Handles changes in the input elements by running its validity checks and updating its value in the state.
   * @param {event} event - The change event.
   * @param {integer} inputIdentifier - The input element's identifier.
   */
  inputChangeHandler(event, inputIdentifier) {
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
  }

  _handleChange = event => {
    this.setState({ loc: event.target.value });
    //this.setState({ location: event.target.value });
  };
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

  submitHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.editProfileForm) {
      formData[formElementIdentifier] = this.state.editProfileForm[
        formElementIdentifier
      ].value;
    }

    const user = {
      screen_name: this.state.editProfileForm.screenname.value,
      name: this.state.editProfileForm.username.value,
      location: this.state.loc,
      bio: this.state.editProfileForm.bio.value
    };
    const img_url = {
      img_url: this.state.imagePreview
    };
    this.props.editImage(img_url);
    this.props.editUser(this.props, user).then(() => {
      this.props.history.push("/profile");
    });
  };

  onChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = e => {
      this.setState({
        file,
        imagePreview: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    console.log(reader.result);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ error: nextProps.error }, () => {
        this.setState({ loading: false });
        if (this.state.msg === "screen name already registered.") {
          console.log("hello");
          this.setState({ errorScreenname: true });
        } else if (
          this.state.msg ===
          ' "screen_name" length must be at least 3 characters long'
        ) {
          this.setState({ errorLenScreenname: true });
        } else if (
          this.state.msg ===
          ' "screen_name" length must be less than or equal to 15 characters long'
        ) {
          this.setState({ errorLenScreenname: true });
        }
      });
    }
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.editProfileForm) {
      formElementArray.push({
        id: key,
        config: this.state.editProfileForm[key]
      });
    }
    console.log(this.props.auth.currentUser);
    let form = (
      <form onSubmit={this.submitHandler} className="editBox">
        {formElementArray.map(formElement => (
          <InputProfile
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={this.props.auth.currentUser[formElement.id]} //formElement.config.value}
            invalid={!formElement.config.valid}
            errorMessage={formElement.config.errorMessage}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            autoFocus={formElement.config.autoFocus}
            changed={event => this.inputChangeHandler(event, formElement.id)}
          />
        ))}

        <div className="col-sm-20">
          <select onChange={this._handleChange} className="form-control">
            <option selected="">Select location</option>

            <option value="Afghanistan">Afghanistan</option>
            <option value="Algeria">Algeria</option>
            <option value="Angola">Angola</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>

            <option value="Bahrain">Bahrain</option>
            <option value="Belgium">Belgium</option>
            <option value="Brazil">Brazil</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Cameroon">Cameroon</option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cuba">Cuba</option>
            <option value="Denmark">Denmark</option>
            <option value="Canada">Canada</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="Ethiopia">Ethiopia</option>

            <option value=" Finland"> Finland</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="France">France</option>
            <option value="France">France</option>
            <option value="France">France</option>
            <option>United States</option>
            <option>England</option>
            <option>Italy</option>
            <option>Lebanon</option>
          </select>
        </div>
        <div className="form-group">
          <Button>Save</Button>
        </div>
      </form>
    );

    return (
      <div>
        <div>
          <div>
            <h1 className="text-center editHeader">Edit your profile</h1>

            <div className="row">
              <div className="col-sm-5" />
              <div className="col-sm-3">
                <img
                  src={this.state.imagePreview}
                  width="200"
                  height="200"
                  border="10"
                  className="img-rounded"
                />
                <h1> </h1>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">
                      Upload
                    </span>
                  </div>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                      onChange={e => this.onChange(e)}
                    />
                    <label class="custom-file-label" for="inputGroupFile01">
                      Choose file
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4> </h4>
            <h4> </h4>
            <h2 className="editHeader">update your info</h2>
            <div className="col-xs-20">
              <div className="container">{form}</div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-5" />
            <span> </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  edit: state.edit,
  error: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser } //{ editUser, editImage, getProfile }
  )(editProfile)
);
