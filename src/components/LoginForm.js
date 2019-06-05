import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = event => {
  event.preventDefault()

  if (!this.state.username || !this.state.password) return

  this.props.handleLogin(this.state)
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.onChange} name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.onChange} name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
