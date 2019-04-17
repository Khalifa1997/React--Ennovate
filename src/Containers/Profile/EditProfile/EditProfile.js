import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import InputProfile from "../../../Components/UI/InputProfile/InputProfile";
import { editUser } from "../../../Actions/editProfileActions";
import { getProfile } from "../../../Actions/editProfileActions";
import { editImage } from "../../../Actions/editProfileActions";
import Button from "../../../Components/UI/button//button";
import { withRouter } from "react-router-dom";

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
        username: {
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
      imagePreview: "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
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
  componentDidMount() {
    console.log("received auth" + JSON.stringify(this.props.auth));
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
      <form onSubmit={this.submitHandler} className="editBox">
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
            <option value="United States">United States</option>
            <option value="England">England</option>
            <option value="Italy">Italy</option>
            <option value="Lebanon">Lebanon</option>
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
    { editUser, editImage, getProfile }
  )(editProfile)
);
