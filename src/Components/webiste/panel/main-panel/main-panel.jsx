import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../header/panel-header";
import PanelSideBar from "../sidebar/panel-sidebar";
import Scores from "../scores/scores";
import { Link } from "react-router-dom";
import Book from "../../Shop/main-content/books/book";
import RecentVisit from "./recent-visit/recent-visit";
import sampleBanner from "../../../../assets/images/svg/sample-rectangle.svg";
import shopIcon from "../../../../assets/images/svg/shop-icon-vector.svg";
import pkIcon from "../../../../assets/images/svg/pk-icon-vector.svg";
class MainPanel extends Component {
  state = {
    active_recent: "shop",
  };
  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      window.location.pathname = "/Login";
    }
  }
  render() {
    const { user, books, change_active, add_to_cart, ids } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="main-panel-wrapper mm-width">
          <Scores
            user={user}
            coin={user ? user.coin : 0}
            wallet={{
              amount: user ? user.amount : 0,
              days: user ? user.days_left : 0,
            }}
          />
          <div className="main-content-wrapper">
            <div className="banners">
              <div className="banner banner-1">
                <img src={sampleBanner} alt="" />
              </div>
              <div className="banner banner-2">
                <img src={sampleBanner} alt="" />
              </div>
            </div>
            <RecentVisit
              books={books}
              change_active={change_active}
              add_to_cart={add_to_cart}
              ids={ids}
              active_recent={this.state.active_recent}
            />
            <div className="shop-and-pk-wrapper">
              <div className="wrapper shop">
                <span className="title-wrapper">
                  <img src={shopIcon} />
                  <h2 className="title">فروشگاه</h2>
                </span>
                <span className="btn-wrapper">
                  <Link to="/shop" className="blue-btn">
                    مخزن کتاب‌ها
                  </Link>
                  <Link to="/panel" className="border">
                    سفارش های من
                  </Link>
                </span>
              </div>
              <div className="wrapper pk">
                <span className="title-wrapper">
                  <img src={pkIcon} />
                  <h2 className="title">پرسشکده</h2>
                </span>
                <h3 className="hotetst-question">داغ ترین سوالات</h3>
                <span className="questions-wrapper">
                  <span className="question">
                    <h4 className="question-title">
                      قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع
                      اکسایش محسوب میشن ؟
                    </h4>
                    <span className="tag-btn-wrapper">
                      <span className="answer-btn">پاسخ دادن</span>
                      <span className="tags">
                        <span className="tag">زیست</span>
                        <span className="tag">زیست</span>
                      </span>
                    </span>
                  </span>
                  <span className="question">
                    <h4 className="question-title">
                      قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع
                      اکسایش محسوب میشن ؟
                    </h4>
                    <span className="tag-btn-wrapper">
                      <span className="answer-btn">پاسخ دادن</span>
                      <span className="tags">
                        <span className="tag">زیست</span>
                        <span className="tag">زیست</span>
                      </span>
                    </span>
                  </span>
                  <span className="question">
                    <h4 className="question-title">
                      قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع
                      اکسایش محسوب میشن ؟
                    </h4>
                    <span className="tag-btn-wrapper">
                      <span className="answer-btn">پاسخ دادن</span>
                      <span className="tags">
                        <span className="tag">زیست</span>
                        <span className="tag">زیست</span>
                      </span>
                    </span>
                  </span>
                  <span className="question">
                    <h4 className="question-title">
                      قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع
                      اکسایش محسوب میشن ؟
                    </h4>
                    <span className="tag-btn-wrapper">
                      <span className="answer-btn">پاسخ دادن</span>
                      <span className="tags">
                        <span className="tag">زیست</span>
                        <span className="tag">زیست</span>
                      </span>
                    </span>
                  </span>
                  <span className="question">
                    <h4 className="question-title">
                      قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع
                      اکسایش محسوب میشن ؟
                    </h4>
                    <span className="tag-btn-wrapper">
                      <span className="answer-btn">پاسخ دادن</span>
                      <span className="tags">
                        <span className="tag">زیست</span>
                        <span className="tag">زیست</span>
                      </span>
                    </span>
                  </span>
                  <span className="question">
                    <h4 className="question-title">
                      قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع
                      اکسایش محسوب میشن ؟
                    </h4>
                    <span className="tag-btn-wrapper">
                      <span className="answer-btn">پاسخ دادن</span>
                      <span className="tags">
                        <span className="tag">زیست</span>
                        <span className="tag">زیست</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span className="btn-wrapper">
                  <Link to="/porseshkadeh" className="blue-btn">
                    رفتن به پرسشکده
                  </Link>
                </span>
                <span className="white-blur"></span>
              </div>
            </div>
          </div>
          <PanelSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(MainPanel);
