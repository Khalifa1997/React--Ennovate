import { EDIT_PROFILE } from "../../Actions/types";
import { SET_PROFILE } from "../../Actions/types";
import { SET_PROFILE_IMAGE } from "../../Actions/types";

const initialState = {
  isAuthenticated: true,
  profile: {},
  currentUser: {},
  image: ""
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload.profile
      };
    case SET_PROFILE_IMAGE:
      return {
        ...state,
        profile: action.payload.image
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile
      };
    default:
      return state;
  }
};

export default editProfileReducer;
