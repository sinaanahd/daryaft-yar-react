import React, { Component } from "react";
import split_in_three from "../../../functions/spilit_in_three";
import LittleLoading from "../../../reusables/little-loading";
import MyOrder from "./my-order/my-order";
class Orders extends Component {
  state = {
    status: "failed",
  };
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
            <span className="number-label">1</span>
          </span>
          <span
            className={this.state.status === "process" ? "tab active" : "tab"}
            onClick={() => {
              this.change_status("process");
            }}>
            در حال پردازش
            <span className="number-label">1</span>
          </span>
          <span
            className={this.state.status === "canceled" ? "tab active" : "tab"}
            onClick={() => {
              this.change_status("canceled");
            }}>
            لغو شده ها
            <span className="number-label">1</span>
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
              <tr>
                {orders.map((o) => (
                  <MyOrder key={o.pay_refId} order={o} books={books} />
                ))}
              </tr>
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
