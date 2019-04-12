import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage";
import Tweet from "./Components/Tweet/Tweet";
import profileCard from "./Components/profileCard/profileCard";
import Signup from "./Containers/Auth/Signup/Signup";
import Profile from "./Containers/Profile/Profile";
import ForgotPassword from "./Containers/Auth/ForgotPassword/ForgotPassowrd";
import UserStrip from "./Components/UserStrip/UserStrip"

import { decode } from "querystring";

//check for token

class App extends Component {
  render() {
    return (
      <div>
        <Route>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/wt" component={Tweet} />
            <Route path="/wx" component={profileCard} />
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </Route>
        {/* <UserStrip></UserStrip> */}
      </div>
    );
  }
}

export default App;
