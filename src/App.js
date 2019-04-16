import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage";
import Tweet from "./Components/Tweet/Tweet";
import ProfileCard from "./Components/profileCard/profileCard";

import Signup from "./Containers/Auth/Signup/Signup";
import Profile from "./Containers/Profile/Profile";
import ForgotPassword from "./Containers/Auth/ForgotPassword/ForgotPassowrd";

//import { decode } from "querystring";
import EditProfile from "./Containers/Profile/EditProfile/EditProfile";
import FansBox from "./Components/FansBox/Box";
import PrivateRoute from "./Components/common/PrivateRoute/PrivateRoute";
import { decode } from "querystring";

//check for token

class App extends Component {
  render() {
    return (
      <div>
        <Route>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={LandingPage} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/FansBox" component={FansBox} />
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;
