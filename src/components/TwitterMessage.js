import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength ={this.props.maxChars} onChange={(e) => this.handleChange(e)} value={this.state.message}/>
        <p>Charachters Remaining: {this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
