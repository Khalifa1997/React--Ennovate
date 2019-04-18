import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../Components/NavBar/NavBar";
import Tweet from "../../Components/Tweet/Tweet";
import "./Profile.css";
import Axios from "axios";
import { setProfile } from "../../Actions/profileActions";
import { deleteNova } from "../../Actions/deleteNovaAction";
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
      novas: [],
      contentShown: null
    };
  }
  deleteNovaHandeler = novaID => {
    //Deleting a Nova
    const newPosts = [...this.state.novas];
    console.log(this.state.novas);
    //Delete a new tweet
    const index = newPosts.findIndex(a => a._id === novaID);
    console.log(index);
    if (index != -1) {
      newPosts.splice(index, 1);
      this.setState({ novas: newPosts });
      const novas = newPosts.map(tweet => {
        const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
          tweet._id
        );
        return (
          <CSSTransition key={tweet._id} timeout={500} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              isliked={isLiked}
              key={tweet._id}
              userName={tweet.user_name}
              deleteClicked={() => this.deleteNovaHandeler(tweet._id)}
              text={tweet.text}
              isAuth={
                this.props.auth.currentUser.screen_name ===
                tweet.user_screen_name
              }
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
        contentShown: contentShown
      });
    }
  };
  tabChangedHandler = (event, tabtIdentifier) => {
    console.log("clicked");

    if (tabtIdentifier === "0") {
      console.log("nova clicked");
      const novasClass = "active";
      const likesClass = "";
      console.log(this.state.novas);
      const novas = this.state.novas.map(tweet => {
        const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
          tweet._id
        );
        return (
          <CSSTransition key={tweet._id} timeout={500} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              isliked={isLiked}
              key={tweet._id}
              userName={tweet.user_name}
              deleteClicked={() => this.deleteNovaHandeler(tweet._id)}
              text={tweet.text}
              isAuth={
                this.props.auth.currentUser.screen_name ===
                tweet.user_screen_name
              }
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
        contentShown: contentShown
      });
    } else if (tabtIdentifier === "1") {
      console.log("like clicked ");
      const novasClass = "";
      const likesClass = "active";
      console.log(this.state.likedTweets);
      const likedTweets = this.state.likedTweets.map(tweet => {
        const isLiked = true;
        return (
          <CSSTransition key={tweet._id} timeout={500} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              isliked={isLiked}
              key={tweet._id}
              userName={tweet.user_name}
              text={tweet.text}
              deleteClicked={() => this.deleteNovaHandeler(tweet._id)}
              isAuth={
                this.props.auth.currentUser.screen_name ===
                tweet.user_screen_name
              }
            />
          </CSSTransition>
        );
      });

      const contentShown = (
        <div role="tabpanel" id="Section2">
          <menu>
            <TransitionGroup className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
              {likedTweets}
            </TransitionGroup>
          </menu>
        </div>
      );
      this.setState({
        novasClass: novasClass,
        likesClass: likesClass,
        likedTweets: likedTweets,
        contentShown: contentShown
      });
    }
  };

  async componentDidMount() {
    //Get my novas
    await Axios.get("http://localhost:8080/statuses/user_timeline", {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
    })
      .then(res => {
        console.log("Component Did mount");

        this.setState({ novas: res.data });
      })
      .catch(err => {
        console.log("failure from novas", { ...err });
      });
    //ghalat 3ashan el state bayza

    if (this.state.novas) {
      const novas = this.state.novas.reverse().map(tweet => {
        const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
          tweet._id
        );
        return (
          <CSSTransition key={tweet._id} timeout={500} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              isliked={isLiked}
              key={tweet._id}
              userName={tweet.user_name}
              deleteClicked={() => this.deleteNovaHandeler(tweet._id)}
              text={tweet.text}
              isAuth={
                this.props.auth.currentUser.screen_name ===
                tweet.user_screen_name
              }
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
        contentShown: contentShown
      });
    }

    //Get Liked Novas
  }
  componentWillMount() {
    console.log("Componenet will mount");
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
  async componentWillReceiveProps(nextprops) {
    //console.log("Component will reciever props");
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
    await Axios.get("http://localhost:8080/statuses/user_timeline", {
      headers: {
        token: Axios.defaults.headers.common.Authorization
      }
    })
      .then(res => {
        console.log("success from will receive props");

        this.setState({ novas: res.data });
        //ghalat 3ashan el state bayza
      })
      .catch(err => {
        console.log("failure from novas", { ...err });
      });
    console.log(this.state.novas);
    const novas = this.state.novas.reverse().map(tweet => {
      const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
        tweet._id
      );

      return (
        <CSSTransition key={tweet._id} timeout={500} classNames="move">
          <Tweet
            screenName={tweet.user_screen_name}
            isliked={isLiked}
            key={tweet._id}
            deleteClicked={() => this.deleteNovaHandeler(tweet._id)}
            userName={tweet.user_name}
            text={tweet.text}
            isAuth={
              this.props.auth.currentUser.screen_name === tweet.user_screen_name
            }
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
      contentShown: contentShown
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
                          href="javascript:;"
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
                          href="javascript:;"
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
                  <div className="tab-content tabs">
                    {this.state.contentShown}
                  </div>
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
