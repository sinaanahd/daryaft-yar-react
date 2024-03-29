import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import MenuItem from "./menu/menu-item";
import account_icon from "../../../assets/images/website/account-icon.png";
import mainLogo from "../../../assets/images/welcome-photo.webp";
import cartIcon from "../../../assets/images/website/cart-icon.png";
import responsiveMenuUser from "../../../assets/images/svg/user-icon-menu.svg";
import lines from "../../../assets/images/svg/lines.svg";
import cross from "../../../assets/images/svg/cross.svg";
//import { FaAngleDown } from "react-icons/fa";
import arrowDown from "../../../assets/images/website/arrow-down-icon.png";
import tokenPink from "../../../assets/images/token-pink.png";
import scrollToTop from "../../functions/scroll";
class SiteHeader extends Component {
  state = {
    menu_items: [
      {
        text: "خانه",
        link_to: "/home",
        children: [],
        id: 1,
      },
      {
        text: "فروشگاه",
        link_to: "/shop",
        children: [],
        id: 2,
      },
      {
        text: "سبد خرید",
        link_to: "/Cart",
        children: [],
        id: 3,
      },
      {
        text: "ورود / ثبت نام",
        link_to: "/Login",
        children: [],
        id: 4,
      },
      {
        text: "کمپین",
        link_to: "/intro",
        children: [],
        id: 5,
      },
      {
        text: "تماس با ما",
        link_to: "/contact-us",
        children: [],
        id: 6,
      },
    ],
    menu: false,
  };
  open_menu = () => {
    const menu = !this.state.menu;
    this.setState({ menu });
  };
  render() {
    const {
      cart_count,
      name,
      is_logged_in,
      books,
      yalda,
      user,
      change_active,
    } = this.props;
    return (
      <header className={!yalda ? "site-header" : "site-header yalda-header"}>
        <div className="first-row">
          <div className="btns-wrapper">
            <span className="enter-btn-wrapper header-btn">
              <Link
                aria-label="رفتن به صفحه لاگین"
                to={name !== "ورود / ثبت نام" ? "/main-panel" : "/Login"}>
                {!is_logged_in ? (
                  "ثبت‌نام / ورود"
                ) : (
                  <>
                    <span className="text">{name}</span>
                    <span className="btn-logo">
                      <img
                        width={16}
                        height={16}
                        src={account_icon}
                        alt="ورود کاربر"
                        className="normal-icon"
                      />
                      <img
                        width={16}
                        height={16}
                        src={responsiveMenuUser}
                        alt="ورود کاربر"
                        className="responsive-icon"
                      />
                    </span>
                  </>
                )}
              </Link>
            </span>
            <span className="header-btn cart-btn">
              <Link aria-label="رفتن به سبد خرید" to="/Cart">
                <span className="cart-icon">
                  <img width={16} height={16} src={cartIcon} alt="سبد خرید" />
                </span>
                <span className="cart-text">سبد خرید</span>
                <span className="cart-count">{cart_count}</span>
              </Link>
            </span>
          </div>
          <div className="logo-wrapper">
            <Link aria-label="رفتن به خانه" to="/home">
              <img width={100} height={100} src={mainLogo} alt="دریافت یار" />
            </Link>
          </div>
          <Search change_active={change_active} books={books} />
        </div>
        <div className="second-row">
          <nav>
            <ul className="main-nav">
              {this.state.menu_items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
              {/* <li className="has-sub">
                                <Link to="/#">
                                    رشته
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    پایه
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    انتشارات
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    دروس
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    راهنمای خرید
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    نحوه ارسال
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    تماس با ما
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li> */}
            </ul>
          </nav>
        </div>
        <span className="make-menu-active" onClick={() => this.open_menu()}>
          <img src={lines} alt="منو" width={37} height={20} />
        </span>
        {this.state.menu ? (
          <div className="responsive-menu">
            <span
              className="menu-close-btn"
              onClick={() => {
                this.open_menu();
              }}>
              <img width={14} height={14} src={cross} alt="بستن" />
            </span>
            <nav className="responsive-menu-nav">
              <ul>
                {this.state.menu_items.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </ul>
            </nav>
          </div>
        ) : (
          <></>
        )}
        {yalda ? (
          <span className="yalda_token">
            <Link
              aria-label="رفتن به صفحه دعوت از کابران"
              onClick={() => {
                scrollToTop();
              }}
              to="/invite">
              <img width={30} height={35} src={tokenPink} alt="تعداد توکن" />
            </Link>
            <span className="token-count">
              {user ? user.campaign.user_token : 0}
            </span>
          </span>
        ) : (
          <></>
        )}
      </header>
    );
  }
}

export default SiteHeader;
