import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  login = (e,obj) => {
    e.preventDefault()
    console.log(`Logging in ${obj.username} with password ${obj.password}`);
  };

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={140} />



      </div>
    )
  }
}

export default App
