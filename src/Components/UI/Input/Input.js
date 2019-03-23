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
      <p className="ValidationError"> "invalid Email. Email doesn't exist"</p>
    );
  }
  else if ( props.invalidScreenname) {
    inputClasses = "InputElement Invalid";
    validationError = (
      <p className="ValidationError"> "invalid Screenname. Screenname already exist"</p>
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
