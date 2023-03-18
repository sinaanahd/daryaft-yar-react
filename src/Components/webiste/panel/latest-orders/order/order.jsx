import React, { Component } from "react";
import { Link } from "react-router-dom";
import local_time_maker from "../../../../functions/local-time-maker";
import spilit_in_three from "../../../../functions/spilit_in_three";
import eyeIcon from "../../../../../assets/images/svg/eye-icon.svg";
class Order extends Component {
  state = {
    order_books: [],
  };
  componentDidMount() {
    const order_books = [...this.state.order_books];
    const { books, order } = this.props;
    order.cart_items_ids.forEach((id) => {
      //console.log(books);
      const book = books.find((b) => b.id === id);
      order_books.push(book);
      //console.log(order_books);
    });
    this.setState({ order_books });
  }
  render() {
    const { order, books } = this.props;
    return (
      <tr>
        <td>{order.pay_refId}</td>
        <td className="imgs-td">
          <span className="imgs-wrapper">
            {this.state.order_books.map((o) => (
              <Link to={`/single-id/${o.id}`} key={o.id}>
                <img src={o.img_url} alt={o.name} />
              </Link>
            ))}
          </span>
        </td>
        <td className="date-td">{local_time_maker(order.pay_datetime)}</td>
        <td className="price-td">
          {spilit_in_three(order.cart_summary.final_price)}
          &nbsp; تومان
        </td>
        {order.is_payd ? (
          <td className={"code-g code-y"}>پرداخت شده</td>
        ) : (
          <td className="code-r">پرداخت ناموفق</td>
        )}
        <td>
          <Link to={`order-detail/${order.pay_refId}`}>
            <img src={eyeIcon} />
          </Link>
        </td>
      </tr>
    );
  }
}

export default Order;
