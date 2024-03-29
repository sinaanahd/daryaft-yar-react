import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../../functions/scroll";
import sideBarIcon1 from "../../../../assets/images/svg/side-bar-icon-1.svg";
import sideBarIcon2 from "../../../../assets/images/svg/side-bar-icon-2.svg";
import sideBarIcon3 from "../../../../assets/images/svg/side-bar-icon-3.svg";
import sideBarIcon4 from "../../../../assets/images/svg/side-bar-icon-4.svg";
import sideBarIcon5 from "../../../../assets/images/svg/side-bar-icon-5.svg";
import open from "../../../../assets/images/website/arrow-down-icon.png";
import backArrow from "../../../../assets/images/svg/back-arrow.svg";
class PanelSideBar extends Component {
  state = {
    open: false,
  };
  open_side_bar = () => {
    const open = this.state.open;
    this.setState({ open: !open });
  };
  render() {
    let loc = window.location.pathname + "";
    loc = loc.replace("/", "");
    return (
      <div
        className={
          this.state.open ? "panel-sidebar panel-opened" : "panel-sidebar"
        }>
        <span
          className="open-closer"
          onClick={() => {
            this.open_side_bar();
          }}>
          <img src={open} className={!this.state.open ? "open" : "close"} />
        </span>
        <ul>
          <li>
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/main-panel">
              <img src={sideBarIcon2} alt="" />
              <span className="description">پیشخوان</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/panel">
              <img src={sideBarIcon3} alt="" />
              <span className="description">فروشگاه</span>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/porseshkadeh">
              <img src={sideBarIcon4} alt="" />
              <span className="description">پرسشکده</span>
            </Link>
          </li>

          {/* <li>
            <Link onClick={()=>{
              scrollToTop()
            }} to="#">
              <img src={sideBarIcon5} alt="" />
              <span className="description">گزارشیار</span>
            </Link>
          </li> */}

          <li>
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/user-info">
              <img src={sideBarIcon1} alt="" />
              <span className="description">تنظیمات</span>
            </Link>
          </li>
        </ul>
        <span className={loc + "-loc" + " active-item"}></span>
        <span className="return-to-panel">
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/home">
            <img src={backArrow} alt=" خروج از پنل" />
          </Link>
        </span>
      </div>
    );
  }
}

export default PanelSideBar;
