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
        style={{ width: "18rem", backgroundColor: "gainsboro" }}
      >
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Bongo</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            @{props.auth.user.user_id}
          </h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="1x"
              color="dimgray"
              style={{ marginRight: "9px" }}
            />
            Cairo,Egypt
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
