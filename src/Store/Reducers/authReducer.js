import { SET_CURRENT_USER, DELETE_NOVA } from "../../Actions/types";
import { isEmpty } from "../../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  currentUser: {},
  profile: {},
  me: true,
  isedited: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload.authUser,
        profile: action.payload.profile,
        isedited: true
      };
    case DELETE_NOVA:
      return {
        ...state,
        currentUser: action.payload.auth
      };
    default:
      return state;
  }
};

export default authReducer;
