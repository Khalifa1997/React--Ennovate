import React, { Component } from "react";
import { connect } from "react-redux";
import AuthNav from "../../Components/AuthNav/AuthNav";
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
          <main>
            <div className="container">
              <div className="gallery">
                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 56
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 2
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span>
                    <i className="fas fa-clone" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 42
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 1
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Video</span>
                    <i className="fas fa-video" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 38
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 0
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span>
                    <i className="fas fa-clone" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 47
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 1
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 66
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 2
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span>
                    <i className="fas fa-clone" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 45
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 0
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 34
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 1
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Video</span>
                    <i className="fas fa-video" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 30
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 2
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="loader" />
            </div>
          </main>
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
          <main>
            <div className="container">
              <div className="gallery">
                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 56
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 2
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span>
                    <i className="fas fa-clone" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 42
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 1
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Video</span>
                    <i className="fas fa-video" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 38
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 0
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span>
                    <i className="fas fa-clone" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 47
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 1
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 66
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 2
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span>
                    <i className="fas fa-clone" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 45
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 0
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 34
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 1
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 41
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 0
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?"
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Video</span>
                    <i className="fas fa-video" aria-hidden="true" />
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" /> 30
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true" /> 2
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="loader" />
            </div>
          </main>
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
          <h3>Section 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            semper, magna a ultricies volutpat, mi eros viverra massa, vitae
            consequat nisi justo in tortor. Proin accumsan felis ac felis
            dapibus, non iaculis mi varius.
          </p>
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
              <ul>
                <li>
                  <span className="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Jane Doe</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
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

              <div className="col-md-12">
                <div class="tab-content tabs">{this.state.contentShown}</div>
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
