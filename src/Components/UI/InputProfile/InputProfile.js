import React from "react";
import "./InputProfile.css";

const inputProfile = props => {
  let inputElementt = null;
  let inputClasses = "form-control InputElement";
  let validationError = null;
  if (props.invalid && props.touched) {
    inputClasses = "InputElement Invalid";
    validationError = <p className="ValidationError"> {props.errorMessage}</p>;
  } else if (props.invalidScreenname) {
    inputClasses = "InputElement Invalid";
    validationError = (
      <p className="ValidationError">
        {" "}
        "invalid Screenname. Screenname already exist"
      </p>
    );
  } else if (props.errorScreenname) {
  } else if (props.invalidLenScreenname) {
    inputClasses = "InputElement Invalid";
    validationError = (
      <p className="ValidationError">
        {" "}
        "Screenname must be not less than 3 characters and not more than 15
        characters"
      </p>
    );
  } else validationError = null;
  inputElementt = (
    <input
      className={inputClasses}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
      autoFocus={props.autoFocus}
    />
  );

  //<label className={classes.Label}>{props.label}</label>
  return (
    <div className="form-group">
      {inputElementt}
      {validationError}
    </div>
  );
};
export default inputProfile;
