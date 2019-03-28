import { GET_ERRORS } from "../../Actions/types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
};

export default authReducer;
