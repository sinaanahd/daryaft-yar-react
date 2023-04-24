import React, { Component } from "react";
import calculate_discount from "../../../../functions/calculate_discount";
import split_in_three from "../../../../functions/spilit_in_three";
import { Link } from "react-router-dom";
import scrollToTop from "../../../../functions/scroll";
import find_year from "../../../../functions/find-year";
import find_subject from "../../../../functions/find-subject";
import cartWhite from "../../../../../assets/images/website/cart-icon-white.png";
import save_svg from "../../../../../assets/images/svg/save-svg.svg";
import like_svg from "../../../../../assets/images/svg/like-svg.svg";
class Book extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const {
      book,
      change_active,
      add_to_cart,
      ids,
      add_to_recent_visit,
      is_null,
    } = this.props;
    return (
      <div className="book-hover-needed-class">
        <div
          className={!is_null ? "book " + "book-" + book.id : "book book-null"}>
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
                    book.price === book.discounted_price
                      ? "normal"
                      : "normal dis"
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
          <Link
            aria-label={book.name || "متن خالی"}
            to={`/single-id/${book.id}`}
            className="hover-data-wrapper"
            onClick={() => {
              change_active(book);
              add_to_recent_visit(book, "shop");
              scrollToTop();
            }}>
            <span className="hover-data">
              <span className="h-data-title">مناسب برای پایه :</span>
              <span className="h-data-">
                {book.book_year.map((b) => (
                  <React.Fragment key={b}>
                    {find_year(b) + " / "}
                  </React.Fragment>
                ))}
              </span>
            </span>
            <span className="hover-data">
              <span className="h-data-title">مناسب برای رشته های :</span>
              <span className="h-data-">
                {book.subject.map((b) => (
                  <React.Fragment key={b}>
                    {find_subject(b) + " / "}
                  </React.Fragment>
                ))}
              </span>
            </span>
            <span className="hover-data">
              <span className="h-data-title">مولف :</span>
              <span className="h-data-">
                {book.author.map((b) => (
                  <React.Fragment key={b}>{b + " / "}</React.Fragment>
                ))}
              </span>
            </span>
            <span className="hover-data">
              <span className="h-data-title">انتشارات :</span>
              <span className="h-data-">{book.publisher}</span>
            </span>
            <span className="hover-data">
              <span className="h-data-title">درس :</span>
              <span className="h-data-">
                {book.course !== null ? book.course : "وارد نشده"}
              </span>
            </span>
            <span className="hover-data">
              <span className="h-data-title">تعداد صفحات :</span>
              <span className="h-data-">{book.page_count}</span>
            </span>
            <div className="hover-btn-wrapper">
              <span className="hover-img-wrapper">
                <img
                  src={save_svg}
                  alt="ذخیره کردن"
                  width={20}
                  height={20}
                  className="hover-save"
                />
              </span>
              <span className="hover-img-wrapper">
                <img
                  src={like_svg}
                  alt="افزودن به علاقه مندی"
                  width={20}
                  height={20}
                  className="hover-like"
                />
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Book;
