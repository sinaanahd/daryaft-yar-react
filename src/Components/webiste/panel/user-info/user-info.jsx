import React, { Component } from "react";
import LittleLoading from "../../../reusables/little-loading";
import axios from "axios";
import userIcon from "../../../../assets/images/svg/user-icon.svg";
import homeIcon from "../../../../assets/images/svg/home-icon.svg";
import postIcon from "../../../../assets/images/svg/post-icon.svg";
import telephoneIcon from "../../../../assets/images/svg/telephone-icon.svg";
class UserInfo extends Component {
  state = {
    pause: false,
    succsess: false,
    failure: false,
    data: {
      real_address: false,
      real_home_number: false,
      real_name: false,
      real_postal_code: false,
    },
    err: {
      name: false,
      number: false,
      address: false,
      post: false,
    },
  };
  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      window.location.pathname = "/Login";
    }
  }
  validate_forms = (e, kind) => {
    const value = e.target.value;
    const err = { ...this.state.err };
    const data = { ...this.state.data };
    switch (kind) {
      case "name":
        if (value.length < 2) {
          err.name = "نام وارد شده کوتاه است";
          data.real_name = false;
        } else {
          data.real_name = value;
          err.name = false;
        }
        break;
      case "number":
        if (value.length !== 11) {
          err.number = "شماره تلفن و به همراه کد شهر باید ۱۱ رقم باشد";
          data.real_home_number = false;
        } else {
          data.real_home_number = value;
          err.number = false;
        }
        break;
      case "address":
        if (value.length < 5) {
          err.address = "آدرس وارد شده کوتاه است";
          data.real_address = false;
        } else {
          data.real_address = value;
          err.address = false;
        }
        break;
      case "post":
        if (value.length !== 10) {
          err.post = "کدپستی باید ۱۰ رقم باشد";
          data.real_postal_code = false;
        } else {
          data.real_postal_code = value;
          err.post = false;
        }
        break;
    }
    this.setState({ err, data });
  };
  send_req = () => {
    this.setState({ pause: true });
    const { user } = this.props;
    axios
      .patch(
        `https://daryaftyar.ir/backend/api/user_real_data/${user.user_id}`,
        this.state.data
      )
      .then((res) => {
        this.props.update_user(res.data);
        this.setState({ pause: false, succsess: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ pause: false, failure: true });
      });
  };
  render() {
    const { user } = this.props;
    return (
      <div className="user-info">
        <h3 className="title">اطلاعات شخصی</h3>
        <div className="forms">
          <span className="form name">
            <input
              type="text"
              className="name"
              onInput={(e) => {
                this.validate_forms(e, "name");
              }}
              placeholder={"نام فعلی :  " + user.real_name}
            />
            <img src={userIcon} alt="" />
            {this.state.err.name ? (
              <span className="ui-error-wrapper">{this.state.err.name}</span>
            ) : (
              <></>
            )}
          </span>
          <span className="form phone-number">
            <input
              type="number"
              className="phone-number"
              onInput={(e) => {
                this.validate_forms(e, "number");
              }}
              placeholder={"شماره فعلی :  " + user.real_home_number}
            />
            <img src={telephoneIcon} alt="" />
            {this.state.err.number ? (
              <span className="ui-error-wrapper">{this.state.err.number}</span>
            ) : (
              <></>
            )}
          </span>
          <span className="form home">
            <textarea
              className="home"
              onInput={(e) => {
                this.validate_forms(e, "address");
              }}
              placeholder={"آدرس فعلی :  " + user.real_address}
            />
            <img src={homeIcon} alt="" />
            {this.state.err.address ? (
              <span className="ui-error-wrapper">{this.state.err.address}</span>
            ) : (
              <></>
            )}
          </span>
          <span className="form post">
            <input
              type="number"
              className="postalcode"
              onInput={(e) => {
                this.validate_forms(e, "post");
              }}
              placeholder={"کدپستی فعلی :  " + user.real_postal_code}
            />
            <img src={postIcon} alt="" />
            {this.state.err.post ? (
              <span className="ui-error-wrapper">{this.state.err.post}</span>
            ) : (
              <></>
            )}
          </span>
        </div>
        {this.state.pause ? (
          <span className="submit">
            <LittleLoading />
          </span>
        ) : (
          <span
            className="submit"
            onClick={() => {
              this.send_req();
            }}>
            ثبت تغییرات
          </span>
        )}
        {this.state.succsess ? (
          <div className="data-sucsess">اطلاعات با موفقیت ذخیره شد</div>
        ) : (
          <></>
        )}
        {this.state.failure ? (
          <div className="data-fail">مشکلی پیش آمده دوباره تلاش کنید</div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default UserInfo;
