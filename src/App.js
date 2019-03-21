import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage";
import Signup from "./Containers/Auth/Signup/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Route>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;
