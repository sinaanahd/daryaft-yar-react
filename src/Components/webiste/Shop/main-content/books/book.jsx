import React, { Component } from "react";
import calculate_discount from "../../../../functions/calculate_discount";
import cartWhite from "../../../../../assets/images/website/cart-icon-white.png";
import split_in_three from "../../../../functions/spilit_in_three";
import { Link } from "react-router-dom";
import scrollToTop from "../../../../functions/scroll";
class Book extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { book, change_active, add_to_cart, ids, add_to_recent_visit } =
      this.props;
    return (
      <div className={"book " + "book-" + book.id}>
        {ids ? (
          !ids.includes(book.id) ? (
            <span className="add-to-cart">
              <img
                width={11}
                height={11}
                src={cartWhite}
                loading="lazy"
                onClick={() => {
                  add_to_cart(book.id);
                }}
                alt="اضافه کردن به سبد خرید"
              />
            </span>
          ) : (
            <></>
          )
        ) : (
          <span className="add-to-cart">
            <img
              width={11}
              height={11}
              src={cartWhite}
              loading="lazy"
              onClick={() => {
                add_to_cart(book.id);
              }}
              alt="اضافه کردن به سبد خرید"
            />
          </span>
        )}
        <span className="img-wrapper">
          <Link
            aria-label={book.name || "متن خالی"}
            to={`/single-id/${book.id}`}
            onClick={() => {
              change_active(book);
              //alert();
              add_to_recent_visit(book, "shop");
              scrollToTop();
            }}>
            <img
              width={150}
              height={211}
              src={book.image_link}
              alt={book.name}
              loading="lazy"
            />
          </Link>
        </span>
        <h3 className="book-title">
          <Link
            aria-label={book.name || "متن خالی"}
            to={`/single-id/${book.id}`}
            onClick={() => {
              change_active(book);
              add_to_recent_visit(book, "shop");
              scrollToTop();
            }}>
            {book.name}
          </Link>
        </h3>
        <span className="price-discount">
          <span className="price-currency">
            <span className="prices">
              {/* {!book.discounted_price ? ( */}
              {book.price === book.discounted_price ? (
                <></>
              ) : (
                <span className="discounted">
                  {split_in_three(book.discounted_price)}
                </span>
              )}
              <span
                // className={!book.discounted_price ? "normal" : "normal dis"}>
                className={
                  book.price === book.discounted_price ? "normal" : "normal dis"
                }>
                {split_in_three(book.price)}
              </span>
            </span>
            <span className="curency">تومان</span>
          </span>
          {book.discounted_price ? (
            <span className="discount-precent">
              {calculate_discount(book.price, book.discounted_price)}%
            </span>
          ) : (
            <></>
          )}
        </span>
      </div>
    );
  }
}

export default Book;
