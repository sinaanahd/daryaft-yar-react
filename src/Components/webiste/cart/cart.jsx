import React, { Component, useReducer } from "react";
import SiteHeader from "../header/header";
import SiteFooter from "../footer/site-footer";
import CartLeftCol from "./left-col/cart-left-col";
import CartRightCol from "./right-col/cart-right-col";
import withWebsiteData from "../../hoc/with-website-data";
import PopDetails from "./popup/pop-cart";
class WebsiteCart extends Component {
  state = {
    pop_up: false,
  };
  close_pop_up = () => {
    this.setState({ pop_up: false });
  };
  open_pop_up = () => {
    this.setState({ pop_up: true });
  };
  render() {
    const {
      cart,
      user,
      data,
      handle_quan,
      delete_item,
      books,
      get_user,
      get_cart,
      check_discount,
    } = this.props;
    return (
      <>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
        />
        <section className="website-cart mm-width">
          <CartRightCol
            cart_items={cart ? cart.cart_details : []}
            handle_quan={handle_quan}
            delete_item={delete_item}
          />
          <CartLeftCol
            cart_summary={cart ? cart.cart_summary : ""}
            pop_up={this.state.pop_up}
            open_pop_up={this.open_pop_up}
            user={user ? user : ""}
            check_discount={check_discount}
          />
        </section>
        {this.state.pop_up ? (
          <section className="pop-up-bg">
            <PopDetails
              close_pop_up={this.close_pop_up}
              user={user ? user : false}
              get_cart={get_cart}
              get_user={get_user}
            />
          </section>
        ) : (
          <></>
        )}
        <SiteFooter pause={data.pause} error={data.error} />
      </>
    );
  }
}

export default withWebsiteData(WebsiteCart);
