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
import axios from "axios";
class Panel extends Component {
  state = {
    pause: true,
    orders: JSON.parse(localStorage.getItem("orders"))
      ? JSON.parse(localStorage.getItem("orders"))
      : [],
  };
  componentDidMount() {
    // const date = new Date();
    // console.log(date.toLocaleDateString("fa-IR"));
    const { user } = this.props;
    if (!user) {
      window.location.pathname = "/Login";
    }
    axios
      .get("https://daryaftyar.ir/backend/api/user_orders/341393410")
      .then((res) => {
        this.setState({ pause: false });
        const response = res.data;
        console.log(response);
        localStorage.setItem("orders", JSON.stringify(res.data));
        response.forEach((element) => {
          if (element.pay_refId === "") {
            element.pay_refId = 1111111111111111;
          }
        });
        this.setState({ orders: response });
      })
      .catch((err) => {
        this.setState({ pause: false });
        console.log(err);
      });
  }
  render() {
    const { user, books } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="panel-main-area mm-width">
          <div className="panel-grid">
            <LastOrders
              orders={
                this.state.orders.length !== 0 ? this.state.orders : false
              }
              books={books}
            />
            <div className="second-row-panel">
              <Orders
                orders={
                  this.state.orders.length !== 0 ? this.state.orders : false
                }
                books={books}
              />
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
