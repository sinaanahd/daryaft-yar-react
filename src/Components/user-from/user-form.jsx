import React, { Component } from 'react';
import BackBtn from '../reusables/back';
import userIcon from "../../assets/images/user-data-icon.png";
import phoneIcon from "../../assets/images/phone-data-icon.png";
import postIcon from "../../assets/images/post-data-icon.png";
import addressIcon from "../../assets/images/address-data-icon.png";
import FooterBot from '../shop-bot/botFooter';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../reusables/loading';
import find_loc from '../functions/find-loc';
import save_local_address from '../functions/save_local_address';
import map_handler from '../functions/map_handler';
const us_id = window.Telegram.WebApp.initData;
    let final_id = ""
    if (us_id === "") {
        final_id = "341393410";
    }
    else {
        final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
    }
class UserForm extends Component {
    state = {
        data_user: {
            real_address: false,
            real_home_number: false,
            real_name: false,
            real_postal_code: false,
        },
        name_err: false,
        name_status : false,
        phone_err: false,
        phone_status : false,
        post_err: false,
        post_status : false,
        address_err: false,
        address_status : false,
        cart: JSON.parse(localStorage.getItem("cart")),
        url: false,
        pause: false,
        go: false,
        go_to: "",
    } 
    changeHandler = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        const data_user = this.state.data_user;
        let name_err = false;
        let phone_err = false;
        let post_err = false;
        let address_err = false;
        switch (id) {
            case "user-name":
                if (value.length < 3) {
                    name_err = "طول مجاز برای این فیلد حداقل ۳ کاراکتر است";
                    this.setState({ name_status: false });
                }
                else if (value.length > 50) {
                    name_err = "طول مجاز برای این فیلد حداکثر ۵۰ کاراکتر است";
                    this.setState({ name_status: false });
                }
                else {
                    data_user.real_name = value;
                    this.setState({ name_status: true });
                }
                this.setState({ name_err });
                break;
            case "user-phone":
                if (value.length > 15) {
                    phone_err = "طول مجاز برای این فیلد حداکثر ۱۵ کاراکتر است";
                    this.setState({ phone_status: false });
                }
                else if (value.length < 10) {
                    phone_err = "طول مجاز برای این فیلد ۱۰ کاراکتر است";
                    this.setState({ phone_status: false });
                }
                else {
                    this.setState({ phone_status: true });
                    data_user.real_home_number = value;
                }
                this.setState({ phone_err });
                break;
            case "user-postal-code":
                if (value.length !== 10) {
                    post_err = "طول مجاز برای این فیلد ۱۰ کاراکتر است";
                    this.setState({ post_status: false });
                }
                else {
                    this.setState({ post_status: true });
                    data_user.real_postal_code = value;
                }
                this.setState({ post_err });
                break;
            case "user-address":
                if (value.length === 0) {
                    address_err = "این فیلد نمی تواند خالی باشد";
                    this.setState({ address_status: false });
                }
                else if (value.length > 250) {
                    address_err = "طول مجاز برای این فیلد حداکثر ۲۵۰ کاراکتر است";
                    this.setState({ address_status: false });
                }
                else {
                    data_user.real_address = value;
                    this.setState({ address_status: true });
                }
                this.setState({ address_err });
                break;
        }
        if (this.state.address_status && this.state.post_status && this.state.phone_status && this.state.name_status) {
            this.setState({ data_user });
        }
    }
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go_to = map_handler();
        this.setState({ go_to });
        const us_id = window.Telegram.WebApp.initData;
        axios
            .get(`https://daryaftyar.ir/storeV2/user_real_data/${final_id}`)
            .then((res) => {
                let data_user = this.state.data_user;
                data_user = res.data;
                //console.log(data_user)
                this.setState({ data_user });
            })
            .catch((err) => console.log(err));
        
    }
    submitUser = (e) => {
        const { name_status, phone_status, post_status, address_status } = this.state;
        if ((name_status&& phone_status&& post_status&& address_status)) {
            this.setState({ pause: true });
            axios
                .patch(`https://daryaftyar.ir/storeV2/user_real_data/${final_id}`, this.state.data_user)
                .then((res) => {
                    let data_user = res.data;
                    this.setState({ url: "cart-final" });
                    this.setState({ pause: false });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    render() {
        return (
            <>
                <div className="user-data-page">
                    <div className="header">
                        <BackBtn go={this.state.go_to } />
                        <div className="page-title">
                            تکمیل اطلاعات شخصی
                        </div>
                        <div className="text">
                            برای ادامه دادن فرایند خرید لطفا اطلاعات زیر را کامل کنید.
                        </div>
                    </div>
                    <div className="inputs-wrapper">
                        <div className="input-wrapper">
                            <div className="label-and-input">
                                <img src={userIcon} alt="" />
                                <input
                                    name="user-name"
                                    type="text" id="user-name"
                                    onInput={(e) => this.changeHandler(e)}
                                    placeholder={this.state.data_user.real_name ? this.state.data_user.real_name : "نام و نام خانوداگی"}
                                    className="user-data-inp"
                                />
                            </div>
                            <div className={this.state.name_err ? "error-loader show-err" : "error-loader"}>
                                {this.state.name_err}
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <div className="label-and-input">
                                <img src={phoneIcon} alt="" />
                                <input
                                    name="user-phone"
                                    type="number"
                                    id="user-phone"
                                    onInput={(e) => this.changeHandler(e)}
                                    placeholder={this.state.data_user.real_home_number ? this.state.data_user.real_home_number : "شماره منزل"}
                                    className="user-data-inp"
                                />
                            </div>
                            <div className={this.state.phone_err ? "error-loader show-err" : "error-loader"}>
                                {this.state.phone_err}
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <div className="label-and-input">
                                <img src={postIcon} alt="" />
                                <input
                                    name="user-postal-code"
                                    type="number"
                                    id="user-postal-code"
                                    onInput={(e) => this.changeHandler(e)}
                                    placeholder={this.state.data_user.real_postal_code ? this.state.data_user.real_postal_code : "کدپستی"}
                                    className="user-data-inp"
                                />
                            </div>
                            <div className={this.state.post_err ? "error-loader show-err" : "error-loader"}>
                                {this.state.post_err}
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <div className="label-and-input">
                                <img src={addressIcon} alt="" />
                                <textarea
                                    name="user-address"
                                    id="user-address"
                                    cols="30"
                                    rows="5"
                                    onInput={(e) => this.changeHandler(e)}
                                    placeholder={this.state.data_user.real_address ? this.state.data_user.real_address : "آدرس"}
                                    className="user-data-inp"
                                ></textarea>
                            </div>
                            <div className={this.state.address_err ? "error-loader show-err" : "error-loader"}>
                                {this.state.address_err}
                            </div>
                        </div>
                    </div>
                    {this.state.url ?
                        <div className='sucsees-data'>
                            اطلاعات با موفقیت ثبت شد برای ادامه روی دکمه کلیک کنید
                        </div>
                        :
                        <></>
                    }
                    {!this.state.url ?
                        <div className="btns-wrapper">
                            <button className={(this.state.name_status&& this.state.phone_status&& this.state.post_status&& this.state.address_status) ? "submit-user-data":"submit-user-data dis" } onClick={(e) => { this.submitUser(e) }}>
                                ثبت اطلاعات
                            </button>
                        </div>
                        :
                        <div className="btns-wrapper link">
                            <Link to={this.state.url} className="submit-user-data">
                                ادامه
                            </Link>
                        </div>}
                </div>
                <FooterBot cart_count={this.state.cart ? this.state.cart.cart_details.length : 0} />
                {this.state.pause ?
                    <Loading pause={true} />
                    :
                    <></>}
            </>
        );
    }
}
 
export default UserForm;