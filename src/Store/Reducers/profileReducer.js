import { GET_PROFILE_DATA, DELETE_NOVA } from "../../Actions/types";

const initialState = {
  isAuthenticated: true,
  profile: {},
  currentUser: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return {
        ...state,
        profile: action.payload.profile
      };
    case DELETE_NOVA:
      console.log("X");
      return {
        ...state,
        profile: action.payload.profile,
        currentUser: action.payload.profile
      };

    default:
      return state;
  }
};

export default profileReducer;
