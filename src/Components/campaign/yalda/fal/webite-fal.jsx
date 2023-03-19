import React, { Component } from "react";
import topPom from "../../../../assets/images/website/snow-icon.png";
import bottomPom from "../../../../assets/images/website/trees-rec-icon.png";
import topLeaf from "../../../../assets/images/website/snow-half-icon.png";
import bottomLeaf from "../../../../assets/images/website/trees-icon.png";
import openChest from "../../../../assets/images/yalda-chest-open.png";
import { Link } from "react-router-dom";
import SampleFooter from "../sample/sample-footer";
import SampleHeader from "../sample/sample-header";
import withYalda from "../../../hoc/with-yalda";
import withWebsiteData from "../../../hoc/with-website-data";
import SiteHeader from "../../../webiste/header/header";
import SiteFooter from "../../../webiste/footer/site-footer";
import axios from "axios";
import topleftFlower from "../../../../assets/images/svg/top-left-flower.svg";
import bottomleftFlower from "../../../../assets/images/svg/bottom-left-flower.svg";
import toprightFlower from "../../../../assets/images/svg/top-right-flower.svg";
class PrizePage extends Component {
  state = {
    more: false,
  };
  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      window.location.pathname = "Clogin";
    }
  }
  handle_open_more = () => {
    const more = !this.state.more;
    this.setState({ more });
  };
  render() {
    const { user, cart, data, books } = this.props;
    return (
      <>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
          yalda={true}
          user={user ? user : false}
        />
        <div className="fal-page-w">
          <div className="main-content">
            {/* <div className={this.state.more ? "fal-wrapper more" : "fal-wrapper"}>
                            <img src={anarBala} alt="" className="top-right" />
                            <img src={bargBala} alt="" className="top-left" />
                            <span className="fal-text">
                                {user ? user.campaign.faal.text.map((t , i) => <p key={i++}>{t }</p>) : "درحال بارگذاری"}
                            </span>
                            <img src={anarPaen} alt="" className="bottom-left" />
                            <img src={bargPaen} alt="" className="bottom-right" />
                            <span className="more-btn" onClick={()=>{this.handle_open_more()}}>
                                {!this.state.more ? "بیشتر" : "کمتر"}
                            </span>
                        </div>
                        <div className="fal-result">
                            <span className="title">
                                تعبیر:
                            </span>
                            <p className="result-text">
                                {user ? user.campaign.faal.tabir : "در حال بارگذاری"}
                            </p>
                        </div> */}
            <div className="fal-wrapper more">
              <img src={toprightFlower} alt="" className="top-right" />
              <img src={topleftFlower} alt="" className="top-left" />
              <span className="prize-text">
                {user
                  ? user.campaign.prize.map((t, i) => <p key={i++}>{t}</p>)
                  : "در حال بارگذاری"}
              </span>
              <img src={bottomleftFlower} alt="" className="bottom-left" />
              <img src={bottomleftFlower} alt="" className="bottom-right" />
            </div>
            <div className="open-chest">
              <img src={openChest} alt="" />
            </div>
          </div>
        </div>
        <SiteFooter />
      </>
    );
  }
}

export default withWebsiteData(PrizePage);
