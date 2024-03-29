import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../../reusables/loading";
import scrollToTop from "../../functions/scroll";
import Errors from "../../reusables/errors";
import logo from "../../../assets/images/welcome-photo.webp";
import whatsappLogo from "../../../assets/images/website/whats-app.png";
import telegramLogo from "../../../assets/images/website/instagram.png";
import instagramLogo from "../../../assets/images/website/telegram.png";
import headphone from "../../../assets/images/website/headphone-icon.png";
import pen from "../../../assets/images/website/pen-icon.png";
import wallet from "../../../assets/images/website/wallet-icon.png";
import truck from "../../../assets/images/website/truck-icon.png";

class SiteFooter extends Component {
  state = {};
  render() {
    const { pause, error } = this.props;
    return (
      <>
        <footer className="site-footer mm-width">
          <div className="points">
            <div className="point">
              <img
                width={40}
                height={40}
                src={truck}
                alt=""
                className="point-img"
              />
              <span className="texts">
                <h4 className="point-title">ارسال رایگان به کشور</h4>
                <p>با هر میزان خرید مرسوله خودت رو رایگان بگیر</p>
              </span>
            </div>
            <div className="point">
              <img
                width={40}
                height={40}
                src={wallet}
                alt=""
                className="point-img"
              />
              <span className="texts">
                <h4 className="point-title">قابلیت خرید از کیف پول</h4>
                <p>
                  علاوه بر تخفیف فروشگاه اعتبار کیف پول شما از هزینه کسر میشود
                </p>
              </span>
            </div>
            <div className="point">
              <img
                width={40}
                height={40}
                src={pen}
                alt=""
                className="point-img"
              />
              <span className="texts">
                <h4 className="point-title">
                  به روز ترین فروشگاه کتاب و لوازم التحریر
                </h4>
                <p>آخرین چاپ تمامی کتب و با کیفیت ترین لوازم التحریر</p>
              </span>
            </div>
            <div className="point">
              <img
                width={40}
                height={40}
                src={headphone}
                alt=""
                className="point-img"
              />
              <span className="texts">
                <h4 className="point-title">مشاوره و پشتیبانی 24 ساعته</h4>
                <p>از طریق تلفن و چت آنلاین سایت</p>
              </span>
            </div>
          </div>
          <div className="main-wrapper">
            <div className="footer-col footer-col-1">
              <h3 className="footer-title">راهنمای خرید</h3>
              <ul className="footer-links">
                {/* <li>
                  <Link
                  aria-label="" to="./#">نحوه ی ثبت سفارشات</Link>
                </li> */}
                <li>
                  <Link
                    aria-label="نحوه ارسال سفارشات"
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/how-to-send">
                    نحوه ارسال سفارشات
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="نحوه بازگرداندن کالا"
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/return-prod">
                    نحوه بازگرداندن کالا
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="footer-col footer-col-2">
              <h3 className="footer-title">خدمات مشتریان</h3>
              <ul className="footer-links">
                <li>
                  <Link
                  aria-label="" to="./#">تخفیف‌ها</Link>
                </li>
                <li>
                  <Link
                  aria-label="" to="./#">نحوه بازگرداندن کالا</Link>
                </li>
              </ul> 
            </div> */}
            <div className="footer-col footer-col-3">
              <h3 className="footer-title">درباره ما</h3>
              <ul className="footer-links">
                <li>
                  <Link
                    aria-label="تماس با ما"
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/contact-us">
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="رفتن به پرسش های متداول"
                    onClick={() => {
                      scrollToTop();
                    }}
                    to="/faq">
                    پرسش های متداول
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-col-4">
              <img
                width={100}
                height={100}
                src={logo}
                alt="انتشارات دریافت"
                className="logo-footer"
              />
              <p className="follow-us-title">
                ما را در شبکه های اجتماعی دنبال کنید
              </p>
              <span className="follow-icons-wrapper">
                <span className="icon">
                  <img
                    width={23}
                    height={23}
                    src={whatsappLogo}
                    alt="واتسپ انتشارات دریافت"
                  />
                </span>
                <span className="icon middle">
                  <img
                    width={23}
                    height={23}
                    src={instagramLogo}
                    alt="اینتستاگرام انتشارات دریافت"
                  />
                </span>
                <span className="icon">
                  <img
                    width={23}
                    height={23}
                    src={telegramLogo}
                    alt="تلگرام انتشارات دریافت"
                  />
                </span>
              </span>
            </div>
          </div>
          <div className="about-us-footer">
            <p>
              فروشگاه اینترنتی کتاب و لوازم التحریر دریافت یار، کامل ترین بانک
              خرید کتاب و DVD های آموزشی، دانشگاهی، داستانی، غیرداستانی و کودک و
              نوجوان و لوازم التحریر به همراه تخفیفات ویژه و ارسال رایگان و سریع
              به تهران و سراسر کشور می باشد. در فروشگاه کتاب و لوازم التحریر
              دریافت یار تجربه متفاوتی از خرید را با امکان خرید از طریق کیف پول
              را تجربه می کنید.
            </p>
          </div>
        </footer>
        <div className="blue">
          <p>
            تمامی حقوق مادی و معنوی سایت مربوط به &nbsp;
            <Link
              aria-label="رفتن به صفحه اصلی"
              onClick={() => {
                scrollToTop();
              }}
              to="/home">
              دریافت یار
            </Link>
            &nbsp; هست
          </p>
        </div>
        <Loading pause={pause} />
        <Errors error={error} />
      </>
    );
  }
}

export default SiteFooter;
