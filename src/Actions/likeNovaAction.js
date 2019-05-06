import * as actionTypes from "./types";
import axios from "../axios-users";
export const likeNova = (nova_ID, isLiked) => dispatch => {
  const obj = {
    nova_ID: nova_ID
  };
  console.log(obj);
  if (!isLiked) {
    axios
      .post("http://localhost:8080/favorites/create", obj, {
        headers: {
          token: axios.defaults.headers.common.Authorization
        }
      })
      .then(res => {
        console.log(res);
        dispatch(setCurrentUser(res.data.actionUser, res.data.novaUser));
      })
      .catch(err => {
        console.log("Failed Like nova post");
      });
  } else {
    axios
      .post("http://localhost:8080/favorites/destroy", obj, {
        headers: {
          token: axios.defaults.headers.common.Authorization
        }
      })
      .then(res => {
        dispatch(setCurrentUser(res.data.actionUser, res.data.novaUser));
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
