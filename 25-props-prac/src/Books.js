import React, { Component } from "react";
import "./App.css";

class Books extends Component {
  render() {
    const { title, author, price, type } = this.props;
    return (
      <div className="bookCover">
        <h1 className="bookName">이번주 베스트 셀러</h1>
        <img
          style={{ width: "140px", height: "200px" }}
          src="https://image.yes24.com/goods/93513663/XL"
        />
        <h1>
          <div>{title}</div>
        </h1>
        <div className="text">저자 : {author}</div>
        <div className="text">가격 : {price}</div>
        <div className="text">장르 : {type}</div>
      </div>
    );
  }
}

export default Books;
