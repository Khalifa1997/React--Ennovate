import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage";
import Tweet from "./Components/Tweet/Tweet";
import ProfileCard from "./Components/profileCard/profileCard";

import Signup from "./Containers/Auth/Signup/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Route>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/Profile" component={ProfileCard} />
            <Route path="/signup" component={Signup} />
            <Route path="/tweet" exact component={Tweet} />
            <Route path="/" exact component={LandingPage} />

          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;
