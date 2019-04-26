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
        class="card"
        style={{ width: "inherit", backgroundColor: "gainsboro" }}
      >
        <img
          src={props.auth.currentUser.profile_image_url}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{props.auth.currentUser.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            @{props.auth.currentUser.screen_name}
          </h6>
          <p class="card-text">{props.auth.currentUser.bio}</p>
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
