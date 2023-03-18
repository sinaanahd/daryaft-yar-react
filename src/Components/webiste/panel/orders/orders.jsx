import React, { Component } from "react";
import split_in_three from "../../../functions/spilit_in_three";
import LittleLoading from "../../../reusables/little-loading";
import MyOrder from "./my-order/my-order";
let interval;
let active = false;
class Orders extends Component {
  state = {
    status: "failed",
    orders_to_show: {
      failed: [],
      succsess: [],
      cancelled: [],
      processing: [],
    },
  };
  componentDidMount() {
    this.check_orders();
  }
  check_orders() {
    const { orders } = this.props;
    if (orders) {
      const orders_to_show = { ...this.state.orders_to_show };
      orders.forEach((order) => {
        if (order.is_payd) {
          orders_to_show.succsess.push(order);
        } else {
          orders_to_show.failed.push(order);
        }
      });
      this.setState({ orders_to_show });
      clearInterval(interval);
    } else if (!active) {
      interval = setInterval(() => {
        this.check_orders();
      }, 100);
      active = true;
    }
  }
  change_status = (status) => {
    this.setState({ status });
  };
  render() {
    const { orders, books } = this.props;
    return (
      <div className="my-orders g-item">
        <h3 className="title">سفارش‌های من</h3>
        <div className="tabs">
          <span
            className={this.state.status === "failed" ? "tab active" : "tab"}
            onClick={() => {
              this.change_status("failed");
            }}>
            پرداخت ناموفق
            {this.state.orders_to_show.failed.length !== 0 ? (
              <span className="number-label">
                {this.state.orders_to_show.failed.length}
              </span>
            ) : (
              <></>
            )}
          </span>
          <span
            className={this.state.status === "process" ? "tab active" : "tab"}
            onClick={() => {
              this.change_status("process");
            }}>
            در حال پردازش
            {this.state.orders_to_show.processing.length !== 0 ? (
              <span className="number-label">
                {this.state.orders_to_show.processing.length}
              </span>
            ) : (
              <></>
            )}
          </span>
          <span
            className={this.state.status === "canceled" ? "tab active" : "tab"}
            onClick={() => {
              this.change_status("canceled");
            }}>
            لغو شده ها
            {this.state.orders_to_show.cancelled.length !== 0 ? (
              <span className="number-label">
                {this.state.orders_to_show.cancelled.length}
              </span>
            ) : (
              <></>
            )}
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th className="my-num-td">شماره‌سفارش</th>
              <th className="my-prod-td">محصول</th>
              <th className="my-date-td">تاریخ</th>
              <th className="my-full-td">قیمت‌کل</th>
            </tr>
          </thead>
          <tbody>
            {orders ? (
              <>
                {this.state.status === "failed" ? (
                  this.state.orders_to_show.failed.length !== 0 ? (
                    this.state.orders_to_show.failed.map((b, i) => (
                      <MyOrder order={b} books={books} key={i++} />
                    ))
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
                {this.state.status === "process" ? (
                  this.state.orders_to_show.processing.length !== 0 ? (
                    this.state.orders_to_show.processing.map((b, i) => (
                      <MyOrder order={b} books={books} key={i++} />
                    ))
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
                {this.state.status === "canceled" ? (
                  this.state.orders_to_show.cancelled.length !== 0 ? (
                    this.state.orders_to_show.cancelled.map((b, i) => (
                      <MyOrder order={b} books={books} key={i++} />
                    ))
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </>
            ) : (
              <tr>
                <td>
                  <LittleLoading />
                </td>
                <td>
                  <LittleLoading />
                </td>
                <td>
                  <LittleLoading />
                </td>
                <td>
                  <LittleLoading />
                </td>
              </tr>
            )}
            {/* {orders ? (
              orders.map((b, i) => (
                <MyOrder order={b} books={books} key={i++} />
              ))
            ) : (
              <tr>
                <td>
                  <LittleLoading />
                </td>
                <td>
                  <LittleLoading />
                </td>
                <td>
                  <LittleLoading />
                </td>
                <td>
                  <LittleLoading />
                </td>
              </tr>
            )} */}
            {/* <tr>
              <td>9213123</td>
              <td className="prod-imgs">
                <img src={sampleProdImg} alt="" />
                <img src={sampleProdImg} alt="" />
                <img src={sampleProdImg} alt="" />
              </td>
              <td>۱۲ مهر ۱۴۰۱</td>
              <td>{split_in_three(263012)}</td>
            </tr>
            <tr>
              <td>9213123</td>
              <td className="prod-imgs">
                <img src={sampleProdImg} alt="" />
                <img src={sampleProdImg} alt="" />
                <img src={sampleProdImg} alt="" />
              </td>
              <td>۱۲ مهر ۱۴۰۱</td>
              <td>{split_in_three(263012)}</td>
            </tr>
            <tr>
              <td>9213123</td>
              <td className="prod-imgs">
                <img src={sampleProdImg} alt="" />
                <img src={sampleProdImg} alt="" />
                <img src={sampleProdImg} alt="" />
              </td>
              <td>۱۲ مهر ۱۴۰۱</td>
              <td>{split_in_three(263012)}</td>
            </tr>
            <tr>
              <td>9213123</td>
              <td className="prod-imgs">
                <img src={sampleProdImg} alt="" />
                <img src={sampleProdImg} alt="" />
                <img src={sampleProdImg} alt="" />
              </td>
              <td>۱۲ مهر ۱۴۰۱</td>
              <td>{split_in_three(263012)}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
