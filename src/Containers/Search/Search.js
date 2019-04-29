import React, { Component } from "react";
import Nav from "../../Components/NavBar/NavBar";
import ProfileSearch from "../../Components/profileSearch/profileSearch";
import Axios from "axios";
import { connect } from "react-redux";
import { zoomInUp } from "react-animations";
import "./Search.css";
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";
import { fabomb, faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsArr: [],
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
  async componentDidMount() {
    await Axios.get(
      "http://localhost:8080/users/search?query=" +
        this.props.match.params.value,
      {
        headers: {
          token: localStorage.getItem("jwtToken")
        }
      }
    )
      .then(res => {
        console.log("success from search");
        console.log(res.data);
        this.setState({ resultsArr: res.data });
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
                  usernmae={profile.screen_name}
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
  }
  render() {
    // this.getSearchResults();
    return (
      <div className="container-fluid">
        <div style={{ marginBottom: "1%" }}>
          <Nav />
        </div>
        <div className="container" style={{ width: "80%" }}>
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
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Search);
