import React, { Component } from "react";
import PanleHeader from "../header/panel-header";
import PanelSideBar from "../sidebar/panel-sidebar";
import withWebsiteData from "../../../hoc/with-website-data";
import local_time_maker from "../../../functions/local-time-maker";
import LittleLoading from "../../../reusables/little-loading";
import split_in_three from "../../../functions/spilit_in_three";
import BookDetail from "./book-detail/book-detail";
import book_smaple_img from "../../../../assets/images/svg/sample-rectangle-book.svg";
import clockImg from "../../../../assets/images/svg/clock.svg";
import shopBag from "../../../../assets/images/svg/shop-bag.svg";
class OrderDetails extends Component {
  state = {
    order: false,
    order_books: false,
  };
  componentDidMount() {
    const order_id = parseInt(window.location.pathname.split("/")[2]);
    const orders = JSON.parse(localStorage.getItem("orders"));
    let order = orders.find((o) => parseInt(o.pay_refId) === order_id);
    //! temporary method
    if (!order) {
      order = orders[0];
    }
    console.log(order);
    const { books } = this.props;
    const ids = [...order.cart_items_ids];
    const order_books = [];
    ids.forEach((id) => {
      const book = books.find((b) => b.id === id);
      order_books.push(book);
    });
    this.setState({ order, order_books });
  }
  render() {
    const { user } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="order-details-wrapper mm-width">
          <PanelSideBar />
          <div className="details-wrapper">
            <div className="details-header">
              <h1 className="title">جزئیات سفارش</h1>
              <div className="time-details">
                <span className="order-id">
                  شماره سفارش‌: &nbsp;
                  {this.state.order ? (
                    this.state.order.pay_refId
                  ) : (
                    <LittleLoading />
                  )}
                </span>
                <span className="time">
                  <span className="time-num">
                    {this.state.order ? (
                      this.state.order.pay_datetime.split("T")[1].split("+")[0]
                    ) : (
                      <LittleLoading />
                    )}
                    &nbsp;- &nbsp;
                    {this.state.order ? (
                      local_time_maker(this.state.order.pay_datetime)
                    ) : (
                      <LittleLoading />
                    )}
                  </span>
                  <img src={clockImg} alt="" />
                </span>
              </div>
            </div>
            <div className="addres-name-wrapper">
              <span className="address">
                آدرس تحویل :
                <br />
                <p>{user.real_address}</p>
              </span>
              <span className="recevier">تحویل گیرنده :‌ {user.real_name}</span>
            </div>
            <div className="book-details-wrapper">
              {this.state.order_books ? (
                this.state.order_books.map((b) => (
                  <BookDetail
                    book={b}
                    key={b.id}
                    ids={
                      this.state.order ? this.state.order.cart_items_ids : false
                    }
                  />
                ))
              ) : (
                <LittleLoading />
              )}
            </div>
            <div className="price-details">
              <div className="pirce-details-title">
                <img src={shopBag} />
                <h2>جزئیات قیمت</h2>
              </div>
              <div className="cart-data-wrapper">
                <div className="data">
                  <span className="data-title">جمع مبلغ کالاها:</span>
                  <span className="price-wrapper">
                    <span className="price">
                      {split_in_three(
                        this.state.order ? (
                          this.state.order.cart_summary.total_price_of_items
                        ) : (
                          <LittleLoading />
                        )
                      )}
                    </span>
                    &nbsp; تومان
                  </span>
                </div>
                <div className="data">
                  <span className="data-title">سود شما از خرید:</span>
                  <span className="price-wrapper">
                    <span className="price">
                      {split_in_three(
                        this.state.order ? (
                          this.state.order.cart_summary.total_discount_of_items
                        ) : (
                          <LittleLoading />
                        )
                      )}
                    </span>
                    &nbsp; تومان
                  </span>
                </div>
                <div className="data">
                  <span className="data-title">هزینه ارسال:</span>
                  <span className="price-wrapper">
                    <span className="price">
                      {split_in_three(
                        this.state.order ? (
                          this.state.order.cart_summary.post_cost
                        ) : (
                          <LittleLoading />
                        )
                      )}
                    </span>
                    &nbsp; تومان
                  </span>
                </div>
                <div className="data blue-data">
                  <span className="data-title">مبلغ قابل پرداخت:</span>
                  <span className="price-wrapper">
                    <span className="price">
                      {split_in_three(
                        this.state.order ? (
                          this.state.order.cart_summary.final_price
                        ) : (
                          <LittleLoading />
                        )
                      )}
                    </span>
                    &nbsp; تومان
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withWebsiteData(OrderDetails);
