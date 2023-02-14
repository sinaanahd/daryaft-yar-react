import React, { Component } from "react";
import factorIcon from "../../../../assets/images/website/factor-icon-cart.png";
import split_in_three from "../../../functions/spilit_in_three";
import axios from "axios";
import LittleLoading from "../../../reusables/little-loading";
import arrowDown from "../../../../assets/images/svg/arrow-down.svg";
import tik from "../../../../assets/images/svg/tik.svg";
import cross from "../../../../assets/images/svg/cross.svg";
class CartLeftCol extends Component {
  state = {
    pause: false,
    discount: false,
    code: "",
  };
  componentDidMount() {
    //console.log(this.props.cart_summary)
  }
  open_discount_modal = () => {
    const discount = !this.state.discount;
    this.setState({ discount });
  };
  go_to_bank = () => {
    this.setState({ pause: true });
    axios
      .get(
        `https://daryaftyar.ir/backend/api/payrequest/${this.props.user.user_id}`
      )
      .then((res) => {
        const response = res.data;
        console.log(res.data);
        window.location.href = response.url_to_pay;
      })
      .catch((err) => console.log(err));
  };
  get_code = (e) => {
    this.setState({ code: e.target.value });
  };
  render() {
    const { cart_summary, pop_up, open_pop_up, check_discount } = this.props;
    return (
      <div className="left-col">
        <div className="cart-details">
          <img src={factorIcon} alt="سبد خرید" className="factor" />
          <span className="detail-row">
            <h5 className="title-detail">جمع مبلغ کالاها:</h5>
            <span className="result">
              <span className="amount">
                {cart_summary
                  ? split_in_three(cart_summary.total_price_of_items)
                  : 0}
              </span>
              <span className="currency">تومان</span>
            </span>
          </span>
          <span className="detail-row">
            <h5 className="title-detail">تخفیف :</h5>
            <span className="result">
              <span className="amount">
                {cart_summary
                  ? split_in_three(cart_summary.total_discount_of_items)
                  : 0}
              </span>
              <span className="currency">تومان</span>
            </span>
          </span>
          <span className="detail-row">
            <h5 className="title-detail">کیف پول :</h5>
            <span className="result">
              <span className="amount">
                {cart_summary
                  ? split_in_three(cart_summary.credit_discount_final)
                  : 0}
              </span>
              <span className="currency">تومان</span>
            </span>
          </span>
          {cart_summary.dis_code_details.status ? (
            <span className="detail-row">
              <h5 className="title-detail">کد تخفیف :</h5>
              <span className="result">
                <span className="amount">
                  {split_in_three(cart_summary.dis_code_details.amount)}
                </span>
                <span className="currency">تومان</span>
              </span>
            </span>
          ) : (
            <></>
          )}
          <span className="detail-row">
            <h5 className="title-detail">هزینه ارسال:</h5>
            <span className="result">
              {cart_summary ? (
                cart_summary.post_cost === 0 ? (
                  "رایگان"
                ) : (
                  <>
                    <span className="amount">
                      {split_in_three(cart_summary.post_cost)}
                    </span>
                    <span className="currency">تومان</span>
                  </>
                )
              ) : (
                0
              )}
            </span>
          </span>
          <span className="detail-row seprate">
            <h5 className="title-detail">مبلغ قابل پرداخت</h5>
            <span className="result">
              <span className="amount">
                {cart_summary ? split_in_three(cart_summary.final_price) : 0}
              </span>
              <span className="currency">تومان</span>
            </span>
          </span>
        </div>
        <div className="site-discount-wrapper">
          <span className="main-wrapper">
            <span className="text">کد تخفیف</span>
            <img
              src={arrowDown}
              className={this.state.discount ? "arrow down" : "arrow"}
              onClick={() => {
                this.open_discount_modal();
              }}
            />
          </span>
          {this.state.discount ? (
            <span className="disocunt-code-details">
              <input
                type="text"
                placeholder="کد تخفیف خود را وارد کنید"
                onInput={(e) => {
                  this.get_code(e);
                }}
              />
              <span
                className="validate-code"
                onClick={() => {
                  check_discount(this.state.code);
                }}>
                بررسی کد
              </span>
              <span className="error-status">
                {cart_summary.dis_code_details.status ? (
                  <span className="sucsess">
                    <img src={tik} alt="" />
                    <p>کدتخفیف با موفقیت اعمال شد</p>
                  </span>
                ) : (
                  <span className="fail">
                    <img src={cross} alt="" />
                    <p>کدتخفیف قابل قبول نمی باشد</p>
                  </span>
                )}
              </span>
            </span>
          ) : (
            <></>
          )}
        </div>
        <div
          className="complete-buy"
          onClick={() => {
            if (!cart_summary.pay_permission) {
              open_pop_up();
            } else {
              this.go_to_bank();
            }
          }}>
          {cart_summary.pay_permission ? (
            <span>
              {this.state.pause ? <LittleLoading /> : "تمکیل فرایند خرید"}
            </span>
          ) : (
            <span>تمکیل فرایند خرید</span>
          )}
          {/* <Link to="./final-cart">
                        تمکیل فرایند خرید
                    </Link> */}
        </div>
      </div>
    );
  }
}

export default CartLeftCol;
