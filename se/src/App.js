import React, { Component } from "react";
import Login from "./Containers/Auth/Login/Login";
import Signup from "./Containers/Auth/Signup/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login />
        {/* <Signup /> */}
        
      </div>
    );
  }
}

export default App;
