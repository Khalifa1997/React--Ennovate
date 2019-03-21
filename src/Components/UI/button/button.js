import React from "react";

import classes from "./button.css";

const button = props => (
  <button
    disabled={props.disabled}
    className="btn btn-primary signupButton"
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;