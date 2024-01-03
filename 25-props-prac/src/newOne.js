import React, { Component } from "react";
import PropTypes from "prop-types";

class NewOne extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메시지</button>
      </div>
    );
  }
}

NewOne.defaultProps = {
  text: "디폴트 texet props 입니다.",
};

NewOne.propTypes = {
  text: PropTypes.string,
};

export default NewOne;
