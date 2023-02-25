import React, { Component } from "react";
import { Link } from "react-router-dom";
import walletScore from "../../../../assets/images/svg/wallet-score.svg";
import coinScore from "../../../../assets/images/svg/coins-score-vector.svg";
class Scores extends Component {
  state = {};
  render() {
    const { user, wallet, coin } = this.props;
    return (
      <div className="scores">
        <div className="details-wrapper">
          <h3 className="title">اعتبار کیف پول</h3>
          <span className="amount-wrpper">
            <span className="amount">{user.amount}</span>
            تومان
          </span>
          <span className="days">
            <span className="amount">{user.days_left}</span>
            روز مهلت استفاده
          </span>
          <img src={walletScore} className="vactor-img" />
        </div>
        <div className="details-wrapper">
          <h3 className="title">تعداد سکه های حسابت</h3>
          <span className="amount-wrpper">
            <span className="amount">{user.coin}</span>
            سکه
          </span>
          <img src={coinScore} className="vactor-img" />
        </div>
        <p className="text">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
        <Link to="#" className="btns-class">
          دعوت از دوستان
        </Link>
        <Link to="/increase-coin" className="btns-class">
          خرید سکه
        </Link>
      </div>
    );
  }
}

export default Scores;
