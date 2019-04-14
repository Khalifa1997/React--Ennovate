import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage";
import Tweet from "./Components/Tweet/Tweet";
import ProfileCard from "./Components/profileCard/profileCard";

import Signup from "./Containers/Auth/Signup/Signup";
import Profile from "./Containers/Profile/Profile";
import ForgotPassword from "./Containers/Auth/ForgotPassword/ForgotPassowrd";

<<<<<<< HEAD
//import { decode } from "querystring";
=======
>>>>>>> 338e53e90b1d4cbf11e45c7b1165bc4fe7038b66
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
            <Route path="/ProfileCard" component={ProfileCard} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/tweet" component={Tweet} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/FansBox" component={FansBox} />
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;
