import { NOTIFICATIONS } from "../../Actions/types";

const initialState = {
  notifications: []
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload.notifications
      };
    default:
      return state;
  }
};

export default notificationReducer;
