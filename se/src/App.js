import React, { Component } from 'react';
import LandingPage from './components/LandingPage/landingPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Signup from './Containers/Auth/Signup/Signup'


library.add(faIgloo)


class App extends Component {

  render() {
    return (
      <div className="App">
        <Signup />
      </div>

    );
  }
}

export default App;
