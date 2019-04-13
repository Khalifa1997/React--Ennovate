import { SET_CURRENT_USER } from "../../Actions/types";
import { isEmpty } from "../../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  me: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        me: false
      };
    default:
      return state;
  }
};

export default authReducer;
