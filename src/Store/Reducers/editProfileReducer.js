import { EDIT_PROFILE } from "../../Actions/types";


const initialState = {
  isAuthenticated: true,
  currentUser: { }
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
