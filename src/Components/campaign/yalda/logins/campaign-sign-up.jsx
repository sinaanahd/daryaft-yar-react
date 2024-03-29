import React, { Component } from "react";
import axios from "axios";
import withYalda from "../../../hoc/with-yalda";
import phoneIcon from "../../../../assets/images/phone-icon.png";
import userIcon from "../../../../assets/images/user-filed-icon.png";
import { Redirect } from "react-router-dom";
import SampleFooter from "../sample/sample-footer";
import SampleHeader from "../sample/sample-header";
import topPom from "../../../../assets/images/website/snow-icon.png";
import bottomPom from "../../../../assets/images/website/trees-rec-icon.png";
import topLeaf from "../../../../assets/images/website/snow-half-icon.png";
import bottomLeaf from "../../../../assets/images/website/trees-icon.png";
import topleftFlower from "../../../../assets/images/svg/top-left-flower.svg";
import bottomleftFlower from "../../../../assets/images/svg/bottom-left-flower.svg";
import toprightFlower from "../../../../assets/images/svg/top-right-flower.svg";
import SiteFooter from "../../../webiste/footer/site-footer";
import SiteHeader from "../../../webiste/header/header";
import withWebsiteData from "../../../hoc/with-website-data";
class CSignUp extends Component {
  state = {
    grade: 10,
    major: 1,
    name: "",
    phone: JSON.parse(localStorage.getItem("phone_number")),
    err_msg: "",
  };
  componentDidMount() {
    // window.location.replace("/login")
  }
  hanle_selection = (kind, num) => {
    if (kind === "m") {
      this.setState({ major: num });
    } else if (kind === "g") {
      this.setState({ grade: num });
    }
  };
  grade_convert = (num) => {
    if (num === 10) {
      return "دهم";
    } else if (num === 11) {
      return "یازدهم";
    } else if (num === 12) {
      return "دوازدهم";
    }
  };
  major_convert = (num) => {
    if (num === 1) {
      return "ریاضی";
    } else if (num === 2) {
      return "تجربی";
    } else if (num === 3) {
      return "انسانی";
    } else if (num === 4) {
      return "هنر";
    }
  };
  handle_name = (target) => {
    if (target.value.length > 2) {
      this.setState({ name: target.value, err_msg: "" });
    } else {
      this.setState({ err_msg: "نام وارد شده کوتاه است" });
    }
  };
  // handle_phone = (target) => {
  //     if (target.value.startsWith("09")) {
  //         if (target.value.length === 11) {
  //             this.setState({ phone : target.value , err_msg : "" });
  //         }
  //         else {
  //             this.setState({ err_msg: "شماره تلفن باید ۱۱ رقم باشد" });
  //         }
  //     }
  //     else {
  //         this.setState({ err_msg: "شماره تلفن باید با ۰۹ شروع شود" });
  //     }
  // }
  make_user = () => {
    let grade = this.grade_convert(this.state.grade);
    let major = this.major_convert(this.state.major);
    let obj = {
      phone_number: this.state.phone,
      name: this.state.name,
      grade,
      major,
    };
    console.log("hi");
    axios
      .post(`https://daryaftyar.ir/backend/api/register_user`, obj)
      .then((res) => {
        console.log(res.data);
        let data = res.data;
        axios
          .get(`https://daryaftyar.ir/backend/api/user/${data.user_id}`)
          .then((res) => {
            let user = res.data;
            localStorage.setItem("user", JSON.stringify(user));
            window.location.replace("./campaign");
          })
          .catch((err) => alert(err.message));
      })
      .catch((err) => console.log(err));
  };
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
        <div className="yalda-sing-up mm-width">
          <img src={toprightFlower} className="top-right" />
          <img src={topleftFlower} className="top-left" />
          <div className="main-content">
            <h1 className="title">ثبت نام</h1>
            <div className="input-wrapper">
              <img src={userIcon} alt="" />
              <input
                type="text"
                className="enter-mobile"
                placeholder="نام و نام خانوادگی"
                onInput={({ target }) => {
                  this.handle_name(target);
                }}
              />
            </div>
            {/* <div className="input-wrapper">
                            <img src={phoneIcon} alt="" />
                            <input
                                type="number"
                                className="enter-mobile"
                                placeholder='شماره تلفن'
                                onInput={({target})=>{this.handle_phone(target)}}
                            />
                        </div> */}
          </div>
          <div className="grades-wrapper">
            <span
              className={this.state.grade === 10 ? "option selected" : "option"}
              onClick={() => {
                this.hanle_selection("g", 10);
              }}>
              دهم
            </span>
            <span
              className={this.state.grade === 11 ? "option selected" : "option"}
              onClick={() => {
                this.hanle_selection("g", 11);
              }}>
              یازدهم
            </span>
            <span
              className={this.state.grade === 12 ? "option selected" : "option"}
              onClick={() => {
                this.hanle_selection("g", 12);
              }}>
              دوازدهم
            </span>
          </div>
          <div className="grades-wrapper">
            <span
              className={this.state.major === 1 ? "option selected" : "option"}
              onClick={() => {
                this.hanle_selection("m", 1);
              }}>
              ریاضی
            </span>
            <span
              className={this.state.major === 2 ? "option selected" : "option"}
              onClick={() => {
                this.hanle_selection("m", 2);
              }}>
              تجربی
            </span>
            <span
              className={this.state.major === 3 ? "option selected" : "option"}
              onClick={() => {
                this.hanle_selection("m", 3);
              }}>
              انسانی
            </span>
            <span
              className={this.state.major === 4 ? "option selected" : "option"}
              onClick={() => {
                this.hanle_selection("m", 4);
              }}>
              هنر
            </span>
          </div>

          <span
            className="submit"
            onClick={() => {
              this.make_user();
            }}>
            ثبت نام
          </span>
          {this.state.err_msg !== "" ? (
            <span className="error">{this.state.err_msg}</span>
          ) : (
            <></>
          )}
          <img src={bottomleftFlower} className="bottom-right" />
          <img src={bottomleftFlower} className="bottom-left" />
        </div>
        <SiteFooter />
      </>
    );
  }
}

export default withWebsiteData(CSignUp);
