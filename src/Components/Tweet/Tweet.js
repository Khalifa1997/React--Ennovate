import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRetweet,
  faCommentDots,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartnotLiked } from "@fortawesome/free-regular-svg-icons";
import { connect } from "react-redux";
import { inherits } from "util";

import MyVerticallyCenteredModal from "../UI/Modal/Modal";

const Tweet = props => {
  return (
    <div className="container-fluid mt-4">
      <div
        className="card"
        style={{
          textAlign: "left",
          width: inherits,
          maxHeight: "72rem",
          minHeight: "5rem",
          alignContent: "center"
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.screenName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.isaReNova ? (
              <h5>ReNova by @{props.userName}</h5>
            ) : (
              <h5>@{props.userName}</h5>
            )}
          </h6>
          <p className="card-text" onClick={props.textClicked}>
            {props.text}
          </p>
          {props.isliked === true ? (
            <a href="javascript:;" className="card-link">
              <FontAwesomeIcon
                onClick={props.likeClicked}
                icon={faHeart}
                size="lg"
              />
            </a>
          ) : (
            <a href="javascript:;" className="card-link">
              <FontAwesomeIcon
                onClick={props.likeClicked}
                icon={faHeartnotLiked}
                size="lg"
              />
            </a>
          )}

          <a href="javascript:;" className="card-link">
            <FontAwesomeIcon
              icon={faRetweet}
              size="lg"
              onClick={props.reNovaClicked}
            />
          </a>
          <a href="javascript:;" className="card-link">
            <FontAwesomeIcon icon={faCommentDots} size="lg" />
          </a>
          {props.isAuth === true ? (
            <a
              href="javascript:;"
              className="card-link"
              style={{ float: "right" }}
              onClick={props.deleteClicked}
            >
              <FontAwesomeIcon icon={faTrashAlt} color="red" size="lg" />
            </a>
          ) : null}
        </div>
      </div>
      {/* <MyVerticallyCenteredModal show={props.repliesShow} onHide={modalClose} /> */}
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Tweet);
