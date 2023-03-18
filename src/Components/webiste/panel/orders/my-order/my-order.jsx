import React, { Component } from "react";
import split_in_three from "../../../../functions/spilit_in_three";
import local_time_maker from "../../../../functions/local-time-maker";
import { Link } from "react-router-dom";
class MyOrder extends Component {
  state = {
    order_books: [],
  };
  componentDidMount() {
    const { books, order } = this.props;
    const order_books = [...this.state.order_books];
    order.cart_items_ids.forEach((item) => {
      const book = books.find((b) => b.id === item);
      order_books.push(book);
    });
    this.setState({ order_books });
  }
  render() {
    const { order } = this.props;
    return (
      <tr>
        <td className="my-num-td">{order.pay_refId}</td>
        <td className="prod-imgs">
          <span className="prod-imgs">
            {this.state.order_books.map((b) => (
              <Link to={`/single-id/${b.id}`}>
                <img src={b.img_url} alt={b.name} key={b.id} />
              </Link>
            ))}
          </span>
        </td>
        <td className="my-date-td">{local_time_maker(order.pay_datetime)}</td>
        <td className="my-full-td">
          {split_in_three(order.cart_summary.final_price)}
          &nbsp; تومان
        </td>
      </tr>
    );
  }
}

export default MyOrder;
