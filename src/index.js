import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./Store/Reducers/reducer";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./Actions/authActions";

import "./index.css";

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
  /*const profile = {
    ID: 1234,
    name: "mirna",
    screen_name: "@mirna",
    created_at: "24/3/2019",
    location: "Egypt",
    bio: "ana mirna",
    followers_count: 100,
    friends_count: 200,
    favourites_count: 20,
    novas_count: 5,
    novas_IDs: [1, 2, 3, 4, 5],
    favourites_novas_IDS: [1, 2, 3, 4, 5],
    profile_image_url: "",
    default_profile_image: true
  };
  const currentUser = {
    ID: profile.ID,
    screen_name: profile.screen_name
  };
  */
  //store.dispatch(setCurrentUser(profile, currentUser));
  store.dispatch(setCurrentUser(decoded));
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
