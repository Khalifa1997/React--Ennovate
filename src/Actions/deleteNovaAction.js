import * as actionTypes from "./types";
import axios from "../axios-users";
export const deleteNova = (nova_ID, isaRenova) => dispatch => {
  if (!isaRenova) {
    axios
      .post(
        "/statuses/destroy",
        { _id: nova_ID },
        {
          headers: {
            token: localStorage.getItem("jwtToken")
          }
        }
      )
      .then(res => {
        console.log(res);
        dispatch(deleteCurrentNova(res.data));
      })
      .catch(err => {
        console.log("Failed delete tweet");
      });
  } else {
    axios
      .post(
        "/statuses/unrenova",
        { _id: nova_ID },
        {
          headers: {
            token: localStorage.getItem("jwtToken")
          }
        }
      )
      .then(res => {
        console.log(res);
        dispatch(deleteCurrentNova(res.data));
      })
      .catch(err => {
        console.log("Failed delete tweet");
      });
  }

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
