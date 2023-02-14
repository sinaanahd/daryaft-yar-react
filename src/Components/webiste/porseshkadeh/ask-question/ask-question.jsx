import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../../panel/header/panel-header";
import PKSideBar from "../../panel/sidebar/pk-side-bar";
import attachImg from "../../../../assets/images/svg/attach-link.svg";
import photoIcon from "../../../../assets/images/svg/photo-icon.svg";
import filterIcon from "../../../../assets/images/svg/filter-icon.svg";
class AskQuestionPage extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="aq-page-wrapper mm-width">
          <div className="aq-main-wrapper">
            <h1 className="title">عنوان برای این صفحه</h1>
            <div className="question-box">
              <textarea placeholder="type ... "></textarea>
              <span className="icons-wrapper">
                <img src={attachImg} />
                <img src={photoIcon} />
              </span>
            </div>
            <div className="categories-wrapper">
              <span className="title-wrapper">
                <img src={filterIcon} />
                <p className="text">
                  دسته بندی مربوط به سوال رو مشخص کن &nbsp;
                  <span>(ماکسیموم 6 تگ)</span>
                </p>
              </span>
              <div className="tags-wrapper">
                <span className="tags">
                  <span className="tag active">دهم</span>
                  <span className="tag">یازدهم</span>
                  <span className="tag">دوازدهم</span>
                </span>
                <span className="tags">
                  <span className="tag">دهم</span>
                  <span className="tag">یازدهم</span>
                  <span className="tag active">دوازدهم</span>
                </span>
              </div>
              <span className="send-btn-wrapper">
                <span className="send-btn">ارسال</span>
              </span>
            </div>
          </div>
          <PKSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(AskQuestionPage);
