import React from "react";
import Aux from "../Wrapper/Auxilary";
import "./UserStrip.css";
import Pic from "../../assets/images/Nova.png";

const userStrip = props => (
  <Aux>
    <div className="card UserStrip">
      <span className="imgAndData">
        <img
          className="avatar"
          src="https://bloximages.chicago2.vip.townnews.com/tribdem.com/content/tncms/assets/v3/editorial/3/83/38384be2-3ba5-11e8-adec-bf48bc62810f/5acadc92f3c7d.image.jpg?resize=400%2C357"
          alt="..."
        />
      </span>

      <span className="data">
        <h6 className="userName">hello</h6>
        hello
      </span>

      <span>
        <button type="button" className="btn btn-primary stripButton">
          Hello
        </button>
      </span>
    </div>
  </Aux>
);
export default userStrip;
