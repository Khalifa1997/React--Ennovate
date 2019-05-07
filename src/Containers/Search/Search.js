import React, { Component } from "react";
import Nav from "../../Components/NavBar/NavBar";
import ProfileSearch from "../../Components/profileSearch/profileSearch";
import Axios from "../../axios-users";
import { connect } from "react-redux";
import { zoomInUp } from "react-animations";
import Spinner from "../../Components/UI/Spinner/Spinner";
import "./Search.css";
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";
import { fabomb, faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * This is a description of the Search Component.
 * @class
 * */
class Search extends Component {
  constructor(props) {
    super(props);
    /**
    * @property {json[]} resultsArr -Array of the search results.
   
    * @property {bool} loading                -Indicates whether the component is still loading or ready.
   
    
  */
    this.state = {
      resultsArr: [],
      loading: true,
      results: null
    };
  }
  // componentDidMount() {
  //   Axios.get(
  //     "http://localhost:8080/users/search?query=" +
  //       this.props.match.params.value,
  //     {
  //       headers: {
  //         token: localStorage.getItem("jwtToken")
  //       }
  //     }
  //   )
  //     .then(res => {
  //       console.log("success from search");
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log("failure from search", { ...err });
  //     });
  // }
  // componentWillUpdate() {
  //   Axios.get(
  //     "http://localhost:8080/users/search?query=" +
  //       this.props.match.params.value,
  //     {
  //       headers: {
  //         token: localStorage.getItem("jwtToken")
  //       }
  //     }
  //   )
  //     .then(res => {
  //       console.log("success from search");
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log("failure from search", { ...err });
  //     });
  // }
  async componentWillReceiveProps(nextProps) {
    this.setState({ loading: true });
    await Axios.get("/users/search?query=" + nextProps.match.params.value, {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
    })
      .then(async res => {
        console.log("success from search");
        console.log(res.data);
        await this.setState({ resultsArr: res.data });
        const showResults = this.state.resultsArr.map(profile => {
          console.log("auth:");
          console.log(this.props.auth);
          return (
            <CSSTransition key={profile._id} timeout={500} classNames="scroll">
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                <ProfileSearch
                  key={profile._id}
                  name={profile.name}
                  username={profile.screen_name}
                  text={profile.bio}
                  profile_image_url={profile.profile_image_url}
                />
              </button>
            </CSSTransition>
          );
        });
        this.setState({ results: showResults });
      })
      .catch(err => {
        console.log("failure from search", { ...err });
      });
    this.setState({ loading: false });
  }
  async componentDidMount() {
    this.setState({ loading: true });
    await Axios.get("/users/search?query=" + this.props.match.params.value, {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
    })
      .then(async res => {
        console.log("success from search");
        console.log(res.data);
        await this.setState({ resultsArr: res.data });
        const showResults = this.state.resultsArr.map(profile => {
          console.log("auth:");
          console.log(this.props.auth);
          return (
            <CSSTransition key={profile._id} timeout={500} classNames="scroll">
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                <ProfileSearch
                  key={profile._id}
                  name={profile.name}
                  username={profile.screen_name}
                  text={profile.bio}
                  profile_image_url={profile.profile_image_url}
                />
              </button>
            </CSSTransition>
          );
        });
        this.setState({ results: showResults });
      })
      .catch(err => {
        console.log("failure from search", { ...err });
      });
    this.setState({ loading: false });
  }
  render() {
    // this.getSearchResults();z
    return (
      <div className="container-fluid">
        <div style={{ marginBottom: "1%" }}>
          <Nav
            notifcationsCount={this.props.notifications.notifications.length}
          />
        </div>
        <div className="container" style={{ width: "80%" }}>
          {this.state.loading ? (
            <div
              class="d-flex justify-content-center"
              style={{ marginTop: "2%" }}
            >
              <Spinner />
            </div>
          ) : (
            <div>
              {this.state.resultsArr.length > 0 ? (
                <div className="list-group">
                  <button className="list-group-item list-group-item-action active">
                    Search Results
                  </button>
                  <TransitionGroup>{this.state.results}</TransitionGroup>
                </div>
              ) : (
                <div style={{ textAlign: "center", marginTop: "10%" }}>
                  <FontAwesomeIcon
                    icon={faBomb}
                    size={"10x"}
                    style={{ color: "black", textAlign: "center" }}
                  />

                  <h1 style={{ textAlign: "center", marginTop: "2%" }}>
                    No results
                  </h1>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  notifications: state.notifications
});

export default connect(mapStateToProps)(Search);
