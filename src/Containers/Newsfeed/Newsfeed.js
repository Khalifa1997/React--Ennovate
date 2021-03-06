import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../Components/NavBar/NavBar";
import ProfileCard from "../../Components/profileCard/profileCard";
import Tweet from "../../Components/Tweet/Tweet";
import "./Newsfeed.css";
import Axios from "../../axios-users";
import { setProfile } from "../../Actions/profileActions";
import { runInThisContext } from "vm";
import NovaModal from "../../Components/novaModal/novaModal";
import { getNotifications } from "../../Actions/notificationsAction";
import { deleteNova } from "../../Actions/deleteNovaAction";
import { likeNova } from "../../Actions/likeNovaAction";
import { reNova } from "../../Actions/retweetNovaAction";
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";
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
  deleteNovaHandler = (novaID, isaRenova) => {
    //Deleting a Nova
    this.props.deleteNova(novaID, isaRenova);
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
  likeNovaHandler = (novaID, isLiked) => {
    this.props.likeNova(novaID, isLiked);
  };
  reNovaHandler = novaID => {
    this.props.reNova(novaID);
  };
  async modalShowHandler(novaID) {
    console.log("hi man");
    await Axios.get("/statuses/show/" + novaID, {
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
            isliked={this.props.auth.currentUser.favorites_novas_IDs.includes(
              tweet._id
            )}
            id={tweet._id}
            key={tweet._id}
            userName={tweet.user_name}
            deleteClicked={() => this.deleteNovaHandler(tweet._id)}
            likeClicked={() => {
              let isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
                tweet._id
              );
              console.log(isLiked);
              this.likeNovaHandler(tweet._id, isLiked);
            }}
            renovaed={tweet.renovaed}
            renovaScreenName={tweet.in_reply_to_screen_name}
            reNovaClicked={() => this.reNovaHandler(tweet._id)}
            textClicked={() => this.modalShowHandler(tweet._id)}
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
  /*  shouldComponentUpdate(nextProps, nextState) {
    //return nextProps.status.status != ;
    console.log("Here");
    return !(
      this.props.auth.currentUser.favorites_count !=
      nextProps.auth.currentUser.favorites_count
    );
  } */
  async componentWillReceiveProps(nextprops) {
    await Axios.get("/statuses/home_timeline", {
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
            <CSSTransition key={tweet._id} timeout={500} classNames="move">
              <Tweet
                screenName={tweet.user_screen_name}
                isliked={this.props.auth.currentUser.favorites_novas_IDs.includes(
                  tweet._id
                )}
                id={tweet._id}
                key={tweet._id}
                userName={tweet.user_name}
                deleteClicked={() => this.deleteNovaHandler(tweet._id)}
                likeClicked={() => {
                  let isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
                    tweet._id
                  );
                  console.log(isLiked);
                  this.likeNovaHandler(tweet._id, isLiked);
                }}
                renovaed={tweet.renovaed}
                renovaScreenName={tweet.in_reply_to_screen_name}
                reNovaClicked={() => this.reNovaHandler(tweet._id)}
                textClicked={() => this.modalShowHandler(tweet._id)}
                text={tweet.text}
                isAuth={
                  this.props.auth.currentUser.screen_name ===
                  tweet.user_screen_name
                }
              />
            </CSSTransition>
          );
        });

        console.log("posts" + posts);
        const contentShown = (
          <div role="tabpanel" id="Section1">
            <menu>
              <TransitionGroup className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
                {posts}
              </TransitionGroup>
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
  async componentDidMount() {
    await Axios.get("/statuses/home_timeline", {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
    })
      .then(res => {
        console.log("success from tweets newsfeed");
        console.log(res.data);
        let tweets = res.data;
        //ghalat 3ashan el state bayza
        const posts = tweets.reverse().map(tweet => {
          return (
            <CSSTransition key={tweet._id} timeout={500} classNames="move">
              <Tweet
                screenName={tweet.user_screen_name}
                isliked={this.props.auth.currentUser.favorites_novas_IDs.includes(
                  tweet._id
                )}
                id={tweet._id}
                key={tweet._id}
                userName={tweet.user_name}
                deleteClicked={() => this.deleteNovaHandler(tweet._id)}
                likeClicked={() => {
                  let isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
                    tweet._id
                  );
                  console.log(isLiked);
                  this.likeNovaHandler(tweet._id, isLiked);
                }}
                renovaed={tweet.renovaed}
                renovaScreenName={tweet.in_reply_to_screen_name}
                reNovaClicked={() => this.reNovaHandler(tweet._id)}
                textClicked={() => this.modalShowHandler(tweet._id)}
                text={tweet.text}
                isAuth={
                  this.props.auth.currentUser.screen_name ===
                  tweet.user_screen_name
                }
              />
            </CSSTransition>
          );
        });

        console.log("posts" + posts);
        const contentShown = (
          <div role="tabpanel" id="Section1">
            <menu>
              <TransitionGroup className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
                {posts}
              </TransitionGroup>
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
          <div className="p-2" style={{ width: "18%", marginTop: "3%" }}>
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
  { likeNova, reNova, getNotifications, deleteNova }
)(Newsfeed);
