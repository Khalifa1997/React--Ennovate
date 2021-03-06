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
            {this.props.renovaed ? (
              <div>
                <h4 className="card-title">
                  Renova by
                  <a
                    className="userName"
                    href={
                      "http://3.19.122.178/profile/" + this.props.screenName
                    }
                  >
                    {" "}
                    @{this.props.screenName}
                  </a>
                </h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  <a
                    className="userName"
                    href={
                      "http://3.19.122.178/profile/" +
                      this.props.renovaScreenName
                    }
                  >
                    {" "}
                    @{this.props.renovaScreenName}
                  </a>
                </h6>
              </div>
            ) : (
              <div>
                <h4 className="card-title">
                  {" "}
                  <a
                    className="userName"
                    href={
                      "http://3.19.122.178/profile/" + this.props.screenName
                    }
                  >
                    {this.props.userName}
                  </a>
                </h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  @{this.props.screenName}
                </h6>
              </div>
            )}

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
