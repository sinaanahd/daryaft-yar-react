import React, { Component } from "react";
import BookTab from "./book-tab";
import { Link } from "react-router-dom";
import pubLogo from "../../../../assets/images/website/sample-pub-logo.png";
import tick from "../../../../assets/images/svg/tick.svg";
class MainContent extends Component {
  state = {};
  render() {
    const { book } = this.props;
    return (
      <div className="main-content">
        <div className="pub-details">
          <span className="publisher-details">
            <span className="big-title pub-name">نام ناشر :</span>
            <h4 className="result">{book.publisher}</h4>
            <span className="publisher-logo">
              <img src={pubLogo} alt={book.publisher} />
            </span>
          </span>
          <span className="user-rate-wrapper">
            <span className="user-rate-text">امتیاز کاربران :‌</span>
            <span className="user-rate">4.6</span>
          </span>
        </div>
        <div className="book-details">
          <div className="book-detail">
            <span className="big-title details-name">مشخصات :</span>
            <div className="detalis-wrapper">
              <ul className="detail">
                <li className="result">{book.name}</li>
                <li className="result">{book.publisher}</li>
                <li className="result">سری</li>
                <li className="result">مولف</li>
                <li className="result">{book.subject}</li>
              </ul>
            </div>
          </div>
          <div className="book-in-one-look-wrapper">
            <div className="book-in-one-look">
              <span className="title">کتاب در یک نگاه</span>
              <ul className="book-iols">
                <li>
                  <img src={tick} />
                  <span className="iol-text">لورم ایپسوم متن</span>
                </li>
                <li>
                  <img src={tick} />
                  <span className="iol-text">لورم ایپسوم متن</span>
                </li>
                <li>
                  <img src={tick} />
                  <span className="iol-text">لورم ایپسوم متن</span>
                </li>
                <li>
                  <img src={tick} />
                  <span className="iol-text">لورم ایپسوم متن</span>
                </li>
              </ul>
            </div>
            <Link className="download-part" to={"#"}>
              دانلود بخشی از کتاب
            </Link>
          </div>
        </div>
        <BookTab book={book} />
      </div>
    );
  }
}

export default MainContent;
