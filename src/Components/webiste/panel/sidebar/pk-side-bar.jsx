import React, { Component } from "react";
import { Link } from "react-router-dom";
import pkHome from "../../../../assets/images/svg/pk-home.svg";
import pkAllQuestions from "../../../../assets/images/svg/pk-all-questions.svg";
import pkMyQuestions from "../../../../assets/images/svg/pk-my-questions.svg";
import pkAskQuestion from "../../../../assets/images/svg/pk-ask-question.svg";
import open from "../../../../assets/images/website/arrow-down-icon.png";
import backArrow from "../../../../assets/images/svg/back-arrow.svg";
class PKSideBar extends Component {
  state = {
    open: false,
  };
  open_side_bar = () => {
    const open = this.state.open;
    this.setState({ open: !open });
  };
  render() {
    let loc = window.location.pathname + "";
    loc = loc.replace("/", "");
    return (
      <div
        className={
          this.state.open
            ? "panel-sidebar pk-sideBar panel-opened"
            : "panel-sidebar pk-sideBar"
        }>
        <span
          className="open-closer"
          onClick={() => {
            this.open_side_bar();
          }}>
          <img src={open} className={!this.state.open ? "open" : "close"} />
        </span>
        <ul>
          <li>
            <Link to="/porseshkadeh">
              <img src={pkHome} alt="پرسشکده" />
              <span className="description">خانه</span>
            </Link>
          </li>
          <li>
            <Link to="/questions">
              <img src={pkAllQuestions} alt="همه سوالات" />
              <span className="description">همه سوال‌ها</span>
            </Link>
          </li>

          <li>
            <Link to="/my-questions">
              <img src={pkMyQuestions} alt="سوال های من" />
              <span className="description">سوال‌های من</span>
            </Link>
          </li>
          <li>
            <Link to="/ask-question">
              <img src={pkAskQuestion} alt="پرسیدن سوال" />
              <span className="description">پرسیدن سوال</span>
            </Link>
          </li>
        </ul>
        <span className={loc + "-loc" + " active-item"}></span>
        <span className="return-to-panel">
          <Link to="/porseshkadeh">
            <img src={backArrow} alt="بازگشت به پنل" />
          </Link>
        </span>
      </div>
    );
  }
}

export default PKSideBar;
