import { GET_PROFILE_DATA, DELETE_NOVA } from "../../Actions/types";

const initialState = {
  user: {},
  following: null
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
