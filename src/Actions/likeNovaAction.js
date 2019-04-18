import * as actionTypes from "./types";
import axios from "../axios-users";
export const likeNova = nova_ID => dispatch => {
  axios
    .post("http://www.mocky.io/v2/5cb7ddd34c00007b0cd3d294", {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      dispatch(likeCurrentNova(res.data));
    })
    .catch(err => {
      console.log("Failed like nova");
    });

  return Promise.resolve();
};
export const likeCurrentNova = currentUser => {
  return {
    type: actionTypes.LIKE_NOVA,
    payload: {
      currentUser: currentUser
    }
  };
};
