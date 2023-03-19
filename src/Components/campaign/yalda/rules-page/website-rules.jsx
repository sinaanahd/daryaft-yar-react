import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import withYalda from "../../../hoc/with-yalda";
import tokenIcon from "../../../../assets/images/token.png";
import SampleFooter from "../sample/sample-footer";
import SampleHeader from "../sample/sample-header";
import SiteHeader from "../../../webiste/header/header";
import SiteFooter from "../../../webiste/footer/site-footer";
import bigPom from "../../../../assets/images/website/snow-icon.png";
import bigLeaf from "../../../../assets/images/website/trees-icon.png";
import topleftFlower from "../../../../assets/images/svg/top-left-flower.svg";
import bottomleftFlower from "../../../../assets/images/svg/bottom-left-flower.svg";
import toprightFlower from "../../../../assets/images/svg/top-right-flower.svg";
class YaldaRulesW extends Component {
  state = {
    go: "",
  };
  componentDidMount() {}
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
        <div className="rules-page-w mm-width">
          <div className="main-content">
            <h1>قوانین</h1>
            <img src={topleftFlower} className="top-left" />
            <p className="rule">
              وقتی صندوقتو باز کردی ، ازش یه اسکرین شات به ادمین ربات دریافت یار
              (به آیدی &nbsp;
              <a href="https://t.me/daryaftbot_admin">
                <b>daryaftbot_admin@</b>
              </a>
              ) بفرست .
            </p>
            <p className="rule">
              تو میتونی یک بار ، یک صندوق از بین ۹ صندوق هدیه انتخاب کنی و اونو
              بازش کنی .
            </p>
            <p className="rule">
              یادت نره که به ازای هر کدوم از دوستات که با لینک دعوتت، داخل ربات
              ثبت نام کنن ، یک صندوق دیگه میتونی باز کنی و یک‌ جایزه دیگه ببری !
            </p>
            <img src={bottomleftFlower} className="bottom-right" />
          </div>
        </div>
        <SiteFooter />
      </>
    );
  }
}

export default withWebsiteData(YaldaRulesW);
