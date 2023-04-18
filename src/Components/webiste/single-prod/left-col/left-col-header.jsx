import React, { Component } from "react";
import heartIcon from "../../../../assets/images/website/heart-icon.png";
import markIcon from "../../../../assets/images/website/mark-icon.png";
class LeftColHeader extends Component {
  state = {
    extra: "لورم ایپسوم متنی ساختگی است",
  };
  render() {
    const { book } = this.props;
    return (
      <div className="single-book-header">
        <span className="titles">
          <h1 className="book-title">{book.name}</h1>
          {/* <h2 className="book-secondary-title">{this.state.extra}</h2> */}
        </span>
        <span className="btns">
          <span className="like">
            <img
              width={20}
              height={20}
              src={heartIcon}
              alt="افزودن به علاقه مندی ها"
            />
          </span>
          <span className="mark">
            <img width={20} height={20} src={markIcon} alt="نشان کردن" />
          </span>
        </span>
      </div>
    );
  }
}

export default LeftColHeader;
