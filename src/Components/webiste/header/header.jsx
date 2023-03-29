import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import MenuItem from "./menu/menu-item";
import account_icon from "../../../assets/images/website/account-icon.png";
import mainLogo from "../../../assets/images/welcome-photo.png";
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
        link_to: "/cart",
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
              <Link to={name !== "ورود / ثبت نام" ? "/panel" : "/Login"}>
                {!is_logged_in ? (
                  "ثبت‌نام / ورود"
                ) : (
                  <>
                    <span className="text">{name}</span>
                    <span className="btn-logo">
                      <img
                        src={account_icon}
                        alt="ورود کاربر"
                        className="normal-icon"
                      />
                      <img
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
              <Link to="/Cart">
                <span className="cart-icon">
                  <img src={cartIcon} alt="سبد خرید" />
                </span>
                <span className="cart-text">سبد خرید</span>
                <span className="cart-count">{cart_count}</span>
              </Link>
            </span>
          </div>
          <div className="logo-wrapper">
            <Link to="/home">
              <img src={mainLogo} alt="دریافت یار" />
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
          <img src={lines} />
        </span>
        {this.state.menu ? (
          <div className="responsive-menu">
            <span
              className="menu-close-btn"
              onClick={() => {
                this.open_menu();
              }}>
              <img src={cross} />
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
              onClick={() => {
                scrollToTop();
              }}
              to="/invite">
              <img src={tokenPink} />
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
