import React, { Component } from "react";
import { Link } from "react-router-dom";
class Notifications extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="notifactions">
        {!user ? (
          <span className="login-first">
            <p>برای دیدن اعلان ها ابتدا نیاز است که وارد سایت شوید</p>
            <Link to="/Login">ورود / ثبت نام</Link>
          </span>
        ) : (
          <>
            <div className="notif">
              <span className="notif-text">
                کاربر
                {user.name} به سوال شما پاسخ داد:
              </span>
              <p className="answer-text">
                قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                محسوب میشن ؟
              </p>
              <span className="btn-wrapper">
                <Link to="#" className="view-answer">
                  مشاهده
                </Link>
              </span>
            </div>
            <div className="notif">
              <span className="notif-text">
                کاربر
                {user.name} به سوال شما پاسخ داد:
              </span>
              <p className="answer-text">
                قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                محسوب میشن ؟
              </p>
              <span className="btn-wrapper">
                <Link to="#" className="view-answer">
                  مشاهده
                </Link>
              </span>
            </div>
            <div className="notif">
              <span className="notif-text">
                کاربر
                {user.name} به سوال شما پاسخ داد:
              </span>
              <p className="answer-text">
                قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                محسوب میشن ؟
              </p>
              <span className="btn-wrapper">
                <Link to="#" className="view-answer">
                  مشاهده
                </Link>
              </span>
            </div>
            <div className="notif">
              <span className="notif-text">
                کاربر
                {user.name} به سوال شما پاسخ داد:
              </span>
              <p className="answer-text">
                قندکافت و اکسایش پیرووات و چرخه کربس هر سه تا یه نوع اکسایش
                محسوب میشن ؟
              </p>
              <span className="btn-wrapper">
                <Link to="#" className="view-answer">
                  مشاهده
                </Link>
              </span>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default Notifications;
