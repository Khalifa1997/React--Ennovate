import { DELETE_NOVA } from "../../Actions/types";

const initialState = {
  isAuthenticated: true,
  profile: {},
  currentUser: {}
};

const deleteNovaReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NOVA:
      const newState = {
        ...state
      };
      delete newState.currentUser.novas_IDs[action.payload];
      return newState;
    default:
      return state;
  }
};

export default deleteNovaReducer;
