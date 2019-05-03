import React from "react";
import Aux from "../../Wrapper/Auxilary";
import "./UserStrip.css";

const userStrip = props => (
  <Aux>
    <div className="FansBox">
      <div className="d-flex bd-highlight container UserStrip">
        <div className="p-2 bd-highlight">
          <img className="avatar" src={props.imgUrl} alt="..." />
        </div>
        <div className="p-2 middle bd-highlight">
          <p className="userName">{props.userName}</p>
          <br />@{props.screenName}
        </div>
        <div className="p-2 bd-highlight">
          <button type="button" className="btn btn-primary stripButton">
            Hello
          </button>
        </div>
      </div>
    </div>
  </Aux>
);
export default userStrip;
