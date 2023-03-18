import React, { Component } from "react";
import split_in_three from "../../../../functions/spilit_in_three";
class BookDetail extends Component {
  state = {};
  check_quan = (id) => {
    const { ids } = this.props;
    let len;
    if (ids) {
      len = ids.filter((item) => item === id);
    }
    return len.length;
  };
  render() {
    const { book } = this.props;
    return (
      <div className={"book-details" + " " + book.id}>
        <img src={book.img_url} alt={book.name} />
        <span className="quan-name-details">
          <span className="book-name">{book.name}</span>
          <span className="quan-wrapper">
            {this.check_quan(book.id)}
            &nbsp; عدد
          </span>
        </span>
        <span className="price-wrapper">
          <span className="price">{split_in_three(book.price)}</span>
          تومان
        </span>
      </div>
    );
  }
}

export default BookDetail;
