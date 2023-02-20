import React, { Component } from "react";
import cross from "../../../../assets/images/svg/cross.svg";
import avatar from "../../../../assets/images/svg/avatar.svg";
import dashboard from "../../../../assets/images/svg/dashboard-blue.svg";
import porseshkadeh from "../../../../assets/images/svg/porseshkadeh-blue.svg";
import returnImg from "../../../../assets/images/svg/return-blue.svg";
import shop from "../../../../assets/images/svg/shop-blue.svg";
import setting from "../../../../assets/images/svg/setting-blue.svg";
import home from "../../../../assets/images/svg/home-blue.svg";
import questions from "../../../../assets/images/svg/questions-blue.svg";
import { Link } from "react-router-dom";
class ResponsiveSideBar extends Component {
  state = {
    delay_class: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ delay_class: false });
    }, 100);
  }
  render() {
    const { user, close_menu } = this.props;
    const place =
      window.location.pathname === "/panel" ||
      window.location.pathname === "/main-panel" ||
      window.location.pathname === "/increase-coin" ||
      window.location.pathname === "/user-info"
        ? true
        : false;
    let loc = window.location.pathname + "";
    loc = loc.replace("/", "");
    return (
      <div
        className={
          this.state.delay_class
            ? "rm-resposvie-sider-bar delay"
            : "rm-resposvie-sider-bar"
        }>
        <div className="blue-close">
          <img src={cross} onClick={() => close_menu()} />
          <span className={loc + "-top " + "rs-active-identifier"}></span>
        </div>
        <div className="rs-menu-data">
          <span className="rs-user-wrapper">
            {user ? (
              <span className="rs-user-name">
                <img src={avatar} />
                <span className="rs-user-text">{user.name}</span>
              </span>
            ) : (
              <Link to="Login" className="rs-user-name">
                <img src={avatar} />
                <span className="rs-user-text">ورود / ثبت‌نام</span>
              </Link>
            )}
          </span>
          {place ? (
            <ul className="side-bar-items">
              <li>
                <Link to="/main-panel">
                  <img src={dashboard} alt="" />
                  <span className="rs-text">پیشخوان</span>
                </Link>
              </li>
              <li>
                <Link to="/panel">
                  <img src={shop} alt="" />
                  <span className="rs-text">فروشگاه</span>
                </Link>
              </li>
              <li>
                <Link to="/porseshkadeh">
                  <img src={porseshkadeh} alt="" />
                  <span className="rs-text">پرسشکده</span>
                </Link>
              </li>
              <li>
                <Link to="/user-info">
                  <img src={setting} alt="" />
                  <span className="rs-text">تنظیمات</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="side-bar-items">
              <li>
                <Link to="/porseshkadeh">
                  <img src={home} alt="" />
                  <span className="rs-text">خانه</span>
                </Link>
              </li>
              <li>
                <Link to="/questions">
                  <img src={questions} alt="" />
                  <span className="rs-text">همه سوال‌ها</span>
                </Link>
              </li>
              <li>
                <Link to="/my-questions">
                  <img src={questions} alt="" />
                  <span className="rs-text">سوال‌های من</span>
                </Link>
              </li>
              <li>
                <Link to="/ask-question">
                  <img src={questions} alt="" />
                  <span className="rs-text">پرسیدن سوال</span>
                </Link>
              </li>
            </ul>
          )}
          <Link to={place ? "/home" : "/main-panel"} className="rm-back-btn">
            <img src={returnImg} />
            <span className="rm-return-text">
              {place ? "خروج" : "بازگشت به پنل کاربری"}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default ResponsiveSideBar;
