import * as actionTypes from "./types";
import axios from "../axios-users";
import { toast } from "react-toastify";
export const reNova = id => dispatch => {
  const idObj = {
    nova_ID: id
  };
  console.log(idObj);
  axios
    .post("/statuses/reNova", idObj, {
      headers: {
        token: localStorage.getItem("jwtToken")
      }
      //Params Nova ida
    })
    .then(res => {
      dispatch(setCurrentUser(res.data.user, res.data.novauser));
      toast.success("New Nova!👍", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    })
    .catch(err => {
      console.log("Failed reNova nova post");
    });

  return Promise.resolve();
};
export const setCurrentUser = (authUser, profile) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: {
      authUser: authUser,
      profile: profile
    }
  };
};
