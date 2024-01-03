import React, { Component } from "react";

class HandleEx extends Component {
  state = {
    msg: "Hello World",
  };
  changeMsg = (msg) => {
    this.setState({ msg });
  };
  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={() => this.changeMsg("GoodBye World!")}>실습1</button>
      </div>
    );
  }
}

export default HandleEx;
