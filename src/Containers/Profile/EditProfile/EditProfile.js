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
import Nav from "../../../Components/NavBar/NavBar";

import "./EditProfile.css";

class editProfile extends Component {
  constructor(props) {
    super(props);
    console.log("noo", this.props.profile.user);
    this.state = {
      editProfileForm: {
        screen_name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: this.props.auth.profile.screen_name
          },
          value: this.props.auth.profile.screen_name,
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
          value: this.props.auth.profile.name,
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
          value: this.props.auth.profile.bio,
          validation: {
            maxLength: 100
          },
          errorMessage: "Maximum length is 100",
          valid: false,
          touched: false
        }
      },
      loc: this.props.auth.profile.location,
      formIsValid: false,
      loading: false,
      error: {},
      file: "",
      imagePreview: "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",
      currentProfile: {},
      errorScreenname: false,
      msg: ""
      //token: "",
    };
  }

  inputChangeHandler = (event, inputIdentifier) => {
    //console.log("data el event", event.target.value);
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

  _handleChange = event => {
    this.setState({ loc: event.target.value });
    //this.setState({ location: event.target.value });
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
      screen_name: this.state.editProfileForm.screen_name.value,
      name: this.state.editProfileForm.name.value,
      location: this.state.loc,
      bio: this.state.editProfileForm.bio.value
    };
    const profile_image_url = {
      profile_image_url: this.state.imagePreview
    };
    this.props.editImage(profile_image_url);
    this.props.editUser(user).then(() => {
      this.props.history.push("/profile/" + user.screen_name);
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
      this.setState({ msg: nextProps.error }, () => {
        this.setState({ loading: false });
        if (this.state.msg === "screen name is already used") {
          console.log("hello");
          this.setState({ invalidScreenname: true });
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
    console.log("profile", this.props.auth.profile.screen_name);
    console.log("profile", this.props.auth.currentUser.screen_name);
    const formElementArray = [];
    for (let key in this.state.editProfileForm) {
      formElementArray.push({
        id: key,
        config: this.state.editProfileForm[key]
      });
    }
    //console.log(this.props.auth.currentUser);
    let form = (
      <form onSubmit={this.submitHandler} className="editBox">
        <div className="center">
          <img src={this.state.imagePreview} className="img-rounded " />
        </div>
        <div className="form-group limitwidth center">
          <div className="custom-file ">
            <input
              type="file"
              className="custom-file-input InputElement"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              onChange={e => this.onChange(e)}
            />
            <label className="custom-file-label" for="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>

        {formElementArray.map(formElement => (
          <InputProfile
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            defaultValue={this.props.auth.currentUser[formElement.id]} //formElement.config.value}
            // value={formElement.config.value}
            placeholder={this.props.auth.currentUser[formElement.id]}
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
            <option>United States</option>
            <option>England</option>
            <option>Italy</option>
            <option>Lebanon</option>
          </select>
          <h4> </h4>
          <h4> </h4>
        </div>

        <div className="form-group">
          <Button>Save</Button>
        </div>
      </form>
    );

    return (
      <div className="Body scroll">
        <Nav />
        <div className="jumbotron jumbotron-fluid editprofilePageCanvas align-items-center ">
          <div className="container toppadding">
            <h2 className="editHeader">Update your info</h2>

            <div className="container ">{form}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  edit: state.edit,
  error: state.errors,
  profile: state.profile
});

export default withRouter(
  connect(
    mapStateToProps,
    { editUser, editImage, getProfile }
  )(editProfile)
);
