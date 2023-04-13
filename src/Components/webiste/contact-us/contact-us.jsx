import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SiteHeader from "../header/header";
import SiteFooter from "../footer/site-footer";
import withWebsiteData from "../../hoc/with-website-data";
import mobileIcon from "../../../assets/images/svg/contact-us.svg";
import telegramIcon from "../../../assets/images/svg/telegram.svg";
import instagramIcon from "../../../assets/images/svg/instagram.svg";
import whatsApp from "../../../assets/images/svg/whatsapp.svg";
class ContactUs extends Component {
  state = {};
  render() {
    const { cart, user, data, books, change_active } = this.props;
    return (
      <>
        <Helmet>
          <title>تماس با ما</title>
        </Helmet>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
          change_active={change_active}
        />
        <section className="return-prod mm-width">
          <div className="img-wrapper">
            <img src={mobileIcon} alt="نحوه بازگرداندن کالا" />
          </div>
          <div className="text-content">
            <h1 className="title">تماس با ما</h1>
            {/* <img src={retrunAsset} /> */}
            <p className="text">
              <b>آدرس ما:</b>
              <br />
              تهران - خ انقلاب، خ فخر رازی، خ وحید نظری،‌ نرسیده به خ ۱۲
              فروردین، پ ۸۱، واحد 1
              <br />
              <b>کد پستی:</b>
              <br />
              1314735163
              <br />
              <b>شماره ثابت:</b>
              <br />
              <a aria-label="شماره ثابت" href="tel:+982166950624">
                021-66950624
              </a>
              <b>تماس در شرایط اضطرار:</b>
              <br />
              <a aria-label="شماره اضطراری" href="tel:+989051300693">
                09051300693
              </a>
            </p>
            <p className="text">
              <span className="title-with-icon">
                <img src={telegramIcon} />
                لینک تلگرام برای دنبال کردن ما:
              </span>
              <a
                aria-label="تلگرام دریافت یار"
                href="https://telegram.me/daryaftyar_bot"
                target="_blank">
                t.me/daryaftyar_bot
              </a>
            </p>
            <p className="text">
              <span className="title-with-icon">
                <img src={instagramIcon} />
                لینک اینستاگرام برای دنبال کردن ما:
              </span>
              <a
                aria-label="اینتستاگرام دریافت یار"
                href="https://www.instagram.com/daryaftyar_bot"
                target="_blank">
                instagram.com/daryaftyar_bot
              </a>
            </p>
            <p className="text">
              <span className="title-with-icon">
                <img src={whatsApp} />
                لینک واتسپ برای دنبال کردن ما:
              </span>
              <a
                aria-label="واتسپ دریافت یار"
                href="https://wa.me/09051300693"
                target="_blank">
                wa.me/9051300693
              </a>
            </p>
          </div>
        </section>
        <SiteFooter pause={data.pause} error={data.error} />
      </>
    );
  }
}

export default withWebsiteData(ContactUs);
