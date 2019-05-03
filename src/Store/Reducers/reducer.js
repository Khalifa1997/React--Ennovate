//The main reducer

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loaderReducer from "./loadingReducer";
import editProfileReducer from "./editProfileReducer";
import profileReducer from "./profileReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loader: loaderReducer,
  edit: editProfileReducer,
  notifications: notificationReducer,
  profile: profileReducer
});
