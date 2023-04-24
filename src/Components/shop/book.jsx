import React, { Component } from "react";
import plus_icon from "../../assets/images/plus-white.png";
import split_in_three from "../functions/spilit_in_three";
import calculate_discount from "../functions/calculate_discount";
import find_year from "../functions/find-year";
class Book extends Component {
  state = {};
  render() {
    const { data: book, cart, open_single_book, cart_handler } = this.props;
    return (
      <div
        className={
          cart
            ? cart.cart_items_ids.includes(book.id)
              ? "book quan-0"
              : "book"
            : "book"
        }>
        <div className="img-wrapper">
          <img
            src={book.img_url}
            loading="lazy"
            alt={book.name}
            onClick={() => open_single_book(book)}
          />
        </div>
        <div className="title" onClick={() => open_single_book(book)}>
          {book.name}
        </div>
        <div className="publisher">{book.publisher}</div>
        <div
          className={
            book.discounted_price === book.price
              ? "prices-wrapper"
              : "prices-wrapper has-discount"
          }>
          <span className="price">
            {split_in_three(book.price)}
            تومان
          </span>
          <span className="discounted">
            {split_in_three(book.discounted_price)}
            تومان
          </span>
        </div>
        <div
          className="btns-wrapper"
          onClick={() => {
            cart_handler(book);
          }}>
          <img src={plus_icon} alt="plus-icon" />
        </div>
        <span
          className={
            book.discounted_price === book.price
              ? "discount-label dis-none"
              : "discount-label"
          }>
          {book.price
            ? calculate_discount(book.price, book.discounted_price)
            : 0}
          %
        </span>
      </div>
    );
  }
}

export default Book;
