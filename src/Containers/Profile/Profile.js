import React, { Component } from "react";
import { connect } from "react-redux";
import AuthNav from "../../Components/AuthNav/AuthNav";
import Tweet from "../../Components/Tweet/Tweet";
import "./Profile.css";
import Axios from "axios";
import { runInThisContext } from "vm";

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
      contentShown: (
        <div role="tabpanel" id="Section1">
          <menu>
            <div className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center" />
          </menu>
        </div>
      )
    };
  }
  tabChangedHandler = (event, tabtIdentifier) => {
    console.log("clicked");

    if (tabtIdentifier === "0") {
      console.log("nova clicked");
      const novasClass = "active";
      const likesClass = "";
      const posts = this.state.tweets.map(tweet => {
        return (
          <Tweet
            screenName={tweet.screenname}
            userName={tweet.username}
            text={tweet.tweet_text}
            isAuth={tweet.username === "omar"}
          />
        );
      });

      const contentShown = (
        <div role="tabpanel" id="Section1">
          <menu>
            <div className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
              {posts}
            </div>
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
      const posts = this.state.likedTweets.map(tweet => {
        return (
          <Tweet
            screenName={tweet.screenname}
            userName={tweet.username}
            text={tweet.tweet_text}
            isAuth={tweet.username === "omar"}
          />
        );
      });

      const contentShown = (
        <div role="tabpanel" id="Section2">
          <menu>
            <div className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
              {posts}
            </div>
          </menu>
        </div>
      );
      this.setState({
        novasClass: novasClass,
        likesClass: likesClass,
        contentShown: contentShown
      });
    }
  };
  componentDidMount() {
    //Get my profile
    const { handle } = this.props.match.params;
    Axios.get("http://www.mocky.io/v2/5cb271603000006200a78c83")
      .then(res => {
        this.setState({
          screenName: res.data.name,
          userName: res.data.screen_name,
          bio: res.data.bio,
          novascount: res.data.novas_count,
          location: res.data.location,
          novaIDs: res.data.novaIDs,
          favNovasIDs: res.data.favNovasIDs,
          followerscount: res.data.followers_count,
          followingcount: res.data.following_count,
          id: res.data.ID
        });
      })
      .catch(err => {
        console.log(err);
      });
    //Get my tweets
    Axios.get("http://www.mocky.io/v2/5cb259bc3000007d00a78c71")
      .then(res => {
        //console.log(tweets);
        this.setState({ tweets: res.data });
        const posts = this.state.tweets.map(tweet => {
          return (
            <Tweet
              screenName={tweet.screenname}
              userName={tweet.username}
              text={tweet.tweet_text}
              isAuth={tweet.username === "omar"}
            />
          );
        });
        const contentShown = (
          <div role="tabpanel" id="Section1">
            <menu>
              <div className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
                {posts}
              </div>
            </menu>
          </div>
        );
        this.setState({
          contentShown: contentShown
        });
        this.setState({ tweets: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    //Get Liked tweets
    Axios.get("http://www.mocky.io/v2/5cb25f113000005600a78c72")
      .then(res => {
        this.setState({ likedTweets: res.data });
      })
      .catch(err => {
        console.log(err);
      });
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
  }
  render() {
    return (
      <div className="body">
        <AuthNav />
        <div className="container widthadjust">
          <div className="profilecontainer ">
            <div className="profile">
              <div className="profile-image">
                <img src="https://scontent-hbe1-1.cdninstagram.com/vp/b2bb632c990d9dc803669d899526e5c4/5D2AB7F9/t51.2885-19/s150x150/21568575_1965694313678210_3209559520485310464_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com" />
              </div>

              <div className="profile-user-settings">
                <h1 className="profile-user-name">{this.state.screenName}</h1>

                {this.state.toggledButton}
              </div>

              <div className="profile-stats">
                <li>
                  <span className="profile-stat-count">
                    {this.state.novascount}
                  </span>{" "}
                  posts
                </li>
                <li>
                  <span className="profile-stat-count">
                    {this.state.followerscount}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span className="profile-stat-count">
                    {this.state.followingcount}
                  </span>{" "}
                  following
                </li>
              </div>

              <div className="profile-bio">
                <p>
                  <span className="profile-real-name">
                    @{this.state.userName}
                  </span>{" "}
                  {this.state.bio}
                  📷✈️🏕️
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
  me: state.me
});

export default connect(mapStateToProps)(profile);
