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

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
