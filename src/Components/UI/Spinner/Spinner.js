import React from "react";

import "./Spinner.css";

const Spinner = () => (
  <div className="atom-spinner">
    <div className="spinner-inner">
      <div className="spinner-line" />
      <div className="spinner-line" />
      <div className="spinner-line" />

      <div className="spinner-circle">&#9679;</div>
    </div>
  </div>
);

export default Spinner;
