import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../../panel/header/panel-header";
import PKSideBar from "../../panel/sidebar/pk-side-bar";
import sampleQuestion from "../../../../assets/images/svg/sample-question.svg";
import userAviator from "../../../../assets/images/svg/user-aviator.svg";
import thumbsUp from "../../../../assets/images/svg/thumbs-up.svg";
import thumbsDown from "../../../../assets/images/svg/thumbs-down.svg";
import attachLink from "../../../../assets/images/svg/attach-link.svg";
import photoIcon from "../../../../assets/images/svg/photo-icon.svg";
import starEmpty from "../../../../assets/images/svg/star-empty.svg";
import starFill from "../../../../assets/images/svg/star-fill.svg";
class AskQuestion extends Component {
  state = {};
  componentDidMount() {
    document.querySelector("#root").classList.add("paper-bgc");
  }
  componentWillUnmount() {
    document.querySelector("#root").classList.remove("paper-bgc");
  }
  render() {
    const { user } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="ask-question-wrapper mm-width">
          <div className="ask-question-content">
            <div className="question-wrapper">
              <img src={sampleQuestion} alt="سوال" className="question-img" />
              <h1 className="question-title">
                قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                محسوب میشن ؟
              </h1>
              <span className="user-and-like">
                <span className="user-avatar-wrapper">
                  <span className="image">
                    <img src={userAviator} alt="" className="user-avatar" />
                  </span>
                  <span className="name">نام کاربری</span>
                </span>
                <span className="thumbs">
                  <span className="like thumb">
                    <img src={thumbsDown} alt="" />
                    <span className="number">5</span>
                  </span>
                  <span className="dis-like thumb">
                    <img src={thumbsUp} alt="" />
                    <span className="number">10</span>
                  </span>
                </span>
              </span>
              <span className="question-details">
                <span className="wating-for-answer">
                  تعداد منتظران پاسخ
                  <span className="count">{10}</span>
                </span>
                <span className="wating-for-answer">
                  مبلغ جایزه پاسخگویی
                  <span className="count">{10}</span>
                </span>
              </span>
              <span className="is-also-my-question ">برای منم سواله</span>
            </div>
            <div className="quick-answer">
              <p className="text">
                پاسخی که برای سوال داری رو میتونی اینجا ارسال کنی
              </p>
              <textarea name="" id=""></textarea>
              <span className="icons-wrapper">
                <img src={photoIcon} />
                <img src={attachLink} />
              </span>
            </div>
            <div className="answers-wrapper">
              <div className="answer">
                <span className="user-name">
                  <img src={userAviator} alt="" className="avatar" />
                  <span className="user-name">نام کاربری</span>
                </span>
                <img src={sampleQuestion} alt="" className="answer-img" />
                <span className="answer-wrapper">
                  <p className="title">متن جواب-</p>
                  <p className="answer-text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </span>
                <span className="starts">
                  <img src={starFill} className="star" />
                  <img src={starFill} className="star" />
                  <img src={starEmpty} className="star" />
                  <img src={starEmpty} className="star" />
                  <img src={starEmpty} className="star" />
                </span>
              </div>
            </div>
          </div>
          <PKSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(AskQuestion);
