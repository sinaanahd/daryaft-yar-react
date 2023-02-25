import React, { Component } from "react";
import Book from "../../../Shop/main-content/books/book";
import { Link } from "react-router-dom";
class RecentVisit extends Component {
  state = {};
  render() {
    const { books, change_active, add_to_cart, ids, active_recent } =
      this.props;
    const books_arr = books.slice(0, 15);
    return (
      <div className="recent-visits">
        <h2 className="title">بازدید‌های اخیر شما</h2>
        <div className="books-wrapper questions-wrapper">
          {active_recent === "shop" ? (
            books_arr.map((book) => (
              <Book
                change_active={change_active}
                book={book}
                add_to_cart={add_to_cart}
                ids={ids}
                key={book.id}
              />
            ))
          ) : (
            <>
              <div className="question">
                <h4 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h4>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h4 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h4>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h4 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h4>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h4 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h4>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h4 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h4>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h4 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h4>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h4 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h4>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default RecentVisit;
