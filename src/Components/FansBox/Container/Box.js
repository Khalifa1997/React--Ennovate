import React from "react";
import Aux from "../../Wrapper/Auxilary";

import FanModal from "../modal/fansModal";
import "./Box.css";

const fansBox = props => (
  <Aux>
    <div
      className="modal"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <FanModal show={props.show} boxName={props.boxName} list={props.list} />
    </div>
  </Aux>
);

export default fansBox;
