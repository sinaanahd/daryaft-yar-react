import React, { Component } from "react";
import SortBy from "../sort-by/sort-by";
import Filters from "../main-content/side-bar/filters/filters";
import filterImg from "../../../../assets/images/website/res-filter.png";
import orgImg from "../../../../assets/images/website/res-org.png";
class ResponsiveFilters extends Component {
  state = {
    active_pop_up: false,
  };
  handle_active_pop_up = (type) => {
    if (type === "o") {
      this.setState({ active_pop_up: "o" });
    } else {
      this.setState({ active_pop_up: "f" });
    }
  };
  disable_pop_up = () => {
    this.setState({ active_pop_up: false });
  };
  render() {
    const {
      active_sort_item,
      original_books,
      handle_needed_book,
      change_active_page,
    } = this.props;
    return (
      <div className="responsive-filters">
        <div className="labels">
          <span
            className="res-item"
            onClick={() => {
              this.handle_active_pop_up("o");
            }}>
            <img src={orgImg} alt="" />
            مرتب سازی
          </span>
          <span
            className="res-item"
            onClick={() => {
              this.handle_active_pop_up("f");
            }}>
            <img src={filterImg} alt="" />
            فیلتر
          </span>
        </div>
        <div
          className={
            this.state.active_pop_up ? "pop-stage active" : "pop-stage"
          }>
          {this.state.active_pop_up ? (
            this.state.active_pop_up === "o" ? (
              <SortBy active_sort_item={active_sort_item} />
            ) : this.state.active_pop_up === "f" ? (
              <Filters
                original_books={original_books}
                handle_needed_book={handle_needed_book}
                change_active_page={change_active_page}
              />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
        <div
          onClick={() => {
            this.disable_pop_up();
          }}
          className={
            this.state.active_pop_up ? "shadow active" : "shadow"
          }></div>
      </div>
    );
  }
}

export default ResponsiveFilters;
