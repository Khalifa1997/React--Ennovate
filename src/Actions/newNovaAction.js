import React from "react";
import axios from "../axios-users";
import * as actionTypes from "./types";

export const newNova = novaText => dispatch => {
  console.log("the nova", { ...novaText });
  axios
    .post("http://localhost:8080/statuses/update", novaText, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      console.log(res);
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
};
