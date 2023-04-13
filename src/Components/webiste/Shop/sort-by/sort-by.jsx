import React, { Component } from "react";
class SortBy extends Component {
  state = {
    active: "normal",
  };
  handle_sort = (type) => {
    this.setState({ active: type });
    switch (type) {
      case "normal":
        this.props.active_sort_item("normal", "normal");
        break;
      case "least":
        this.props.active_sort_item("least", "price");
        break;
      case "most":
        this.props.active_sort_item("most", "-price");
        break;
      case "loved":
        this.props.active_sort_item("loved", "-buys_count");
        break;
    }
  };

  render() {
    return (
      <div className="sort-by-btn-wrapper">
        <span className="sort-by-item title">مرتب سازی براساس:</span>
        <span
          className={
            this.state.active === "normal"
              ? "sort-by-item active"
              : "sort-by-item"
          }
          onClick={() => {
            this.handle_sort("normal");
          }}>
          پیش‌فرض
        </span>
        <span
          className={
            this.state.active === "most"
              ? "sort-by-item active"
              : "sort-by-item"
          }
          onClick={() => {
            this.handle_sort("most");
          }}>
          بیشترین‌قیمت
        </span>
        <span
          className={
            this.state.active === "least"
              ? "sort-by-item active"
              : "sort-by-item"
          }
          onClick={() => {
            this.handle_sort("least");
          }}>
          کمترین‌قیمت
        </span>
        <span
          className={
            this.state.active === "loved"
              ? "sort-by-item active"
              : "sort-by-item"
          }
          onClick={() => {
            this.handle_sort("loved");
          }}>
          محبوب‌ترین
        </span>
      </div>
    );
  }
}

export default SortBy;
