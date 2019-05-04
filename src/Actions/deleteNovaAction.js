import * as actionTypes from "./types";
import axios from "../axios-users";
export const deleteNova = (nova_ID, mytweet) => async dispatch => {
  const obj = {
    _id: nova_ID
  };
  console.log(mytweet);
  if (!mytweet) {
    await axios
      .post("/statuses/destroy", obj, {
        headers: {
          token: axios.defaults.headers.common.Authorization
        }
      })
      .then(res => {
        console.log("My res");
        console.log(res);
        dispatch(deleteCurrentNova(res.data));
      })
      .catch(err => {
        console.log(err);
        console.log("Failed delete tweet");
      });
  } else {
    await axios
      .post("/statuses/unrenova", obj, {
        headers: {
          token: axios.defaults.headers.common.Authorization
        }
      })
      .then(res => {
        dispatch(deleteCurrentNova(res.data));
      })
      .catch(err => {
        console.log("Failed delete tweet");
      });
  }
};
export const deleteCurrentNova = updatedUser => {
  return {
    type: actionTypes.DELETE_NOVA,
    payload: {
      auth: updatedUser
    }
  };
};
