import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage";
import Tweet from "./Components/Tweet/Tweet";
import ProfileCard from "./Components/profileCard/profileCard";
import novaModal from "./Components/novaModal/novaModal";
import Signup from "./Containers/Auth/Signup/Signup";
import Profile from "./Containers/Profile/Profile";
import Newsfeed from "./Containers/Newsfeed/Newsfeed";
import Search from "./Containers/Search/Search";
import ForgotPassword from "./Containers/Auth/ForgotPassword/ForgotPassowrd";
import ResetPassword from "./Containers/Auth/ForgotPassword/ResetPassword";
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
            <Route
              exact
              path="/reset_password/:token"
              component={ResetPassword}
            />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search/:value" component={Search} />
            <Route exact path="/newsfeed" component={Newsfeed} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/FansBox" component={FansBox} />
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;
