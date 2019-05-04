import axios from "../axios-users";
import Axios from "axios";
import * as actionTypes from "./types";

export const setProfile = screen_name => dispatch => {
  console.log("profile actions dispatch");
  axios
    .get("http://localhost:8080/users/show?screen_name=" + screen_name, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(response => {
      console.log(response.data);
      dispatch(getProfileUser(response.data.user, response.data.following));
    })
    .catch(error => {
      console.log("error" + error);
    });
};

export const getProfileUser = (user, following) => {
  return {
    type: actionTypes.GET_PROFILE_DATA,
    payload: {
      user: user,
      following: following
    }
  };
};
