import axios from "../axios-users";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./types";
import { decode } from "querystring";

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
        type: actionTypes.SET_CURRENT_USER,
        payload: decoded
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

export const loginUser = userData => dispatch => {
  console.log(userData);
  axios
    .post("http://localhost:8080/accounts/signin", userData)
    .then(res => {
      console.log(res);
      const token = res.data.idToken;
      localStorage.setItem("jwtToken", token);
<<<<<<< HEAD
      // setAuthToken(token);
      // const decoded = jwt_decode(token);
      const profile = {
        username: "mirna",
        email: "mirna@gmail.com"
      };
      dispatch(setCurrentUser(profile));
=======
      setAuthToken(token);
      const decoded = jwt_decode(token);
      //const currentUser = res;
      dispatch(setCurrentUser(decoded));
>>>>>>> 7cba2e2e5ec6a27a1e09768f5676e05d509dba21
    })
    .catch(err => {
      console.log("{hello}", err.response);
      /*
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response
        
      });*/
    });
};

export const setCurrentUser = decoded => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};
