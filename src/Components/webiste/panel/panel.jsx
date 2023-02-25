import React, { Component } from "react";
import withWebsiteData from "../../hoc/with-website-data";
import PanleHeader from "./header/panel-header";
import PanelSideBar from "./sidebar/panel-sidebar";
import split_in_three from "../../functions/spilit_in_three";
import LastOrders from "./latest-orders/latest-orders";
import Orders from "./orders/orders";
import TrashIcon from "../../../assets/images/svg/trash-icon.svg";
import samplePordImg from "../../../assets/images/svg/sample-rectangle-book.svg";
import { Link } from "react-router-dom";
class Panel extends Component {
  state = {};
  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      window.location.pathname = "/Login";
    }
  }
  render() {
    const { user } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="panel-main-area mm-width">
          <div className="panel-grid">
            <LastOrders />
            <div className="second-row-panel">
              <Orders />
              <div className="saved-products">
                <h3 className="title">محصولات ذخیره شده</h3>
                <div className="saved-books-wrapper">
                  <div className="book-item">
                    <img src={samplePordImg} alt="" />
                    <span className="book-details">
                      <h4 className="book-title">
                        کتاب حفظیات شیمی جامع کنکور سری مینی میکرو طلایی نظام
                        جدید
                      </h4>
                      <span className="actions-wrapper">
                        <span className="price-wrapper">
                          <span className="amount">
                            {split_in_three(50150)}
                          </span>
                          <span className="currency">تومان</span>
                        </span>
                        <Link to="#" className="show-prod-btn">
                          مشاهده محصول
                        </Link>
                        <img src={TrashIcon} />
                      </span>
                    </span>
                  </div>
                  <div className="book-item">
                    <img src={samplePordImg} alt="" />
                    <span className="book-details">
                      <h4 className="book-title">
                        کتاب حفظیات شیمی جامع کنکور سری مینی میکرو طلایی نظام
                        جدید
                      </h4>
                      <span className="actions-wrapper">
                        <span className="price-wrapper">
                          <span className="amount">
                            {split_in_three(50150)}
                          </span>
                          <span className="currency">تومان</span>
                        </span>
                        <Link to="#" className="show-prod-btn">
                          مشاهده محصول
                        </Link>
                        <img src={TrashIcon} />
                      </span>
                    </span>
                  </div>
                  <div className="book-item">
                    <img src={samplePordImg} alt="" />
                    <span className="book-details">
                      <h4 className="book-title">
                        کتاب حفظیات شیمی جامع کنکور سری مینی میکرو طلایی نظام
                        جدید
                      </h4>
                      <span className="actions-wrapper">
                        <span className="price-wrapper">
                          <span className="amount">
                            {split_in_three(50150)}
                          </span>
                          <span className="currency">تومان</span>
                        </span>
                        <Link to="#" className="show-prod-btn">
                          مشاهده محصول
                        </Link>
                        <img src={TrashIcon} />
                      </span>
                    </span>
                  </div>
                  <div className="book-item">
                    <img src={samplePordImg} alt="" />
                    <span className="book-details">
                      <h4 className="book-title">
                        کتاب حفظیات شیمی جامع کنکور سری مینی میکرو طلایی نظام
                        جدید
                      </h4>
                      <span className="actions-wrapper">
                        <span className="price-wrapper">
                          <span className="amount">
                            {split_in_three(50150)}
                          </span>
                          <span className="currency">تومان</span>
                        </span>
                        <Link to="#" className="show-prod-btn">
                          مشاهده محصول
                        </Link>
                        <img src={TrashIcon} />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <Scores
              user={user}
              coin={user ? user.coin : 0}
              wallet={{
                amount: user ? user.amount : 0,
                days: user ? user.days_left : 0,
              }}
            /> */}
          </div>
          <PanelSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(Panel);
