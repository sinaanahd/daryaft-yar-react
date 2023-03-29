import React, { Component } from "react";
import Login from "./Login/login";
import SiteHeader from "../header/header";
import SiteFooter from "../footer/site-footer";
import SignUp from "./singUp/singup";
import withWebsiteData from "../../hoc/with-website-data";
class LoginPage extends Component {
  state = {};
  componentDidMount() {
    const { user } = this.props;
    if (user) {
      window.location.href = window.location.href.replace(
        "Login",
        "main-panel"
      );
    }
  }
  render() {
    const { cart, user, data, books, change_active } = this.props;
    return (
      <>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
          change_active={change_active}
        />
        <section className="login-signup">
          <Login />
          {/* <SignUp /> */}
        </section>
        <SiteFooter pause={data.pause} error={data.error} />
      </>
    );
  }
}

export default withWebsiteData(LoginPage);
