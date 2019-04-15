import React from "react";
import Aux from "../Wrapper/Auxilary";
import "./UserStrip.css";
import Pic from "../../assets/images/Nova.png";

const userStrip = props => (
  <Aux>
    <div className="FansBox">
      <div className="d-flex bd-highlight container UserStrip">
        <div className="p-2 bd-highlight">
          <img
            className="avatar"
            src="https://bloximages.chicago2.vip.townnews.com/tribdem.com/content/tncms/assets/v3/editorial/3/83/38384be2-3ba5-11e8-adec-bf48bc62810f/5acadc92f3c7d.image.jpg?resize=400%2C357"
            alt="..."
          />
        </div>
        <div className="p-2 middle bd-highlight">
          <p className="userName">Maram</p>
          <br />
          @maram
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
