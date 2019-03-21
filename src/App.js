import React, { Component } from 'react';
import LandingPage from './Components/LandingPage/landingPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Signup from './Containers/Auth/Signup/Signup'
import Login from './Containers/Auth/Login/Login'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Login />
      </div>

    );
  }
}

export default App;
