import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../Components/NavBar/NavBar";
import Tweet from "../../Components/Tweet/Tweet";
import NovaModal from "../../Components/novaModal/novaModal";
import "./Profile.css";
import Axios from "../../axios-users";
import { setProfile } from "../../Actions/profileActions";
import { deleteNova } from "../../Actions/deleteNovaAction";
import { likeNova } from "../../Actions/likeNovaAction";
import { getNotifications } from "../../Actions/notificationsAction";
import { reNova } from "../../Actions/retweetNovaAction";
import { runInThisContext } from "vm";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";

import Spinner from "../../Components/UI/Spinner/Spinner";
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";

import FanModal from "../../Components/FansBox/modal/fansModal";

class profile extends Component {
  constructor(props) {
    super(props);
    this.props.setProfile(this.props.match.params.screenName);
    this.state = {
      likedNovas: [],
      id: "",
      loading: true,

      novaIDs: [],
      favNovasIDs: [],
      novasClass: "active",
      likesClass: "",
      toggledButton: null,
      novas: [],
      contentShown: null,
      modal: null,
      modalShown: false,
      modalShownFans: false,
      modalShownFollowers: false,
      comments: [],
      followers: [],
      followings: [],
      modalType: null,
      comments: [],
      userExists: true,
      tabClicked: 0
    };
  }
  notifcationsClickHandler = () => {
    //Add notifcation message passing here
    //Appending it to this.state.modal and set the two states
    this.props.getNotifications(false);
    this.setState({
      modalShown: true,
      modal: null,
      modalType: 1
    });
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

  toggleFans = () => {
    this.setState({
      modalShownFans: !this.state.modalShownFans
    });
  };

  toggleFollowers = () => {
    this.setState({
      modalShownFollowers: !this.state.modalShownFollowers
    });
  };

  likeNovaHandler = (novaID, isLiked) => {
    this.props.likeNova(novaID, isLiked);
  };
  async modalShowHandler(novaID) {
    console.log("hi man " + novaID);
    await Axios.get("/statuses/show/" + novaID, {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
    })
      .then(res => {
        console.log("comments ", res);
        this.setState({ comments: res.data });
      })
      .catch(err => {});

    const comments = this.state.comments.slice(0, 5).map(tweet => {
      return (
        <Tweet
          screenName={tweet.user_screen_name}
          isliked={this.props.auth.currentUser.favorites_novas_IDs.includes(
            tweet._id
          )}
          renovaed={tweet.renovaed}
          renovaScreenName={tweet.in_reply_to_screen_name}
          key={tweet._id}
          id={tweet._id}
          userName={tweet.user_name}
          likeClicked={() => {
            let isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
              tweet._id
            );
            console.log(isLiked);
            this.likeNovaHandler(tweet._id, isLiked);
          }}
          reNovaClicked={() => this.reNovaHandler(tweet._id)}
          text={tweet.text}
          isAuth={
            this.props.auth.currentUser.screen_name === tweet.user_screen_name
          }
        />
      );
    });
    this.setState({ loading: false });
    //All coments are shown as tweets-- Add them to Modal
    this.setState({ modalShown: true, modalType: 0 });
    this.setState({ modal: comments });
  }
  reNovaHandler = novaID => {
    this.props.reNova(novaID);
  };
  deleteNovaHandler = (novaID, isaRenova) => {
    //Deleting a Nova
    this.props.deleteNova(novaID, isaRenova);
    const newPosts = [...this.state.novas];
    console.log(this.state.novas);
    //Delete a new tweet
    const index = newPosts.findIndex(a => a._id === novaID);
    console.log(index);
    if (index != -1) {
      newPosts.splice(index, 1);
      this.setState({ novas: newPosts });
      const novas = newPosts.map(tweet => {
        /*  const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
          tweet._id
        ); */
        return (
          <CSSTransition key={tweet._id} timeout={500} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              isliked={this.props.auth.currentUser.favorites_novas_IDs.includes(
                tweet._id
              )}
              key={tweet._id}
              id={tweet._id}
              userName={tweet.user_name}
              likeClicked={() => {
                let isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
                  tweet._id
                );
                console.log(isLiked);
                this.likeNovaHandler(tweet._id, isLiked);
              }}
              renovaed={tweet.renovaed}
              renovaScreenName={tweet.in_reply_to_screen_name}
              deleteClicked={() =>
                this.deleteNovaHandler(tweet._id, tweet.renovaed)
              }
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
  tabChangedHandler = async (event, tabtIdentifier) => {
    console.log("clicked");

    if (tabtIdentifier === "0") {
      this.setState({ tabClicked: 0 });
      console.log("nova clicked");
      const novasClass = "active";
      const likesClass = "";
      console.log(this.state.novas);
      const novas = this.state.novas.map(tweet => {
        /*  const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
          tweet._id
        ); */
        return (
          <CSSTransition key={tweet._id} timeout={500} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              isliked={this.props.auth.currentUser.favorites_novas_IDs.includes(
                tweet._id
              )}
              key={tweet._id}
              id={tweet._id}
              userName={tweet.user_name}
              deleteClicked={() =>
                this.deleteNovaHandler(tweet._id, tweet.renovaed)
              }
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
      this.setState({ tabClicked: 1 });
      console.log("like clicked ");
      const novasClass = "";
      const likesClass = "active";
      await Axios.get("/favorites/list/" + this.props.match.params.screenName, {
        headers: {
          token: Axios.defaults.headers.common.Authorization
        }
      })
        .then(res => {
          this.setState({ likedNovas: res.data.novasArray.reverse() });
          //ghalat 3ashan el state bayza
        })
        .catch(err => {
          console.log("failure from liked novas", { ...err });
        });
      console.log(this.state.likedNovas);
      const novas = this.state.likedNovas.map(tweet => {
        /* const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
          tweet._id
        ); */

        return (
          <CSSTransition key={tweet._id} timeout={500} classNames="move">
            <Tweet
              screenName={tweet.user_screen_name}
              // isliked={isLiked}
              key={tweet._id}
              id={tweet._id}
              userName={tweet.user_name}
              text={tweet.text}
              isliked={this.props.auth.currentUser.favorites_novas_IDs.includes(
                tweet._id
              )}
              renovaed={tweet.renovaed}
              renovaScreenName={tweet.in_reply_to_screen_name}
              key={tweet._id}
              deleteClicked={() =>
                this.deleteNovaHandler(tweet._id, tweet.renovaed)
              }
              likeClicked={() => {
                let isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
                  tweet._id
                );
                console.log(isLiked);
                this.likeNovaHandler(tweet._id, isLiked);
              }}
              reNovaClicked={() => this.reNovaHandler(tweet._id)}
              textClicked={() => this.modalShowHandler(tweet._id)}
              userName={tweet.user_name}
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
        contentShown: contentShown,
        loading: false
      });
      this.setState({
        novasClass: novasClass,
        likesClass: likesClass
      });
    }
  };
  follow = () => {
    let user = {
      screen_name: this.props.profile.user.screen_name
    };
    Axios.post("/friendships/create", user, {
      headers: {
        token: Axios.defaults.headers.common.Authorization
      }
    })
      .then(res => {
        console.log("done");
        this.props.setProfile(this.props.match.params.screenName);
      })
      .catch(err => {
        console.log("failure from follow", { ...err });
      });
  };
  unfollow = () => {
    let user = {
      screen_name: this.props.profile.user.screen_name
    };
    Axios.post("/friendships/destroy", user, {
      headers: {
        token: Axios.defaults.headers.common.Authorization
      }
    })
      .then(res => {
        console.log("done");
        this.props.setProfile(this.props.match.params.screenName);
      })
      .catch(err => {
        console.log("failure from unfollow", { ...err });
      });
  };

  async componentDidMount() {
    //Get my novas
    //this.props.setProfile(this.props.match.params.screenName);
    this.setState({ loading: true });
    // this.setButton();
    await Axios.get(
      "/statuses/user_timeline/" + this.props.match.params.screenName,
      {
        headers: {
          token: localStorage.getItem("jwtToken")
        }
      }
    )
      .then(res => {
        this.setState({ novas: res.data.novas.reverse() });
      })
      .catch(err => {
        console.log("failure from novas", { ...err });
      });
    //ghalat 3ashan el state bayza
    await Axios.get(
      "/friendships/list?screen_name=" + this.props.match.params.screenName
    )
      .then(res => {
        console.log(res.data.users);
        this.setState({ followings: res.data.users });
        console.log("list of followings ", this.state.followings);
      })
      .catch(err => {
        console.log("failure from followers", { ...err });
      });

    await Axios.get(
      "/followers/list?screen_name=" + this.props.match.params.screenName
    )
      .then(res => {
        console.log(res.data.users);
        this.setState({ followers: res.data.users });
        console.log("list of followers ", this.state.followers);
      })
      .catch(err => {
        console.log("failure from followers", { ...err });
      });

    if (this.state.novas) {
      const novas = this.state.novas.map(tweet => {
        /* const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
          tweet._id
        ); */
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
              deleteClicked={() =>
                this.deleteNovaHandler(tweet._id, tweet.renovaed)
              }
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
        contentShown: contentShown,
        loading: false
      });
    }

    //Get Liked Novas
  }
  setButton = () => {
    let toggledButton = this.state.toggledButton;
    console.log(
      this.props.auth.currentUser.screen_name + "and" + this.props.profile.user
    );
    console.log(
      "follow" + this.props.auth.currentUser.screen_name ==
        this.props.profile.user.screen_name
    );
    if (
      this.props.auth.currentUser.screen_name ==
      this.props.profile.user.screen_name
    ) {
      toggledButton = (
        <button className="btn profilebtn profile-edit-btn">
          <a href="/editprofile" className="referencecolor">
            Edit Profile
          </a>
        </button>
      );
    } else {
      toggledButton = (
        <button className="btn profilebtn profile-edit-btn">
          <a className="referencecolor">Follow</a>
        </button>
      );
    }
    this.setState({
      toggledButton: toggledButton
    });
  };
  componentWillMount() {
    this.props.setProfile(this.props.match.params.screenName);
    // this.setButton();
  }
  async componentWillReceiveProps(nextprops) {
    // this.setButton();
    this.props.setProfile(this.props.match.params.screenName);
    console.log(nextprops.profile.user);

    if (Object.entries(nextprops.profile.user).length === 0) {
      this.setState({ userExists: false });
      console.log("false");
    } else this.setState({ userExists: true });

    this.setState({ loading: false });

    await Axios.get(
      "/statuses/user_timeline/" + this.props.match.params.screenName,
      {
        headers: {
          // token: Axios.defaults.headers.common.Authorization
          token: localStorage.getItem("jwtToken")
        }
      }
    )
      .then(res => {
        this.setState({ novas: res.data.novas.reverse() });
        //ghalat 3ashan el state bayza
      })
      .catch(err => {
        console.log("failure from novas", { ...err });
      });
    console.log(this.state.novas);
    const novas = this.state.novas.map(tweet => {
      /* const isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
        tweet._id
      ); */

      return (
        <CSSTransition key={tweet._id} timeout={500} classNames="move">
          <Tweet
            screenName={tweet.user_screen_name}
            isliked={this.props.auth.currentUser.favorites_novas_IDs.includes(
              tweet._id
            )}
            renovaed={tweet.renovaed}
            renovaScreenName={tweet.in_reply_to_screen_name}
            id={tweet._id}
            key={tweet._id}
            deleteClicked={() =>
              this.deleteNovaHandler(tweet._id, tweet.renovaed)
            }
            likeClicked={() => {
              let isLiked = this.props.auth.currentUser.favorites_novas_IDs.includes(
                tweet._id
              );
              console.log(isLiked);
              this.likeNovaHandler(tweet._id, isLiked);
            }}
            reNovaClicked={() => this.reNovaHandler(tweet._id)}
            textClicked={() => this.modalShowHandler(tweet._id)}
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
      loading: false
    });
    if (this.state.tabClicked == 0) {
      this.setState({
        contentShown: contentShown
      });
    }
  }
  render() {
    let toggledButton = "";

    if (
      this.props.auth.currentUser.screen_name ==
      this.props.profile.user.screen_name
    ) {
      toggledButton = (
        <button className="btn profilebtn profile-edit-btn">
          <a href="/editprofile" className="referencecolor">
            Edit Profile
          </a>
        </button>
      );
    } else {
      console.log("following" + this.props.profile.following);
      if (this.props.profile.following == "false") {
        toggledButton = (
          <button
            className="btn btn-success profilebtn profile-edit-btn"
            onClick={this.follow}
          >
            <a className="referencecolor">Follow</a>
          </button>
        );
      } else {
        toggledButton = (
          <button
            className="btn btn-danger profilebtn profile-edit-btn"
            onClick={this.unfollow}
          >
            <a className="referencecolor">Unfollow</a>
          </button>
        );
      }
    }
    return (
      <div className="body">
        <Nav
          onClickHandler={() => this.notifcationsClickHandler()}
          notifcationsCount={this.props.notifications.notifications.length}
        />
        {this.state.userExists ? (
          <div className="container widthadjust">
            <div className="profilecontainer ">
              <div className="profile">
                <div className="profile-image">
                  <img
                    className="imgwidth"
                    src={this.props.profile.user.profile_image_url}
                  />
                </div>

                <div className="profile-user-settings">
                  <h1 className="profile-user-name">
                    {this.props.profile.user.screen_name}
                  </h1>

                  {toggledButton}
                </div>

                <div className="profile-stats">
                  <li>
                    <span className="profile-stat-count">
                      {this.props.profile.user._id ===
                      this.props.auth.currentUser._id
                        ? this.props.auth.currentUser.novas_count
                        : this.props.profile.user.novas_count}
                    </span>{" "}
                    Novas
                  </li>
                  <li>
                    <span className="profile-stat-count">
                      {this.props.profile.user.followers_count}
                    </span>{" "}
                    <span
                      onClick={() => {
                        console.log("hii");
                        this.toggleFollowers();
                      }}
                    >
                      followers
                    </span>
                  </li>
                  <li>
                    <span className="profile-stat-count">
                      {this.props.profile.user.friends_count}
                    </span>{" "}
                    <span
                      id="1"
                      onClick={() => {
                        console.log("hii");
                        this.toggleFans();
                      }}
                    >
                      following
                    </span>
                  </li>
                </div>

                <div className="profile-bio">
                  <p>
                    <span className="profile-real-name">
                      {this.props.profile.user.name}
                    </span>{" "}
                    {this.props.profile.user.bio}
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
                        <li
                          role="presentation"
                          className={this.state.novasClass}
                        >
                          <a
                            aria-controls="novas"
                            role="tab"
                            data-toggle="tab"
                            href="javascript:;"
                            onClick={event =>
                              this.tabChangedHandler(event, "0")
                            }
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
                        <li
                          role="presentation"
                          className={this.state.likesClass}
                        >
                          <a
                            href="javascript:;"
                            aria-controls="likes"
                            role="tab"
                            data-toggle="tab"
                            onClick={event =>
                              this.tabChangedHandler(event, "1")
                            }
                          >
                            Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="tab-content tabs">
                      {this.state.loading ? (
                        <div
                          className="d-flex justify-content-center"
                          style={{ marginTop: "2%" }}
                        >
                          <Spinner />
                        </div>
                      ) : (
                        <div>
                          {this.state.contentShown}
                          <NovaModal
                            isOpen={this.state.modalShown}
                            toggle={() => this.toggle()}
                            modalType={this.state.modalType}
                          >
                            {this.state.modal}
                          </NovaModal>
                        </div>
                      )}
                    </div>
                  </div>
                  <FanModal
                    boxName="Followings"
                    list={this.state.followings}
                    isOpen={this.state.modalShownFans}
                    onClose={() => this.toggleFans()}
                  />

                  <FanModal
                    boxName="Followers"
                    list={this.state.followers}
                    isOpen={this.state.modalShownFollowers}
                    onClose={() => this.toggleFollowers()}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              textAlign: "left",

              margin: "70px",
              maxHeight: "72rem",
              minHeight: "5rem",
              alignContent: "center",
              alignSelf: "center",
              fontSize: 70
            }}
          >
            {" "}
            user does not exist
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  me: state.me,
  notifications: state.notifications,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { setProfile, deleteNova, likeNova, reNova, getNotifications }
)(profile);
