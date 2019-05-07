import { EDIT_PROFILE } from "../../Actions/types";
import { SET_PROFILE_IMAGE } from "../../Actions/types";

const initialState = {
  profile: {},
  currentUser: {},
  image: ""
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
        currentUser: action.payload.currentUser
      };
    case SET_PROFILE_IMAGE:
      return {
        ...state,
        profile: action.payload.image,
        currentUser: action.payload.currentUser
      };

    default:
      return state;
  }
};

export default editProfileReducer;
