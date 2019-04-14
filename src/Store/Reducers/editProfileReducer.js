import { EDIT_PROFILE } from "../../Actions/types";
import { isEmpty } from "../../utils/isEmpty";

const initialState = {
  isAuthenticated: true,
  currentUser: { screen_name: "", name: "", bio: "", location: "", image: "" }
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default editProfileReducer;
