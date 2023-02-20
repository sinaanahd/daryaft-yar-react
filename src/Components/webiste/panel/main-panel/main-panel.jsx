import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../header/panel-header";
import PanelSideBar from "../sidebar/panel-sidebar";
import Scores from "../scores/scores";
import { Link } from "react-router-dom";
import sampleBanner from "../../../../assets/images/svg/sample-rectangle.svg";
class MainPanel extends Component {
  state = {};
  render() {
    const { user } = this.props;
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
            <div className="recent-visits">
              <h2 className="title">بازدید‌های اخیر شما</h2>
            </div>
            <div className="shop-and-pk-wrapper">
              <div className="wrapper shop">
                <h2 className="title">فروشگاه</h2>
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
                <h2 className="title">پرسشکده</h2>
                <span className="btn-wrapper">
                  <Link to="/porseshkadeh" className="blue-btn">
                    رفتن به پرسشکده
                  </Link>
                </span>
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
