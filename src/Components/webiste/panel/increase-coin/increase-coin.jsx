import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../header/panel-header";
import PanelSideBar from "../sidebar/panel-sidebar";
import axios from "axios";
import LittleLoading from "../../../reusables/little-loading";
import split_in_three from "../../../functions/spilit_in_three";
import coin_image from "../../../../assets/images/coin-more.jpeg";
class IncreaseCoin extends Component {
  state = {
    url: "",
    active: 50,
  };
  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      window.location.pathname = "/Login";
    } else {
      this.buy_coin(50);
    }
  }
  buy_coin = (amount) => {
    this.setState({ url: "" });
    // .patch(`https://daryaftyar.ir/backend/api/kir`, { bullshit: "bullshit" })
    axios
      .get(
        `https://daryaftyar.ir/backend/api/buy_coin/id:${this.props.user.user_id}-amount:${amount}`
      )
      .then((res) => {
        //console.log(res.data);
        const answer = res.data;
        // console.log(res.data);
        this.setState({ url: answer.url_to_pay });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  change_active = (active) => {
    this.setState({ active });
    this.buy_coin(active);
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="increase-token mm-width">
          <div className="buy-coin-page-wrapper">
            <h1>خرید سکه</h1>
            <div className="coin-choose-wrapper">
              <div className="options-wrapper">
                <div
                  className="option"
                  onClick={() => {
                    this.change_active(50);
                  }}>
                  <span
                    className={
                      this.state.active === 50 ? "status active" : "status"
                    }></span>
                  <span className="text">
                    {50} سکه -{split_in_three(5000)}
                    تومان (ارزان‌ترین)
                  </span>
                </div>
                <div
                  className="option"
                  onClick={() => {
                    this.change_active(150);
                  }}>
                  <span
                    className={
                      this.state.active === 150 ? "status active" : "status"
                    }></span>
                  <span className="text">
                    {150} سکه -{split_in_three(9000)}
                    تومان (رایج‌ترین)
                  </span>
                </div>
                <div
                  className="option"
                  onClick={() => {
                    this.change_active(500);
                  }}>
                  <span
                    className={
                      this.state.active === 500 ? "status active" : "status"
                    }></span>
                  <span className="text">
                    {500} سکه -{split_in_three(19000)}
                    تومان (به‌صرفه‌ترین)
                  </span>
                </div>
              </div>
              {this.state.url !== "" ? (
                <a
                  href={this.state.url}
                  target="_blank"
                  className="buy-coin-btn">
                  خرید سکه
                </a>
              ) : (
                <span className="buy-coin-btn">
                  <LittleLoading />
                </span>
              )}
            </div>
          </div>
          <PanelSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(IncreaseCoin);
