import React, { Component } from "react";
import SingleCartDetails from "./add-to-cart";
class RightCol extends Component {
  state = {};
  render() {
    const { book, handle_quan, cart } = this.props;
    return (
      <>
        <link rel="preload" href={book.image_link} as="image" />
        <div className="right-col">
          <div className="img-wrapper">
            <img
              width={280}
              height={380}
              src={book.image_link}
              alt={book.name}
              className="book-img-light-house"
            />
          </div>
          <SingleCartDetails
            book={book}
            handle_quan={handle_quan}
            cart={cart}
          />
        </div>
      </>
    );
  }
}

export default RightCol;
