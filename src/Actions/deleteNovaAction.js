import * as actionTypes from "./types";
import axios from "../axios-users";
export const deleteNova = nova_ID => dispatch => {
  const obj = {
    nova_ID: nova_ID
  };
  axios
    .post(
      "http://localhost:8080/statuses/destroy",
      { _id: nova_ID },
      {
        headers: {
          token: axios.defaults.headers.common.Authorization
        }
      }
    )
    .then(res => {
      console.log(res);
      //dispatch(deleteCurrentNova(res.data));
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
