import * as actionTypes from "./types";
import React from "react";
import axios from "../axios-users";
export const deleteNova = nova_ID => dispatch => {
  axios
    .post("http://www.mocky.io/v2/5cb7c1bc4c00005c08d3d263", {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
    })
    .then(res => {
      if (res.status == 204) dispatch(deleteCurrentNova(nova_ID));
    })
    .catch(err => {
      console.log("Failed delete tweet");
    });

  return Promise.resolve();
};
export const deleteCurrentNova = novaID => {
  return {
    type: actionTypes.DELETE_NOVA,
    payload: {
      novaID: novaID
    }
  };
};
