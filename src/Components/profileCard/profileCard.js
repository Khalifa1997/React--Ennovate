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
        style={{ width: "18rem", backgroundColor: "gainsboro" }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Bongo</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            @{props.auth.user.user_id}
          </h6>
          <p className="card-text">
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
