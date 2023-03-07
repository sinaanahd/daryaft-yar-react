import React, { Component } from "react";
import Book from "../../../Shop/main-content/books/book";
import Question from "../../../porseshkadeh/Question/question";
import make_arr_question from "../../../../functions/questions_arr";
import { Link } from "react-router-dom";
class RecentVisit extends Component {
  state = {};
  render() {
    const {
      books,
      change_active,
      add_to_cart,
      ids,
      recenet_place,
      recenet_visit_arr,
      add_to_recent_visit,
    } = this.props;
    return (
      <div className="recent-visits">
        <h2 className="title">بازدید‌های اخیر شما</h2>
        <div className="books-wrapper questions-wrapper">
          {recenet_visit_arr.length !== 0 ? (
            recenet_place === "shop" ? (
              recenet_visit_arr.map((book) => (
                <Book
                  change_active={change_active}
                  book={book}
                  add_to_cart={add_to_cart}
                  ids={ids}
                  key={book.id}
                  add_to_recent_visit={add_to_recent_visit}
                />
              ))
            ) : (
              <>
                {make_arr_question(20).map((i) => (
                  <Question key={i} />
                ))}
              </>
            )
          ) : (
            <div className="empty-last-visits">
              <p>
                شما از هیچ <b>محصولی/سوالی</b> بازدید نداشته اید از طریق لینک
                های زیر به فروشگاه یا پرسشکده بروید
              </p>
              <span className="go-to-other-places">
                <Link to="/shop">فروشگاه</Link>
                <Link to="/shop">پرسشکده</Link>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RecentVisit;
