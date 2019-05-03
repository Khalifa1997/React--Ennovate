import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../Components/NavBar/NavBar";
import ProfileCard from "../../Components/profileCard/profileCard";
import Tweet from "../../Components/Tweet/Tweet";
import "./Newsfeed.css";
import Axios from "axios";
import { setProfile } from "../../Actions/profileActions";
import { runInThisContext } from "vm";
import NovaModal from "../../Components/novaModal/novaModal";
import { getNotifications } from "../../Actions/notificationsAction";
import { likeNova } from "../../Actions/likeNovaAction";
import { reNova } from "../../Actions/retweetNovaAction";
import { zoomInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

class Newsfeed extends Component {
  state = {
    contentShown: null,
    modal: null,
    modalShown: false,
    modalType: null,
    comments: []
  };
  toggle = () => {
    if (this.state.modalShown === true && this.state.modalType === 1) {
      //Clear notifications
      this.props.getNotifications(true);
    }
    this.setState({
      modalShown: !this.state.modalShown
    });
  };
  notifcationsClickHandler = () => {
    //Add notifcation message passing here
    //Append it to this.state.modal and set the two states
    this.props.getNotifications(false);
    this.setState({
      modalShown: true,
      modal: null,
      modalType: 1
    });
  };
  likeNovaHandler = novaID => {
    this.props.likeNova(novaID);
  };
  reNovaHandler = novaID => {
    this.props.reNova(novaID);
  };
  async modalShowHandler(novaID) {
    console.log("hi man");
    await Axios.get("http://localhost:8080/statuses/home_timeline", {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
    })
      .then(res => {
        this.setState({ comments: res.data });
      })
      .catch(err => {});
    const comments = this.state.comments
      .reverse()
      .slice(0, 5)
      .map(tweet => {
        return (
          <Tweet
            screenName={tweet.user_screen_name}
            isliked={false}
            key={tweet._id}
            userName={tweet.user_name}
            likeClicked={() => this.likeNovaHandler(tweet._id)}
            reNovaClicked={() => this.reNovaHandler(tweet._id)}
            text={tweet.text}
            isAuth={
              this.props.auth.currentUser.screen_name === tweet.user_screen_name
            }
          />
        );
      });
    //All coments are shown as tweets-- Add them to Modal
    this.setState({ modalShown: true, modalType: 0 });
    this.setState({ modal: comments });
  }
  async componentDidMount() {
    await Axios.get("http://localhost:8080/statuses/home_timeline", {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
    })
      .then(res => {
        console.log("success from tweets newsfeed");
        console.log(res.data);
        let tweets = res.data;
        //ghalat 3ashan el state bayza
        const posts = tweets.map(tweet => {
          return (
            <Tweet
              key={tweet._id}
              screenName={tweet.user_screen_name}
              userName={tweet.user_name}
              text={tweet.text}
              textClicked={() => this.modalShowHandler(tweet._id)}
              likeClicked={() => this.likeNovaHandler(tweet._id)}
              reNovaClicked={() => this.reNovaHandler(tweet._id)}
              isAuth={tweet.user === this.props.auth.profile._id}
            />
          );
        });
        const styles = {
          zoomInUp: {
            animation: "x 1s",
            animationName: Radium.keyframes(zoomInUp, "zoomInUp")
          }
        };
        console.log("posts" + posts);
        const contentShown = (
          <div role="tabpanel" id="Section1">
            <menu>
              <StyleRoot>
                <div
                  className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center"
                  style={styles.zoomInUp}
                >
                  {posts}
                </div>
              </StyleRoot>
            </menu>
          </div>
        );
        console.log(contentShown);
        this.setState({
          contentShown: contentShown
        });
      })
      .catch(err => {
        console.log("failure from tweets", { ...err });
      });
  }
  render() {
    return (
      <div className="body">
        <Nav
          onClickHandler={() => this.notifcationsClickHandler()}
          notifcationsCount={this.props.notifications.notifications.length}
        />
        <div className="d-flex">
          <div className="p-2" style={{ width: "25%", marginTop: "3%" }}>
            <ProfileCard />
          </div>
          <div className="p-2 flex-grow-1">
            {this.state.contentShown}
            <NovaModal
              isOpen={this.state.modalShown}
              toggle={() => this.toggle()}
              modalType={this.state.modalType}
            >
              {this.state.modal}
            </NovaModal>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  notifications: state.notifications
});

export default connect(
  mapStateToProps,
  { likeNova, reNova, getNotifications }
)(Newsfeed);
