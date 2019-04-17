import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../Components/NavBar/NavBar";
import Tweet from "../../Components/Tweet/Tweet";
import "./Profile.css";
import Axios from "axios";
import { setProfile } from "../../Actions/profileActions";
import { runInThisContext } from "vm";
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";

class profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      likedTweets: [],
      id: "",
      screenName: "",
      userName: "",
      bio: "",
      location: "",
      followerscount: 0,
      followingcount: 0,
      novascount: 0,
      novaIDs: [],
      favNovasIDs: [],
      novasClass: "active",
      likesClass: "",
      toggledButton: null,
      novas: null,
      contentShown: (
        <div role="tabpanel" id="Section1">
          <menu>
            <div className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center" />
          </menu>
        </div>
      )
    };
  }
  deleteNovaHandeler = novaID => {
    //Deleting a Nova
    const newPosts = { ...this.state.novas };
    newPosts.splice(novaID, 1);
    this.setState({ novas: newPosts });
  };
  tabChangedHandler = (event, tabtIdentifier) => {
    console.log("clicked");

    if (tabtIdentifier === "0") {
      console.log("nova clicked");
      const novasClass = "active";
      const likesClass = "";
      const novas = this.state.tweets.reverse().map(tweet => {
        return (
          <CSSTransition key={tweet._id} timeout={700} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              key={tweet._id}
              userName={tweet.user_name}
              text={tweet.tweet_text}
              isAuth={tweet.user_name === this.props.auth.profile._id}
            />
          </CSSTransition>
        );
      });

      const contentShown = (
        <div role="tabpanel" id="Section1">
          <menu>
            <TransitionGroup className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
              {novas}
            </TransitionGroup>
          </menu>
        </div>
      );
      this.setState({
        novasClass: novasClass,
        likesClass: likesClass,
        contentShown: contentShown,
        novas: novas
      });
    } else if (tabtIdentifier === "1") {
      console.log("like clicked ");
      const novasClass = "";
      const likesClass = "active";
      console.log(this.state.likedTweets);
      const novas = this.state.likedTweets.reverse().map(tweet => {
        return (
          <CSSTransition key={tweet._id} timeout={700} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              key={tweet._id}
              userName={tweet.user_name}
              text={tweet.tweet_text}
              isAuth={tweet.user_name === this.props.auth.profile._id}
            />
          </CSSTransition>
        );
      });

      const contentShown = (
        <div role="tabpanel" id="Section2">
          <menu>
            <TransitionGroup className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
              {novas}
            </TransitionGroup>
          </menu>
        </div>
      );
      this.setState({
        novasClass: novasClass,
        likesClass: likesClass,
        novas: novas,
        contentShown: contentShown
      });
    }
  };

  componentDidMount() {
    //Get my tweets
    Axios.get("http://localhost:8080/statuses/user_timeline", {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
    })
      .then(res => {
        console.log("success from tweets");
        console.log(res.data);
        this.setState({ tweets: res.data });
        //ghalat 3ashan el state bayza
        const novas = this.state.tweets.reverse().map(tweet => {
          return (
            <CSSTransition key={tweet._id} timeout={700} classNames="move">
              <Tweet
                screenName={tweet.user_screen_name}
                key={tweet._id}
                userName={tweet.user_name}
                text={tweet.tweet_text}
                isAuth={tweet.user_name === this.props.auth.profile._id}
              />
            </CSSTransition>
          );
        });

        const contentShown = (
          <div role="tabpanel" id="Section1">
            <menu>
              <TransitionGroup className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
                {novas}
              </TransitionGroup>
            </menu>
          </div>
        );
        this.setState({
          novas: novas,
          contentShown: contentShown
        });
        //this.setState({ tweets: res.data });
      })
      .catch(err => {
        console.log("failure from tweets", { ...err });
      });
    //Get Liked tweets
    /* Axios.get("http://www.mocky.io/v2/5cb6078d330000e1345d7fb5")
      .then(res => {
        this.setState({ likedTweets: res.data });
      })
      .catch(err => {
        console.log(err);
      });*/
  }
  componentWillMount() {
    if (this.props.auth.me) {
      let toggledButton = this.state.toggledButton;
      toggledButton = (
        <button className="btn profilebtn profile-edit-btn">
          <a href="/editprofile" className="referencecolor">
            Edit Profile
          </a>
        </button>
      );
      this.setState({
        toggledButton: toggledButton
      });
    } else {
      let toggledButton = this.state.toggledButton;
      toggledButton = (
        <button className="btn profilebtn profile-edit-btn">
          <a className="referencecolor">Follow</a>
        </button>
      );
      this.setState({
        toggledButton: toggledButton
      });
    }
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.auth.me) {
      console.log("me is true");
      let toggledButton = this.state.toggledButton;
      toggledButton = (
        <button className="btn profilebtn profile-edit-btn">
          <a href="/editprofile" className="referencecolor">
            Edit Profile
          </a>
        </button>
      );
      this.setState({
        toggledButton: toggledButton
      });
    } else {
      console.log("me is false");
      let toggledButton = this.state.toggledButton;
      toggledButton = (
        <button className="btn profilebtn profile-edit-btn">
          <a className="referencecolor">Follow</a>
        </button>
      );
      this.setState({
        toggledButton: toggledButton
      });
    }
    Axios.get("http://localhost:8080/statuses/user_timeline", {
      headers: {
        token: Axios.defaults.headers.common.Authorization
      }
    })
      .then(res => {
        console.log("success from will receive props", { ...res });
        this.setState({ tweets: res.data });
        //ghalat 3ashan el state bayza
        const novas = this.state.tweets.reverse().map(tweet => {
          return (
            <CSSTransition key={tweet._id} timeout={700} classNames="move">
              <Tweet
                screenName={tweet.user_screen_name}
                key={tweet._id}
                userName={tweet.user_name}
                text={tweet.tweet_text}
                isAuth={tweet.user_name === this.props.auth.profile._id}
              />
            </CSSTransition>
          );
        });

        const contentShown = (
          <div role="tabpanel" id="Section1">
            <menu>
              <TransitionGroup className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
                {novas}
              </TransitionGroup>
            </menu>
          </div>
        );

        this.setState({
          novas: novas,
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
        <Nav />
        <div className="container widthadjust">
          <div className="profilecontainer ">
            <div className="profile">
              <div className="profile-image">
                <img
                  className="imgwidth"
                  src={this.props.auth.profile.profile_image_url}
                />
              </div>

              <div className="profile-user-settings">
                <h1 className="profile-user-name">
                  {this.props.auth.profile.screen_name}
                </h1>

                {this.state.toggledButton}
              </div>

              <div className="profile-stats">
                <li>
                  <span className="profile-stat-count">
                    {this.props.auth.profile.novas_count}
                  </span>{" "}
                  Novas
                </li>
                <li>
                  <span className="profile-stat-count">
                    {this.props.auth.profile.followers_count}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span className="profile-stat-count">
                    {this.props.auth.profile.friends_count}
                  </span>{" "}
                  following
                </li>
              </div>

              <div className="profile-bio">
                <p>
                  <span className="profile-real-name">
                    {this.props.auth.profile.name}
                  </span>{" "}
                  {this.props.auth.profile.bio}
                </p>
              </div>
            </div>
          </div>

          <div className="container ">
            <div className="centerdiv">
              <div className="row ">
                <div className="col-md-6 ">
                  <div className="tab" role="tabpanel">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className={this.state.novasClass}>
                        <a
                          aria-controls="novas"
                          role="tab"
                          data-toggle="tab"
                          onClick={event => this.tabChangedHandler(event, "0")}
                        >
                          Novas
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="tab" role="tabpanel">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className={this.state.likesClass}>
                        <a
                          aria-controls="likes"
                          role="tab"
                          data-toggle="tab"
                          onClick={event => this.tabChangedHandler(event, "1")}
                        >
                          Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div class="tab-content tabs">{this.state.contentShown}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  me: state.me,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { setProfile }
)(profile);
