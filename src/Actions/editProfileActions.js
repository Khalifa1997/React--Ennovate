import axios from "../axios-users";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./types";

//Register User

export const editUser = userData => dispatch => {
  console.log(userData);
  axios
    .post(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBUoi3TDU9jfZRE7jVC0QoA08DK8mJC6wo",
      userData
    )
    .then(res => {
      dispatch(setProfileUser(decoded));
    })
    .catch(err => {
      console.log("{hello}", err.response.data.error.message);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data.error.message
      });
    });
};

export const setProfile = () => {
  return dispatch => {
      axios.get( 'https://react-my-burger.firebaseio.com/ingredients.json' )
          .then( response => {
             dispatch(setProfileUser(response.data));
          } )
          .catch( error => {
              
          } );
  };
};
export const setProfileUser  = ( currentUser ) =>   {
  return {
    type: actionTypes.SET_PROFILE,
    profile: currentUser
  };
};

