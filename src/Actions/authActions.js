import axios from "../axios-users";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./types";
import { decode } from "querystring";

//Register User
export const registerUser = userData => dispatch => {
  axios
    .post("http://3.19.122.178:3000/accounts/signup", userData)
    .then(res => {
      console.log({ ...res });
      // const clone = {
      //   ...this.state.signupForm
      // };
      // this.setState({ loading: false });
      dispatch({
        type: actionTypes.LOADING,
        payload: false
      });

      const token = res.data.token;
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
    .post("http://3.19.122.178:3000/accounts/signin", userData)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      const user = res.data.user;
      dispatch(setCurrentUser(user, user));
    })
    .catch(err => {
      console.log(err.response.data.msg);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data.msg
      });
    });
};

export const setCurrentUser = (profile, authUser) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: {
      profile: profile,
      authUser: authUser
    }
  };
};
