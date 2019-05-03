import React from "react";

import "./Spinner.css";

const Spinner = () => (
  <div class="atom-spinner">
    <div class="spinner-inner">
      <div class="spinner-line" />
      <div class="spinner-line" />
      <div class="spinner-line" />

      <div class="spinner-circle">&#9679;</div>
    </div>
  </div>
);

export default Spinner;
