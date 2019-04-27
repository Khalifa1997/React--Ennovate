import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../Components/NavBar/NavBar";
import ProfileCard from "../../Components/profileCard/profileCard";
import Tweet from "../../Components/Tweet/Tweet";
import "./Newsfeed.css";
import Axios from "axios";
import { setProfile } from "../../Actions/profileActions";
import { runInThisContext } from "vm";
import { zoomInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

class Newsfeed extends Component {
  state = {
    contentShown: null
  };
  componentDidMount() {
    Axios.get("http://localhost:8080/statuses/home_timeline", {
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
              isAuth={
                tweet.user_scree_name === this.props.auth.profile.screen_name
              }
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
        <Nav />
        <div className="d-flex">
          <div className="p-2">
            <ProfileCard />
          </div>
          <div className="p-2 flex-grow-1">{this.state.contentShown}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Newsfeed);
