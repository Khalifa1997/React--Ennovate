import * as actionTypes from "./types";
import axios from "../axios-users";
export const deleteNova = nova_ID => dispatch => {
  axios
    .delete("http://www.mocky.io/v2/5cb7ddd34c00007b0cd3d294", {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      console.log(res.status);
      dispatch(deleteCurrentNova(res.data));
    })
    .catch(err => {
      console.log("Failed delete tweet");
    });

  return Promise.resolve();
};
export const deleteCurrentNova = updatedUser => {
  return {
    type: actionTypes.DELETE_NOVA,
    payload: {
      auth: updatedUser
    }
  };
};
