import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:null,
      password:null
    };
  }
  
  handleUser=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  
  handleSubmit=(e)=>{
    e.preventDefault()
    
    if(this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }else{
      console.log("nope")
    }
    
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(e)=>this.handleUser(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(e)=>this.handleUser(e)} />
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
