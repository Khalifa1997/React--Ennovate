import * as actionTypes from "./types";
import axios from "../axios-users";
import { toast } from "react-toastify";
export const likeNova = (nova_ID, isLiked) => dispatch => {
  const obj = {
    nova_ID: nova_ID
  };
  console.log(obj);
  if (!isLiked) {
    axios
      .post("http://localhost:8080/favorites/create", obj, {
        headers: {
          token: axios.defaults.headers.common.Authorization
        }
      })
      .then(res => {
        /* 
      const firstUser = res.data.slice(0, 1);
      const secondUser = res.data.slice(1, 2); */
        console.log(res);
        dispatch(setCurrentUser(res.data.actionUser, res.data.novaUser));
        toast.info("Nova Liked!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        /* axios
        .all([
          //Auth user Get
          axios.get("/users/show", {
            params: {
              user_ID: firstUser.user
            }
          }),
          //Profile user Get
          axios.get("/users/show", {
            params: {
              user_ID: secondUser.user
            }
          })
        ])
        .then(
          axios.spread((AuthRes, ProfileRes) => {
            dispatch(setCurrentUser(AuthRes.data, ProfileRes.data));
          })
        )
        .catch(err => {
          console.log("Failed Like nova get");
        }); */
      })
      .catch(err => {
        console.log("Failed Like nova post");
      });
  } else {
    axios
      .post("http://localhost:8080/favorites/destroy", obj, {
        headers: {
          token: axios.defaults.headers.common.Authorization
        }
      })
      .then(res => {
        /* 
      const firstUser = res.data.slice(0, 1);
      const secondUser = res.data.slice(1, 2); */
        console.log(res);
        dispatch(setCurrentUser(res.data.actionUser, res.data.novaUser));
        toast.error("Nova Unliked!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        /* axios
        .all([
          //Auth user Get
          axios.get("/users/show", {
            params: {
              user_ID: firstUser.user
            }
          }),
          //Profile user Get
          axios.get("/users/show", {
            params: {
              user_ID: secondUser.user
            }
          })
        ])
        .then(
          axios.spread((AuthRes, ProfileRes) => {
            dispatch(setCurrentUser(AuthRes.data, ProfileRes.data));
          })
        )
        .catch(err => {
          console.log("Failed Like nova get");
        }); */
      })
      .catch(err => {
        console.log("Failed Like nova post");
      });
  }
  return Promise.resolve();
};
export const setCurrentUser = (authUser, profile) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: {
      profile: profile,
      authUser: authUser
    }
  };
};
