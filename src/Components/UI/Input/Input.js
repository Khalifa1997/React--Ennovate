import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;
  let inputClasses = "form-control InputElement";
  let validationError = null;
  if (props.invalid && props.touched) {
    inputClasses = "InputElement Invalid";
    validationError = <p className="ValidationError"> {props.errorMessage}</p>;
  } else if (props.elementConfig.type === "email" && props.invalidEmail) {
    inputClasses = "InputElement Invalid";
    validationError = (
      <p className="ValidationError"> "invalid Email or Email already exists"</p>
    );
  }
  else if (props.invalidScreenname) {
    inputClasses = "InputElement Invalid";
    validationError = (
      <p className="ValidationError"> "invalid Screenname. Screenname already exist"</p>
    );
  }
  else if (props.invalidLenScreenname) {
    inputClasses = "InputElement Invalid";
    validationError = (
      <p className="ValidationError"> "Screenname must be not less than 3 characters and not more than 15 characters"</p>
    );
  }
  else validationError = null;
  inputElement = (
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
      {inputElement}
      {validationError}
    </div>
  );
};
export default input;
