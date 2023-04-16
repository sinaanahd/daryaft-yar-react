import React, { Component } from "react";
import scrollToTop from "../../../../functions/scroll";
import forwardIcon from "../../../../../assets/images/website/arrow-forward-icon.png";
import backIcon from "../../../../../assets/images/website/arrow-back-icon.png";
class Pagination extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { len, active_page, change_active_page } = this.props;
    const needed_len = Math.ceil(len / 40);
    let len_arr = [];
    for (let i = 1; i <= needed_len; i++) {
      len_arr.push(i);
    }
    if (len_arr.length >= 5) {
      let i = len_arr.indexOf(active_page);
      if (
        i !== 0 &&
        i !== 1 &&
        i !== len_arr.length - 1 &&
        i !== len_arr.length - 2
      ) {
        len_arr = [
          len_arr[0],
          len_arr[i - 1],
          len_arr[i],
          len_arr[i + 1],
          len_arr[len_arr.length - 1],
        ];
      } else if (i === 0) {
        len_arr = [
          len_arr[0],
          len_arr[1],
          len_arr[2],
          len_arr[3],
          len_arr[len_arr.length - 1],
        ];
      } else if (i === 1) {
        len_arr = [
          len_arr[0],
          len_arr[1],
          len_arr[2],
          len_arr[3],
          len_arr[len_arr.length - 1],
        ];
      } else if (i === len_arr.length - 1) {
        len_arr = [
          len_arr[0],
          len_arr[i - 3],
          len_arr[i - 2],
          len_arr[i - 1],
          len_arr[i],
        ];
      } else if (i === len_arr.length - 2) {
        len_arr = [
          len_arr[0],
          len_arr[len_arr.length - 4],
          len_arr[len_arr.length - 3],
          len_arr[len_arr.length - 2],
          len_arr[len_arr.length - 1],
        ];
      }
    }
    let l = len_arr.length;
    if (len_arr[0] + 1 !== len_arr[1]) {
      len_arr.splice(1, 0, "...");
      l = len_arr.length;
    }
    if (len_arr[l - 2] + 1 !== len_arr[l - 1]) {
      len_arr.splice(l - 1, 0, "...");
    }
    return (
      <div className="pagination">
        <div
          className="next-page move-btn"
          onClick={() => {
            if (needed_len !== active_page) {
              change_active_page(active_page + 1);
              scrollToTop();
            }
          }}>
          <img src={forwardIcon} alt="صفحه بعد" width={24} height={20} />
          <span className="text">صفحه بعد</span>
        </div>
        <div className="pages-wrapper">
          {len_arr.length !== 0 ? (
            len_arr.map((i) =>
              typeof i === "number" ? (
                <span
                  key={i}
                  className={
                    i === active_page ? "page-number active" : "page-number"
                  }
                  onClick={() => {
                    change_active_page(i);
                    scrollToTop();
                  }}>
                  {i}
                </span>
              ) : (
                <span key={Math.random()}>{i}</span>
              )
            )
          ) : (
            <></>
          )}
        </div>
        <div
          className="prev-page move-btn"
          onClick={() => {
            if (active_page !== 1) {
              change_active_page(active_page - 1);
              scrollToTop();
            }
          }}>
          <span className="text">صفحه قبل</span>
          <img src={backIcon} alt="صفحه قبل" width={24} height={20} />
        </div>
      </div>
    );
  }
}

export default Pagination;
