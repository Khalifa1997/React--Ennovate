import axios from "../axios-users";

import * as actionTypes from "./types";

export const setProfile = screen_name => dispatch => {
  return dispatch => {
    axios
      .get("http://3.19.122.178:3000/accounts/settings", screen_name)
      .then(response => {
        dispatch(getProfileUser(response.data));
        console.log(response.data);
      })
      .catch(error => {});
  };
};

export const getProfileUser = currentUser => {
  return {
    type: actionTypes.GET_PROFILE_DATA,
    payload: {
      profile: currentUser
    }
  };
};
