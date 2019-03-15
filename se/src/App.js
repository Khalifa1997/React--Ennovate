import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)


class App extends Component {

  render() {
    return (
      <LandingPage />
    );
  }
}

export default App;
