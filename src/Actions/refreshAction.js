import axios from "../axios-users";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./types";
import { decode } from "querystring";

export const refresh = authUser => dispatch => {
  console.log("{from refresh}", authUser);
  axios
    .get("users/show", {
      params: {
        user_ID: authUser
      }
    })
    .then(res => {
      console.log("MEN EL refresh RESPONSE ", res);
      //   const user = res.data.user;
      //   dispatch(setCurrentUser(user, user));
    })
    .catch(err => {
      console.log("{hello}", err);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response
      });
    });
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
