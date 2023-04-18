import React, { Component } from "react";
import withWebsiteData from "../../hoc/with-website-data";
import SiteFooter from "../footer/site-footer";
import SiteHeader from "../header/header";
// import shippingIcon from "../../../assets/images/svg/free-shipping.svg";
import shippingIcon from "../../../assets/images/free-shipping.webp";
import littleTruck from "../../../assets/images/svg/little-truck.svg";
import motorCycle from "../../../assets/images/svg/motorcyle.svg";

class HowToSend extends Component {
  state = {};
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
        <section className="return-prod mm-width">
          <div className="img-wrapper">
            <img
              width={400}
              height={400}
              src={shippingIcon}
              alt="نحوه بازگرداندن کالا"
            />
          </div>
          <div className="text-content">
            <h1 className="title">نحوه ارسال</h1>
            <img src={littleTruck} alt="نحوه ارسال" width={50} height={50} />
            <p className="text">
              در حال حاضر تمامی خرید ها در سایت دریافت یار به صورت رایگان و با
              پست پیشتاز به سراسر کشور ارسال میشود.
            </p>
            <p className="text">
              پست پیشتاز یکی از سریع ترین روش های ارسال مرسولات میباشد که بین 1
              تا 3 روز کاری سفارشات شما به دست شما خواهد رسید
            </p>
            <img src={motorCycle} alt="عکس موتور" width={50} height={50} />
            <p className="text">
              همراهان خوب تهرانی فروشگاه دریافت یار میتونن سفارشات خودشون رو که
              تا قبل از ساعت 16 سفارش دادن رو با پرداخت هزینه پیک در درب منزل
              همان روز تحویل بگیرند
            </p>
            <p className="text">
              <b>شماره ثابت:</b>
              <br />
              <a aria-label="شماره تماس" href="tel:+982166950624">
                021-66950624
              </a>
            </p>
            <p className="text">
              <b>تماس در شرایط اضطرار:</b>
              <br />
              <a aria-label="شماره تماس" href="tel:+989051300693">
                09051300693
              </a>
            </p>
          </div>
        </section>
        <SiteFooter pause={data.pause} error={data.error} />
      </>
    );
  }
}

export default withWebsiteData(HowToSend);
