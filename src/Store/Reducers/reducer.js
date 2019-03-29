//The main reducer 

import { combineReducers } from "redux";
import authReducer from './authReducer'
import errorReducer from "./errorReducer"
import loaderReducer from "./loadingReducer"

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    loader: loaderReducer
});