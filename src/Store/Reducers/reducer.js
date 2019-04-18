//The main reducer

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loaderReducer from "./loadingReducer";
import editProfileReducer from "./editProfileReducer";
import profileReducer from "./profileReducer";
import deleteNovaReducer from "./deleteNovaReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loader: loaderReducer,
  edit: editProfileReducer,
  profile: profileReducer
});
