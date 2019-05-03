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
          <a
            className="userName"
            href={"http://localhost:3000/profile/" + props.screenName}
          >
            {props.userName}
          </a>
          <br />@{props.screenName}
        </div>
      </div>
    </div>
  </Aux>
);
export default userStrip;
