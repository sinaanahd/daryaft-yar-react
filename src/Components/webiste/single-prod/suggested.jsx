import React, { Component } from "react";
import Book from "../../webiste/Shop/main-content/books/book";
class SuggestedBooks extends Component {
  state = {};
  render() {
    const { books, change_active, add_to_recent_visit } = this.props;
    return (
      <div className="suggested-books">
        <h4 className="similar-title">محصولات مشابه</h4>
        <div className="big-wrapper">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              change_active={change_active}
              add_to_recent_visit={add_to_recent_visit}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SuggestedBooks;
