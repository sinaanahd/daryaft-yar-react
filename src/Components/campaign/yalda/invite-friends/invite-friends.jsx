import React, { Component } from "react";
import SampleFooter from "../sample/sample-footer";
import SampleHeader from "../sample/sample-header";
import copy_to_clip_board from "../../../functions/copy-to-clip-board";
import copyImg from "../../../../assets/images/copy-img-pink.png";
import bigPom from "../../../../assets/images/anar-leaf-big.png";
import bigLeaf from "../../../../assets/images/leaf-big.png";
import withYalda from "../../../hoc/with-yalda";
import topleftFlower from "../../../../assets/images/svg/top-left-flower.svg";
import bottomleftFlower from "../../../../assets/images/svg/bottom-left-flower.svg";
import SiteFooter from "../../../webiste/footer/site-footer";
import SiteHeader from "../../../webiste/header/header";
import withWebsiteData from "../../../hoc/with-website-data";
class InviteFreinds extends Component {
  state = {};
  render() {
    const { user, cart, data, books, change_active } = this.props;
    return (
      <>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
          yalda={true}
          user={user ? user : false}
          change_active={change_active}
        />
        <div className="increase-token-page-w mm-width">
          <div className="main-content">
            <img src={topleftFlower} className="top-left" />
            <h1>دعوت از دوستان</h1>
            <p className="rules">
              خب رفیق ، لینک زیر رو برای دوستات بفرست ، با ثبت نام هر دوستت توی
              ربات، یک‌بار دیگه میتونی شانست رو‌ امتحان کنی و یک‌ صندوق دیگه باز
              کنی .
            </p>
            <div className="link-text">
              <span className="user-link">
                <bdi>
                  {user ? user.campaign.referral_link : "در حال آماده سازی"}
                </bdi>
              </span>
              <span
                className="copy-wrapper"
                onClick={() => {
                  const to = user ? user.campaign.referral_link : "none";
                  copy_to_clip_board(to);
                }}>
                <span className="icon">
                  <img src={copyImg} alt="کپی کردن لینک" />
                </span>
                <span className="text">کپی کردن</span>
              </span>
            </div>
            <img src={bottomleftFlower} alt="" className="bottom-right" />
          </div>
        </div>
        <SiteFooter />
      </>
    );
  }
}

export default withWebsiteData(InviteFreinds);
