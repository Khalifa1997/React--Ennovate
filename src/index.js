import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./Store/Reducers/reducer";

import { refresh } from "./Actions/refreshAction";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import axios from "./axios-users";
import { setCurrentUser } from "./Actions/authActions";

import "./index.css";

import Profile from "./Containers/Profile/Profile";

//middlerWare
const middleWare = [thunk];
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  const id = decoded._id;
  // const currentUser = store.getState().auth.currentUser;
  // const currentProfile = store.getState().auth.profile;
  //store.dispatch(setCurrentUser(profile, currentUser));
  //store.dispatch(setCurrentUser(currentProfile, currentUser));
  console.log(id);
  axios
    .get("http://localhost:8080/users/show", {
      params: {
        user_ID: id
      }
    })
    .then(res => {
      console.log("MEN EL refresh RESPONSE ", res);
      store.dispatch(setCurrentUser(res.data.user, res.data.user));
    });
}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
