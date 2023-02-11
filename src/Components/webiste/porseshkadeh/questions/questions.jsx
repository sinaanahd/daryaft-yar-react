import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanelHeader from "../../panel/header/panel-header";
import { Link } from "react-router-dom";
import PanelSideBar from "../../panel/sidebar/panel-sidebar";
import arrowIcon from "../../../../assets/images/svg/arrow-right.svg";
import filterIcon from "../../../../assets/images/svg/filter-icon.svg";
class QuestionsPage extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <>
        <PanelHeader user={user} />
        <section className="questions-page-wrapper mm-width">
          <div className="main-content">
            <div className="filters">
              <span className="filter categories">
                <img src={filterIcon} className="icon" />
                <span className="text">دسته بندی‌ها</span>
              </span>
              <span className="filter hotest">داغ‌ترین ها</span>
              <span className="filter latest">آخرین‌ها</span>
            </div>
            <div className="questions-wrapper">
              <div className="question">
                <h2 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h2>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h2 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h2>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h2 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h2>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h2 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h2>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
              <div className="question">
                <h2 className="title">
                  <Link to="#">
                    قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                    محسوب میشن ؟
                  </Link>
                </h2>
                <span className="tags-btns">
                  <span className="answer-btn">پاسخ دادن</span>
                  <span className="tags">
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                    <span className="tag">زیست</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="paginations">
              <span className="next np">
                <img src={arrowIcon} />
              </span>
              <span className="numbers">
                <span className="number active">1</span>
                <span className="number">2</span>
                <span className="dot">...</span>
                <span className="number">25</span>
                <span className="number">26</span>
              </span>
              <span className="previous np">
                <img src={arrowIcon} />
              </span>
            </div>
          </div>
          <PanelSideBar />
        </section>
      </>
    );
  }
}
export default withWebsiteData(QuestionsPage);
