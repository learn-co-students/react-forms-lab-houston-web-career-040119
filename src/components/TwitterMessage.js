import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message:'',
      counter: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      counter: this.props.maxChars-e.target.value.length
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(e) => this.handleChange(e)}type="text" name="message" id="message" value={this.state.message}/>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
