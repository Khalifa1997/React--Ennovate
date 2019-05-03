import React from "react";
import axios from "../axios-users";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./types";

export const newNova = (novaText, mentions) => dispatch => {
  const data = {
    novaText: novaText,
    entitiesObject: {
      users_mentions_ID: mentions
    }
  };
  console.log(data);
  axios
    .post("http://localhost:8080/statuses/update", novaText, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      console.log("hjbjkj", { ...res });
      axios
        .get("http://localhost:8080/users/show", {
          params: {
            user_ID: res.data.user
          }
        })
        .then(res => {
          console.log("MEN EL new tweet response RESPONSE ", res);
          dispatch(setCurrentUser(res.data, res.data));
        });
      // const user = res.data.user;
      // dispatch(setCurrentUser(user, user));
      //   dispatch({
      //     type: actionTypes.NEWNOVA_ACION,
      //     payload: novaText
      //   });

      //   const token = res.data.idToken;
      //   localStorage.setItem("jwtToken", token);
      //   setAuthToken(token);
      //   const decoded = jwt_decode(token);
      //   dispatch({
      //     type: actionTypes.SET_CURRENT_USER,
      //     payload: decoded
      //   });
      //   //   clone.token = res.headers.auth;
      //   //   this.setState({ token: clone.token });
    })
    .catch(err => {
      console.log("[failure] newNova]", { ...err });
      //   dispatch({
      //     type: actionTypes.GET_ERRORS,
      //     payload: err.response.data
      //   });
    });
  return Promise.resolve();
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
