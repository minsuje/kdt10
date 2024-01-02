import React, { Book } from "react";
import "./Books.css";

class Books extends Book {
  render() {
    const { title, author, price, type } = this.props;
    return (
      <div className="bookCover">
        <h1 className="bookName">이번주 베스트 셀러</h1>
        <img
          src="https://image.yes24.com/images/chyes24/froala/0/46497/48163.jpg"
          alt=""
        />
        <h2>
          <b>{title}</b>
        </h2>
        ,
        <p>
          <b>{author}</b>
        </p>
        <br />,
        <p>
          <b>{price}</b>
        </p>
        <br />,
        <p>
          <b>{type}</b>
        </p>
      </div>
    );
  }
}

export default Books;
