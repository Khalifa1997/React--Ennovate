import axios from "../axios-users";
<<<<<<< HEAD
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./types";
import { decode } from "querystring";
=======
import * as actionTypes from "./types";
>>>>>>> 25da198e740402f3c81d36970a255f8ec82a9846

//Register User
export const registerUser = userData => dispatch => {
  axios
    .post("http://localhost:8080/accounts/signup", userData)
    .then(res => {
      // const clone = {
      //   ...this.state.signupForm
      // };
      // this.setState({ loading: false });
      dispatch({
        type: actionTypes.LOADING,
        payload: false
      });

      const token = res.data.idToken;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch({
<<<<<<< HEAD
        type: actionTypes.SET_CURRENT_USER,
        payload: decoded
=======
        type: actionTypes.LOADING,
        payload: false
>>>>>>> 25da198e740402f3c81d36970a255f8ec82a9846
      });
      //   clone.token = res.headers.auth;
      //   this.setState({ token: clone.token });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      });
    });
};

/*
    .then(res => {
 
      const clone = {
        ...this.state.signupForm
      };
      clone.token = res.data.idtoken;
      this.setState({ token: clone.token });
      this.setState({ loading: false });
      // this.props.history.push( '/' );
    })
    */
<<<<<<< HEAD

export const loginUser = userData => dispatch => {
  console.log(userData);
  axios
    .post(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBUoi3TDU9jfZRE7jVC0QoA08DK8mJC6wo",
      userData
    )
    .then(res => {
      console.log(res);
      const token = res.data.idToken;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log("{hello}", err.response.data.error.message);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data.error.message
      });
    });
};


export const setCurrentUser = decoded => {
  return{
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded
  }
}
=======
>>>>>>> 25da198e740402f3c81d36970a255f8ec82a9846
