import React, { Component } from "react";
import SingleCartDetails from "./add-to-cart";
class RightCol extends Component {
  state = {};
  render() {
    const { book, handle_quan, cart } = this.props;
    return (
      <div className="right-col">
        <div className="img-wrapper">
          <img src={book.image_link} alt={book.name} />
        </div>
        <SingleCartDetails book={book} handle_quan={handle_quan} cart={cart} />
      </div>
    );
  }
}

export default RightCol;
