import axios from "../axios-users";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./types";

//Register User

export const editUser = userData => dispatch => {
  console.log(userData);
  axios
    .post(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBUoi3TDU9jfZRE7jVC0QoA08DK8mJC6wo",
      userData
    )
    .then(res => {
      console.log(res);
      //const token = res.data.idToken;
      //localStorage.setItem("jwtToken", token);
      //setAuthToken(token);
      // const decoded = jwt_decode(token);
      const profile = {
        ID: 1234,
        name: "mirna",
        screen_name: "@mirna",
        created_at: "24/3/2019",
        location: "Egypt",
        bio: "ana helwa",
        followers_count: 100,
        friends_count: 200,
        favourites_count: 20,
        novas_count: 5,
        novas_IDs: [1, 2, 3, 4, 5],
        favourites_novas_IDS: [1, 2, 3, 4, 5],
        profile_image_url: "",
        default_profile_image: true
      };
      const currentUser = {
        ID: 1234,
        name: "mirna",
        screen_name: "@mirna",
        created_at: "24/3/2019",
        location: "Egypt",
        bio: "ana helwa",
        followers_count: 100,
        friends_count: 200,
        favourites_count: 20,
        novas_count: 5,
        novas_IDs: [1, 2, 3, 4, 5],
        favourites_novas_IDS: [1, 2, 3, 4, 5],
        profile_image_url: "",
        default_profile_image: true
      };
      dispatch(setCurrentUser(profile, currentUser));
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
  return {
    type: actionTypes.EDIT_PROFILE,
    payload: decoded
  };
};
