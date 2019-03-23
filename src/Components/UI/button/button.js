import React from "react";

import "./button.css";
/**
 * A stateless component that creates a button with some passed down properties.
 * @param {json} props - Passed down properties.
 * @returns { JSX } -returns a button element.
 */
function button(props) {
  return (
    <button
      disabled={props.disabled}
      className="btn btn-primary signupButton"
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
}

export default button;
