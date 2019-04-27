import React from "react";
import Strip from "./UserStrip";
import Aux from "../Wrapper/Auxilary";

import "./Box.css";

const fansBox = props => (
  <Aux>
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModalCenter"
    >
      Launch demo modal
    </button>
    <div
      className="modal"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content followersBox">
          <div className="modal-header followersBox">
            <h5 className="modal-title " id="exampleModalCenterTitle">
              Followers
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body followersBox">
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
