import axios from "../axios-users";
import * as actionTypes from "./types";

//Register User
export const registerUser = userData => dispatch => {
  axios
    .post("http://localhost:8080/accounts/signup", userData)
    .then(res => {
      const clone = {
        ...this.state.signupForm
      };
      this.setState({ loading: false });
      dispatch({
        type: actionTypes.LOADING,
        payload: false
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
