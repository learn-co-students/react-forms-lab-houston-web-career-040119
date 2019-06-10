import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTweet: ""
    };
  }

  change = (e) => {
    this.setState({
      currentTweet: e.target.value
      
    })
  }

  left = () => {
    return (this.props.maxChars - this.state.currentTweet.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.change} value={this.state.currentTweet}/>
        <p>Characters Left: {this.left()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
