import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SiteFooter from "../footer/site-footer";
import SiteHeader from "../header/header";
import withWebsiteData from "../../hoc/with-website-data";
import notFound from "../../../assets/images/website/not-found.svg";
class NotFound extends Component {
  state = {};
  render() {
    const { cart, user, data, books, change_active } = this.props;
    return (
      <>
        <Helmet>
          <title>صفحه ای پیدا نشد</title>
        </Helmet>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
          change_active={change_active}
        />
        <section className="not-found mm-width">
          <h1>صفحه مورد نظر یافت نشد</h1>
          <img src={notFound} alt="" />
        </section>
        <SiteFooter pause={data.pause} error={data.error} />
      </>
    );
  }
}

export default withWebsiteData(NotFound);
