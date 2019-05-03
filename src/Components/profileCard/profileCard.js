import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
const ProfileCard = props => {
  return (
    <div>
      <div
        className="card"
        style={{ width: "inherit", backgroundColor: "gainsboro" }}
      >
        <img
          src={props.auth.currentUser.profile_image_url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.auth.currentUser.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            @{props.auth.currentUser.screen_name}
          </h6>
          <p className="card-text">{props.auth.currentUser.bio}</p>
          <p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="1x"
              color="dimgray"
              style={{ marginRight: "9px" }}
            />
            {props.auth.currentUser.location}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              size="1x"
              color="dimgray"
              style={{ marginRight: "9px" }}
            />
            Joined 2, November, 2019
          </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProfileCard);
