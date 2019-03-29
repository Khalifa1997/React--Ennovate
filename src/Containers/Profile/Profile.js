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
  }
  /*<h1>MAR7ABBAAAAA {this.props.auth.user.email}</h1>*/

  render() {
    return (
      <div className="body">
        <AuthNav />

        <div class="profilecontainer">
          <div class="profile">
            <div class="profile-image">
              <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">janedoe_</h1>

              <button class="btn profilebtn profile-edit-btn">
                Edit Profile
              </button>

              <button
                class="btn profilebtn profile-settings-btn"
                aria-label="profile settings"
              >
                <i class="fas fa-cog" aria-hidden="true" />
              </button>
            </div>

            <div class="profile-stats">
              <ul>
                <li>
                  <span class="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span class="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span class="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>

            <div class="profile-bio">
              <p>
                <span class="profile-real-name">Jane Doe</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="centerdiv">
            <div className="row ">
              <div class="col-md-6 ">
                <div class="tab" role="tabpanel">
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                      <a
                        href="#Section1"
                        aria-controls="novas"
                        role="tab"
                        data-toggle="tab"
                      >
                        Novas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="tab" role="tabpanel">
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation">
                      <a
                        href="#Section2"
                        aria-controls="likes"
                        role="tab"
                        data-toggle="tab"
                      >
                        Likes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main>
          <div class="container">
            <div class="gallery">
              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 56
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 2
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-type">
                  <span class="visually-hidden">Gallery</span>
                  <i class="fas fa-clone" aria-hidden="true" />
                </div>

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 42
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 1
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-type">
                  <span class="visually-hidden">Video</span>
                  <i class="fas fa-video" aria-hidden="true" />
                </div>

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 38
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 0
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-type">
                  <span class="visually-hidden">Gallery</span>
                  <i class="fas fa-clone" aria-hidden="true" />
                </div>

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 47
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 1
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 66
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 2
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-type">
                  <span class="visually-hidden">Gallery</span>
                  <i class="fas fa-clone" aria-hidden="true" />
                </div>

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 45
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 0
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 34
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 1
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 41
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 0
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-type">
                  <span class="visually-hidden">Video</span>
                  <i class="fas fa-video" aria-hidden="true" />
                </div>

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true" /> 30
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true" /> 2
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="loader" />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(profile);
