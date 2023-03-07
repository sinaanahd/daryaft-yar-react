import React, { Component } from "react";
import { Link } from "react-router-dom";
let place = true;
class Question extends Component {
  state = {};
  componentDidMount() {
    place = window.location.pathname !== "/my-questions";
  }
  render() {
    return (
      <div className="question-wrapper">
        <h3 className="question-title">
          قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش محسوب میشن
          ؟
        </h3>
        <span className="question-tags-btn-wrapper">
          <span className="answer-is-my-question">
            <Link to="/question/:id" className="question-answer-btn">
              {place ? "پاسخ دادن" : "مشاهده"}
            </Link>
            <span className="also-my-question">برای منم سواله</span>
          </span>
          <span className="tags">
            <span className="tag">زیست</span>
            <span className="tag">زیست</span>
            <span className="tag">زیست</span>
            <span className="tag">زیست</span>
          </span>
        </span>
      </div>
    );
  }
}

export default Question;
