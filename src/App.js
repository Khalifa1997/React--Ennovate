import React, { Component } from "react";
import Login from "./Containers/Auth/Login/Login";
import LandingPage from "./Components/LandingPage/landingPage"
import Signup from "./Containers/Auth/Signup/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        {/* <Signup /> */}

      </div>
    );
  }
}

export default App;
