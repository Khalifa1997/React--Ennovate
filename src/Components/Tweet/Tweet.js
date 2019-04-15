import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRetweet,
  faCommentDots,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { inherits } from "util";
const onClickHandler = () => {
  //Add delete request
  console.log("Deleted");
};
const Tweet = props => {
  return (
    <div class="container-fluid mt-4">
      <div
        class="card"
        style={{
          textAlign: "left",
          width: inherits,
          maxHeight: "72rem",
          minHeight: "5rem",
          alignContent: "center"
        }}
      >
        <div class="card-body">
          <h5 class="card-title">{props.screenName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">@{props.userName}</h6>
          <p class="card-text">{props.text}</p>
          <a href="#" class="card-link">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </a>
          <a href="#" class="card-link">
            <FontAwesomeIcon icon={faRetweet} size="lg" />
          </a>
          <a href="#" class="card-link">
            <FontAwesomeIcon icon={faCommentDots} size="lg" />
          </a>
          {props.isAuth === true ? (
            <a
              href="#"
              class="card-link"
              style={{ float: "right" }}
              onClick={onClickHandler}
            >
              <FontAwesomeIcon icon={faTrashAlt} color="red" size="lg" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Tweet);
