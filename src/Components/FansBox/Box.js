import React from "react";
import Strip from "./UserStrip";
import Aux from "../Wrapper/Auxilary";

import "./Box.css";

const fansBox = props => (
  <Aux>
    {/* <div class="container">
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight">Followers</div>
      </div>
    </div> */}

    {/* <div class="modal " tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
            <Strip/>
          </div>
        </div>
      </div>
    </div> */}

  


<div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
