import * as actionTypes from "./types";
import axios from "../axios-users";
export const reNova = id => dispatch => {
  const idObj = {
    nova_ID: id
  };
  console.log(idObj);
  axios
    .post("/statuses/reNova", idObj, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
      //Params Nova ida
    })
    .then(res => {
      console.log(res.data);
      dispatch(setCurrentUser(res.data.user, res.data.novauser));
      /* const firstUser = res.data.slice(0, 1);
      const secondUser = res.data.slice(1, 2);
      dispatch(setCurrentUser(firstUser.data, secondUser.data)); */
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
        ]) */
      /* .then(
          axios.spread((AuthRes, ProfileRes) => {
            dispatch(setCurrentUser(AuthRes.data, ProfileRes.data));
          })
        ) */
      /* .catch(err => {
          console.log("Failed reNova nova get");
        });
    }) */
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
