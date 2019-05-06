import * as actionTypes from "./types";
import axios from "../axios-users";
export const likeNova = (nova_ID, isLiked) => dispatch => {
  const obj = {
    nova_ID: nova_ID
  };
  console.log(obj);
  if (!isLiked) {
    axios
      .post("/favorites/create", obj, {
        headers: {
          // token: axios.defaults.headers.common.Authorization
          token: localStorage.getItem("jwtToken")
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Failed Like nova post");
      });
  } else {
    axios
      .post("/favorites/destroy", obj, {
        headers: {
          // token: axios.defaults.headers.common.Authorization
          token: localStorage.getItem("jwtToken")
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Failed Like nova post");
      });
  }
  return Promise.resolve();
};
export const setCurrentUser = (authUser, profile) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: {
      profile: profile,
      authUser: authUser
    }
  };
};
