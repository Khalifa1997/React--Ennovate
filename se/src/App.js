import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/landingPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Signup from './Containers/Auth/Signup/Signup'
import Login from './Containers/Auth/Login/Login'


/** This is a description of the foo function. */

class App extends Component {

  render() {
    return (
      <div className="App">
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
