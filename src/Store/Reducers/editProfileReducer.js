import { EDIT_PROFILE } from "../../Actions/types";
import { SET_PROFILE } from "../../Actions/types";
import { SET_PROFILE_IMAGE } from "../../Actions/types";

const initialState = {
  isAuthenticated: true,
  profile: {},
  currentUser: {},
  image: "",
  isedited: false
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
        isedited: true
      };
    case SET_PROFILE_IMAGE:
      return {
        ...state,
        profile: action.payload.image,
        isedited: true
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
        isedited: true
      };
    default:
      return state;
  }
};

export default editProfileReducer;
