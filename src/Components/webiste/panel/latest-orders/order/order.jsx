import React, { Component } from "react";
import spilit_in_three from "../../../../functions/spilit_in_three";
import sampleImg from "../../../../../assets/images/svg/sample-rectangle-book.svg";
import eyeIcon from "../../../../../assets/images/svg/eye-icon.svg";
import { Link } from "react-router-dom";
let final_date = "";
class Order extends Component {
  state = {
    order_books: [],
  };
  componentDidMount() {
    const order_books = [...this.state.order_books];
    const { books, order } = this.props;
    order.cart_items_ids.forEach((id) => {
      const book = books.find((b) => b.id === id);
      order_books.push(book);
    });
    this.setState({ order_books });
    let order_date = order.pay_datetime.split("T")[0].split("-");
    let date = new Date(order_date[0], order_date[1], order_date[2]);
    final_date = date.toLocaleDateString("fa-IR");
  }
  render() {
    const { order, books } = this.props;
    let order_date = order.pay_datetime.split("T");
    // let splited = order_date.split("-");
    //let date = new Date(order_date[0], order_date[1], order_date[2]);
    //let final_date = date.toLocaleDateString("fa-IR");
    return (
      <tr>
        <td>
          {order.pay_refId}
          {order.pay_refId}
          {order.pay_refId}
          {order.pay_refId}
          {order.pay_refId}
        </td>
        <td className="imgs-td">
          <span className="imgs-wrapper">
            {this.state.order_books.map((o) => (
              <Link to={`/single-id/${o.id}`} key={o.id}>
                <img src={o.img_url} alt={o.name} />
              </Link>
            ))}
          </span>
        </td>
        <td className="date-td">{final_date}</td>
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
          <img src={eyeIcon} />
        </td>
      </tr>
    );
  }
}

export default Order;
