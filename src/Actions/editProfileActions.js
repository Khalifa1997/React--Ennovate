import axios from "../axios-users";

import * as actionTypes from "./types";

//Register User

export const editUser = userData => dispatch => {
  console.log(userData);
  axios
    .post("http://localhost:8080/accounts/settings", userData, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      console.log("[from edit profile]", { ...res });
      //dispatch(editProfileUser(res.data));
    })
    .catch(err => {
      /*
      console.log("{hello}", err.response.data.error.message);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data.error.message
      });
      */
    });
};

export const editImage = userData => dispatch => {
  console.log(userData);
  axios
    .post("http://localhost:8080/accounts/update_profile_image ", userData, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      dispatch(editImageUser(res.data));
    })
    .catch(err => {
      /*
      console.log("{hello}", err.response.data.error.message);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data.error.message
      });
      */
    });
};
/*
export const setProfile = screen_name => dispatch => {
  return dispatch => {
    axios
      .get("http://localhost:8080/accounts/settings", screen_name)
      .then(response => {
        dispatch(setProfileUser(response.data));
        console.log(response.data);
      })
      .catch(error => {});
  };
};
*/
export const editProfileUser = currentUser => {
  return {
    type: actionTypes.EDIT_PROFILE,
    payload: {
      profile: currentUser
    }
  };
};

export const editImageUser = currentImage => {
  return {
    type: actionTypes.SET_PROFILE_IMAGE,
    payload: {
      image: currentImage
    }
  };
};

export const setProfileUser = currentUser => {
  return {
    type: actionTypes.SET_PROFILE,
    payload: {
      profile: currentUser
    }
  };
};
