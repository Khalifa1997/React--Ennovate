import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage";
import Tweet from "./Components/Tweet/Tweet";
import ProfileCard from "./Components/profileCard/profileCard";

import Signup from "./Containers/Auth/Signup/Signup";
import Profile from "./Containers/Profile/Profile";
import ForgotPassword from "./Containers/Auth/ForgotPassword/ForgotPassowrd";
import UserStrip from "./Components/UserStrip/UserStrip";

import { decode } from "querystring";
import EditProfile from "./Containers/Profile/EditProfile/EditProfile";

//check for token

class App extends Component {
  render() {
    return (
      <div>
        <Route>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/ProfileCard" component={ProfileCard} />
            <Route path="/signup" component={Signup} />
            <Route path="/tweet" exact component={Tweet} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/Profile" component={Profile} />
            <Route path="/editprofile" component={EditProfile} />
          </Switch>
        </Route>
        {/* <UserStrip></UserStrip> */}
      </div>
    );
  }
}

export default App;
