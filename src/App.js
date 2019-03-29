import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage";
import Signup from "./Containers/Auth/Signup/Signup";
import Profile from "./Containers/Profile/Profile";
import ForgotPassword from "./Containers/Auth/ForgotPassword/ForgotPassowrd";
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
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;
