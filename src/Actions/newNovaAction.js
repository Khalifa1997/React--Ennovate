import React from "react";
import axios from "../axios-users";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./types";

export const newNova = (novaText, mentions, replyID) => dispatch => {
  let length = mentions.length;

  console.log("di el reply id " + replyID);
  let data = {};
  if (mentions.length > 0 && replyID !== null) {
    data = {
      text: novaText,
      user_mentions_count: length.toString(),
      user_mentions_screen_names: mentions,
      in_reply_to_status_id: replyID
    };
  } else if (mentions.length > 0 && replyID === null) {
    data = {
      text: novaText,
      user_mentions_count: length.toString(),
      user_mentions_screen_names: mentions
    };
  } else if (mentions.length === 0 && replyID !== null) {
    data = {
      text: novaText,
      in_reply_to_status_id: replyID
    };
  } else if (mentions.length === 0 && replyID === null) {
    data = {
      text: novaText
    };
  }

  console.log(data);
  axios
    .post("http://localhost:8080/statuses/update", data, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      console.log("hjbjkj", { ...res });
      axios
        .get("/users/show", {
          params: {
            user_ID: res.data.user
          }
        })
        .then(res => {
          console.log("MEN EL new tweet response RESPONSE ", res);
          dispatch(setCurrentUser(res.data.user, res.data.user));
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
