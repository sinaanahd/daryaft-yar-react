import React, { Component } from "react";
import { Link } from "react-router-dom";
import smallBanner1 from "../../../../assets/images/website/small-banner-1.jpg";
import smallBanner2 from "../../../../assets/images/website/small-banner-2.jpg";
import campaignBanner from "../../../../assets/images/sing-and-win-banner.jpg";
import scrollToTop from "../../../functions/scroll";
class Slider extends Component {
  state = {
    active: 0,
    banners: [
      {
        banner: campaignBanner,
        id: 2,
        desc: "کمپین نوروزی یلدا",
        link: "/intro",
      },
      {
        banner: smallBanner1,
        id: 0,
        desc: "",
        link: "/shop",
      },
      {
        banner: smallBanner2,
        id: 1,
        desc: "",
        link: "/shop",
      },
    ],
  };
  componentDidMount() {
    //this.change_frequently();
  }
  change_slider = (active) => {
    this.setState({ active });
  };
  change_frequently = () => {
    setInterval(() => {
      if (this.state.active === 0) {
        this.change_slider(1);
      } else {
        this.change_slider(0);
      }
    }, 3000);
  };
  render() {
    return (
      <div className="small-banner">
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to={this.state.banners[this.state.active].link}>
          {
            <img
              src={this.state.banners[this.state.active].banner}
              alt={this.state.banners[this.state.active].desc}
            />
          }
        </Link>
        <div className="btns-for-slider">
          {this.state.banners.map((banner) => (
            <span
              key={banner.id}
              className={
                this.state.active === banner.id ? "b-active b-btn" : "b-btn"
              }
              onClick={() => {
                this.change_slider(banner.id);
              }}></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
