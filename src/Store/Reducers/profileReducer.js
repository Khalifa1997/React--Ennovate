import { GET_PROFILE_DATA, DELETE_NOVA } from "../../Actions/types";

const initialState = {
<<<<<<< HEAD
  user: {},
  following: null
=======
  isAuthenticated: true,
  profile: {},
  currentUser: {},
  me: true
>>>>>>> 6b44fa4a0dbb7ee4ff2c756a4ee674d5cd6d0d69
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return {
        ...state,
        user: action.payload.user,
        following: action.payload.following
      };
    case DELETE_NOVA:
      console.log("X");

      return {
        ...state,
        currentUser: action.payload.profile
      };
    default:
      return state;
  }
};

export default profileReducer;
