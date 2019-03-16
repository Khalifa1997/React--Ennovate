import React from "react";
import classes from "./Input.css";
const input = props => {
  let inputElement = null;
  inputElement = (
    <input
      //className={inputClasses.join(" ")}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
    />
  );
  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = <p> {props.errorMessage}</p>;
  } else validationError = null;

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};
export default input;
