import * as actionTypes from "./types";
import axios from "../axios-users";
export const reNova = nova_ID => dispatch => {
  axios
    .post("http://www.mocky.io/v2/5cb7ddd34c00007b0cd3d294", nova_ID, {
      headers: {
        token: axios.defaults.headers.common.Authorization
      }
      //Params Nova ida
    })
    .then(res => {
      const firstUser = response.data.slice(0, 1);
      const secondUser = response.data.slice(1, 2);

      axios
        .all([
          //Auth user Get
          axios.get("http://localhost:8080/users/show", {
            params: {
              user_ID: firstUser.user
            }
          }),
          //Profile user Get
          axios.get("http://localhost:8080/users/show", {
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
          console.log("Failed reNova nova get");
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
      profile: profile,
      authUser: authUser
    }
  };
};
