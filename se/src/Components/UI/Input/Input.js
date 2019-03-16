import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;
  let inputClasses = "InputElement";
  let validationError = null;
  if (props.invalid && props.touched) {
    inputClasses = "InputElement Invalid";
    validationError = <p className="ValidationError"> {props.errorMessage}</p>;
  } else validationError = null;
  inputElement = (
    <input
      className={inputClasses}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
    />
  );

  //<label className={classes.Label}>{props.label}</label>
  return (
    <div className="Input">
      {inputElement}
      {validationError}
    </div>
  );
};
export default input;
