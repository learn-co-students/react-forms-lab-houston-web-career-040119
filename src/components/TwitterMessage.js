import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message:"",
      characters:this.props.maxChars
    };
  }

  handleMessageChange=(e)=>{
    this.setState({
      message:e.target.value,
      characters: this.props.maxChars-e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e)=>this.handleMessageChange(e)}/>
        <p>Characters Left:{this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
