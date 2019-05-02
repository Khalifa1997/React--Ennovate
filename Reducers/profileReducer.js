import { GET_PROFILE_DATA } from "../../Actions/types";

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
    default:
      return state;
  }
};

export default profileReducer;
