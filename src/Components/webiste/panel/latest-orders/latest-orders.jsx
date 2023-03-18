import React, { Component } from "react";
import LittleLoading from "../../../reusables/little-loading";
import Order from "./order/order";
class LastOrders extends Component {
  state = {};
  render() {
    const { orders, books } = this.props;
    return (
      <div className="latest-order g-item">
        <h3 className="title">آخرین سفارش ها</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>شماره‌سفارش</th>
                <th className="imgs-td">محصول</th>
                <th className="date-td">تاریخ</th>
                <th className="price-td">قیمت‌کل</th>
                <th>وضعیت</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders ? (
                orders.map((order) => (
                  <Order order={order} books={books} key={order.pay_refId} />
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
                  <td>
                    <LittleLoading />
                  </td>
                  <td>
                    <LittleLoading />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LastOrders;
