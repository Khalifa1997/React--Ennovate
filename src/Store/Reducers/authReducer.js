import { SET_CURRENT_USER } from "../../Actions/types";
import { isEmpty } from "../../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  currentUser: {},
  profile: {},
  me: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload.authUser,
        profile: action.payload.profile
      };
    default:
      return state;
  }
};

export default authReducer;
