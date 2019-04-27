import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../Components/NavBar/NavBar";
import ProfileCard from "../../Components/profileCard/profileCard";
import Tweet from "../../Components/Tweet/Tweet";

import Axios from "axios";
import { setProfile } from "../../Actions/profileActions";
import { runInThisContext } from "vm";
import { zoomInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

class Search extends Component {
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
  getSearchResults() {
    Axios.get(
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
      })
      .catch(err => {
        console.log("failure from search", { ...err });
      });
  }
  render() {
    this.getSearchResults();
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
export default Search;
