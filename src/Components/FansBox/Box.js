import React from "react";
import Strip from "./UserStrip";
import Aux from "../Wrapper/Auxilary";

import "./Box.css";

const fansBox = props => (
  <Aux>
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModalCenter"
    >
      Launch demo modal
    </button>
    <div
      class="modal"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content followersBox">
          <div class="modal-header followersBox">
            <h5 class="modal-title " id="exampleModalCenterTitle">
              Followers
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body followersBox">
            <Strip />
            <Strip />
            <Strip />
            <Strip />
            <Strip />
            <Strip />
            <Strip />
            <Strip />
            <Strip />
            <Strip />
            <Strip />
          </div>
        </div>
      </div>
    </div>
  </Aux>
);

export default fansBox;
