import React, { Component } from "react";
import AuthNav from "../../Components/AuthNav/AuthNav";
import "./Profile.css";
class profile extends Component {
  /* constructor(props){
        super(props)

        this.state = {
            username:this.props.username,
            token:this.props.token
        }
    }*/
  state = {
    username: "Maram"
  };

  /*<div>
        <AuthNav />
        <h1>{this.state.username}</h1>
      </div>*/

  render() {
    return (
      <div className="container">
        <div>
          <div className="twPc-div">
            <a className="twPc-bg twPc-block" />

            <div>
              <div className="twPc-button" />

              <a
                title="Mert S. Kaplan"
                href="https://twitter.com/mertskaplan"
                className="twPc-avatarLink"
              >
                <img
                  alt="Mert S. Kaplan"
                  src="https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg"
                  className="twPc-avatarImg"
                />
              </a>

              <div className="twPc-divUser">
                <div className="twPc-divName">
                  <a href="https://twitter.com/mertskaplan">Mert S. Kaplan</a>
                </div>
                <span>
                  <a href="https://twitter.com/mertskaplan">
                    @<span>mertskaplan</span>
                  </a>
                </span>
              </div>

              <div className="twPc-divStats">
                <ul className="twPc-Arrange">
                  <li className="twPc-ArrangeSizeFit">
                    <a
                      href="https://twitter.com/mertskaplan"
                      title="9.840 Tweet"
                    >
                      <span className="twPc-StatLabel twPc-block">Tweets</span>
                      <span className="twPc-StatValue">9.840</span>
                    </a>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <a
                      href="https://twitter.com/mertskaplan/following"
                      title="885 Following"
                    >
                      <span className="twPc-StatLabel twPc-block">
                        Following
                      </span>
                      <span className="twPc-StatValue">885</span>
                    </a>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <a
                      href="https://twitter.com/mertskaplan/followers"
                      title="1.810 Followers"
                    >
                      <span className="twPc-StatLabel twPc-block">
                        Followers
                      </span>
                      <span className="twPc-StatValue">1.810</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profile;
