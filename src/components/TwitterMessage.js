import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message:""};
  }

  handleChange = (event) => {
    this.setState(
      {
        message: event.target.value
      }
    );
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        Characters remaining: {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
