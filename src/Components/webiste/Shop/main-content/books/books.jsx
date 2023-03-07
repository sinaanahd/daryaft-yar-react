import React, { Component } from "react";
import Book from "./book";
import null_books from "../../../reusable/null_books";
class Books extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const {
      books,
      add_to_cart,
      ids,
      change_active,
      active_page,
      add_to_recent_visit,
    } = this.props;
    return (
      <div className="books-wrapper">
        {books
          ? books
              .slice((active_page - 1) * 40, active_page * 40)
              .map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  add_to_cart={add_to_cart}
                  ids={ids}
                  change_active={change_active}
                  add_to_recent_visit={add_to_recent_visit}
                />
              ))
          : null_books.map((book) => (
              <Book
                key={book.id}
                book={book}
                add_to_cart={add_to_cart}
                ids={ids}
                change_active={change_active}
                add_to_recent_visit={add_to_recent_visit}
              />
            ))}
      </div>
    );
  }
}

export default Books;
