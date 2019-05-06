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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Profile from "./Containers/Profile/Profile";

//middlerWare
const middleWare = [thunk];
const customMiddleWare = store => next => action => {
  let action2 = action.type;
  console.log(action2);
  let oldState = store.getState();
  next(action);
  let nextState = store.getState();

  if (
    action2 == "SET_CURRENT_USER" &&
    Object.entries(oldState.auth.currentUser).length > 0 &&
    oldState.auth.currentUser.novas_count <
      nextState.auth.currentUser.novas_count
  ) {
    toast.success("New Tweet!👍", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }
  if (
    action2 == "SET_CURRENT_USER" &&
    Object.entries(oldState.auth.currentUser).length > 0 &&
    oldState.auth.currentUser.followers_count <
      nextState.auth.currentUser.followers_count
  ) {
    toast.info("You have been followed!🎉", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }
  if (
    action2 == "SET_CURRENT_USER" &&
    Object.entries(oldState.auth.currentUser).length > 0 &&
    oldState.auth.currentUser.favorites_count <
      nextState.auth.currentUser.favorites_count
  ) {
    toast.info("One of your Novas was liked!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }
  if (action2 == "DELETE_NOVA") {
    toast.error("Nova Deleted!🔥", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }
};
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
