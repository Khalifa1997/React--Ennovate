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

import Editor from "../UI/TweetDraft/draft";

import ReplyModal from "../UI/replyModal/replyModal";

class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false
    };
  }

  modalClose = () => this.setState({ modalShow: false });

  render() {
    // console.log("nova screenName ", this.props);
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
            {this.props.isRenovaed ? (
              <h6 className="card-subtitle mb-2 text-muted">
                @{this.props.renovaUser}: Renovad
              </h6>
            ) : null}
            <h5 className="card-title">{this.props.screenName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              @{this.props.userName}
            </h6>
            <p className="card-text" onClick={this.props.textClicked}>
              {this.props.text}
            </p>
            {/* <Editor placeholder={this.props.text} readOnly={false}/> */}
            {this.props.isliked === true ? (
              <a href="javascript:;" className="card-link">
                <FontAwesomeIcon
                  onClick={this.props.likeClicked}
                  icon={faHeart}
                  size="lg"
                />
              </a>
            ) : (
              <a href="javascript:;" className="card-link">
                <FontAwesomeIcon
                  onClick={this.props.likeClicked}
                  icon={faHeartnotLiked}
                  size="lg"
                />
              </a>
            )}

            <a href="javascript:;" className="card-link">
              <FontAwesomeIcon
                icon={faRetweet}
                size="lg"
                onClick={this.props.reNovaClicked}
              />
            </a>
            <a href="javascript:;" className="card-link">
              <FontAwesomeIcon
                icon={faCommentDots}
                size="lg"
                onClick={() => this.setState({ modalShow: true })}
              />
            </a>
            {this.props.isAuth === true ? (
              <a
                href="javascript:;"
                className="card-link"
                style={{ float: "right" }}
                onClick={this.props.deleteClicked}
              >
                <FontAwesomeIcon icon={faTrashAlt} color="red" size="lg" />
              </a>
            ) : null}
          </div>
        </div>
        <ReplyModal
          show={this.state.modalShow}
          onHide={this.modalClose}
          id={this.props.id}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Tweet);
