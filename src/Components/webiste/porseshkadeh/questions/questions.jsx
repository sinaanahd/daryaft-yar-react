import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanelHeader from "../../panel/header/panel-header";
import { Link } from "react-router-dom";
import make_arr_question from "../../../functions/questions_arr";
import Question from "../Question/question";
import PKSideBar from "../../panel/sidebar/pk-side-bar";
import arrowIcon from "../../../../assets/images/svg/arrow-right.svg";
import filterIcon from "../../../../assets/images/svg/filter-icon.svg";
class QuestionsPage extends Component {
  state = {};
  componentDidMount() {}
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
              {make_arr_question(10).map((i) => (
                <Question key={i} />
              ))}
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
          <PKSideBar />
        </section>
      </>
    );
  }
}
export default withWebsiteData(QuestionsPage);
