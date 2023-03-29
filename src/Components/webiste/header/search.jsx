import React, { Component } from "react";

import magnifier from "../../../assets/images/website/magnifier-icon.png";
import SearchItem from "./search-item";
class Search extends Component {
  state = {
    active: false,
    searched_books: [],
  };
  handle_search = (text) => {
    const searched_books = [];
    const { books } = this.props;
    if (text.length > 2) {
      books.forEach((book) => {
        if (book.name.includes(text)) {
          searched_books.push(book);
        }
      });
    }
    this.setState({ searched_books });
  };
  handle_blur = () => {
    setTimeout(() => {
      this.setState({ active: false });
    }, 200);
  };
  render() {
    const { books, change_active } = this.props;
    return (
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="جستجو"
          onInput={(e) => {
            this.handle_search(e.target.value);
          }}
          onFocus={() => {
            this.setState({ active: true });
          }}
          onBlur={() => {
            this.handle_blur();
          }}
        />
        <span className="header-search-icon">
          <img src={magnifier} alt="جستجو" />
        </span>
        {this.state.active ? (
          <div className="search-results">
            {this.state.searched_books.length !== 0
              ? this.state.searched_books.map((b) => (
                  <SearchItem
                    change_active={change_active}
                    key={b.id}
                    item={b}
                  />
                ))
              : "موردی یافت نشد"}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Search;
