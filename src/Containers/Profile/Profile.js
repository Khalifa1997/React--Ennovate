import React, { Component } from "react";
import { connect } from "react-redux";
import AuthNav from "../../Components/AuthNav/AuthNav";
import Tweet from "../../Components/Tweet/Tweet";
import "./Profile.css";

class profile extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     username:this.props.username,
    //     token:this.props.token
    // }
    this.state = {
      novasClass: "active",
      likesClass: "",
      contentShown: (
        <div role="tabpanel" id="Section1">
          <menu>
            <div className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
              <Tweet />

              <Tweet />
              <Tweet />
              <Tweet />
            </div>
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
      const contentShown = (
        <div role="tabpanel" id="Section1">
          <menu>
            <div className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
              <Tweet />

              <Tweet />
              <Tweet />
              <Tweet />
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
      const contentShown = (
        <div role="tabpanel" id="Section2">
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      );
      this.setState({
        novasClass: novasClass,
        likesClass: likesClass,
        contentShown: contentShown
      });
    }
  };

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
                <h1 className="profile-user-name">janedoe_</h1>

                <button className="btn profilebtn profile-edit-btn">
                  <a href="/editprofile" className="referencecolor">
                    Edit Profile
                  </a>
                </button>
              </div>

              <div className="profile-stats">
                <li>
                  <span className="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">206</span> following
                </li>
              </div>

              <div className="profile-bio">
                <p>
                  <span className="profile-real-name">Jane Doe</span> Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
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
  auth: state.auth
});

export default connect(mapStateToProps)(profile);
