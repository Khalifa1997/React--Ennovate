import axios from "../axios-users";
import React from "react";
import * as actionTypes from "./types";

//Register User

export const editUser = userData => dispatch => {
  axios
    .post("/accounts/settings", userData, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      console.log("token:" + axios.defaults.headers.common.Authorization);
      console.log("[from edit profile LAZZZZ]", { ...res });
      dispatch(editProfileUser(res.data));
      console.log("hjbjkj", { ...res });
      axios
        .get("/users/show", {
          params: {
            user_ID: res.data._id
          }
        })
        .then(res => {
          console.log("MEN EL update ", res);
          dispatch(setCurrentUser(res.data, res.data));
        });
    })
    .catch(err => {
      console.log("{hello}", err.response.data);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      });
    });

  return Promise.resolve();
};

export const editImage = userData => dispatch => {
  //console.log("{image}", userData);
  axios
    .post("/accounts/update_profile_image ", userData, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      console.log("h", { ...res });
      dispatch(editImageUser(res.data));
      axios
        .get("/users/show", {
          params: {
            user_ID: res.data._id
          }
        })
        .then(res => {
          console.log("MEN EL image ", res);
          dispatch(setCurrentUser(res.data, res.data));
        });
    })
    .catch(err => {
      console.log("{hello}", err.response.data);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      });
    });
  return Promise.resolve();
};

export const getProfile = screen_name => dispatch => {
  return dispatch => {
    axios
      .get("/accounts/settings", {
        params: {
          screen_name
        }
      })
      .then(response => {
        dispatch(setProfileUser(response.data));
      })
      .catch(error => {});
  };
};

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

export const setCurrentUser = (profile, authUser) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: {
      profile: profile,
      authUser: authUser
    }
  };
};
