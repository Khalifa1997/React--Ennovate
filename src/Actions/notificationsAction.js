import * as actionTypes from "./types";
import axios from "../axios-users";
export const getNotifications = clearNotification => dispatch => {
  let notifications = [];
  if (clearNotification) {
    notifications = [];
  } else {
    notifications = [1, 2, 3, 4];
  }
  dispatch(getNotificationsFromServer(notifications));
};
export const getNotificationsFromServer = notifications => {
  return {
    type: actionTypes.NOTIFICATIONS,
    payload: {
      notifications: notifications
    }
  };
};
