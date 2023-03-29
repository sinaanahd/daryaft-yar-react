import React, { Component } from "react";
import { Link } from "react-router-dom";
import SampleHeader from "../sample/sample-header";
import SampleFooter from "../sample/sample-footer";
import withYalda from "../../../hoc/with-yalda";
// import banner from "../../../../assets/images/campaign-banner.jpg";
import banner from "../../../../assets/images/sing-and-win-big-banner.jpg";
import SiteFooter from "../../../webiste/footer/site-footer";
import withWebsiteData from "../../../hoc/with-website-data";
import SiteHeader from "../../../webiste/header/header";
import scrollToTop from "../../../functions/scroll";
class CampagingIntro extends Component {
  state = {};
  render() {
    const { user, cart, data, books, change_active } = this.props;
    return (
      <>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
          yalda={true}
          user={user ? user : false}
          change_active={change_active}
        />
        <div className="yalda-intro mm-width">
          <div className="img-wrapper">
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to={user ? "./campaign" : "./Clogin"}>
              <img src={banner} alt="کمپین زمستانه" />
            </Link>
          </div>
          <div className="intro-text">
            <h1>متن معرفی و توضیحی</h1>
            <p>
              سلام دوست خوبم ، به جشنواره &nbsp; نوروزی
              <b> شعر بخون و جایزه ببر</b>
              &nbsp; دریافت یار خوش اومدی !
              <br />
              قراره جایزه ببری :{")"}&nbsp;کلی جایزه نقدی و تخفیف انتظارتو
              میکشن.
              <br />
              فقط کافیه <b> صندوقا</b> رو باز کنی !
              <br />
            </p>
          </div>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to={user ? "./campaign" : "./Clogin"}
            className="go-to-campaging">
            ورود به کمپین
          </Link>
        </div>
        <SiteFooter />
      </>
    );
  }
}

export default withWebsiteData(CampagingIntro);
