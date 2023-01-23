import React, { Component } from 'react';
import withWebsiteData from '../../../hoc/with-website-data';
import SiteFooter from '../../footer/site-footer';
import SiteHeader from '../../header/header';
import userIcon from '../../../../assets/images/user-filed-icon.png';
import phoneIcon from '../../../../assets/images/phone-icon.png';
import axios from 'axios';
import { AiOutlineCheck } from "react-icons/ai";
class SignUp extends Component {
    state = { 
        agreed_to_terms: false,
        grade: 10,
        major: 1,
        name: "",
        phone: JSON.parse(localStorage.getItem("phone_number")),
        err_msg: "",

    } 
    handle_agree = () => {
        const agreed_to_terms = !this.state.agreed_to_terms;
        this.setState({ agreed_to_terms });
    }
    hanle_selection = (kind, num) => {
        if (kind === "m") {
            this.setState({ major: num });
        }
        else if (kind === "g") {
            this.setState({ grade: num });
        }
    }
    grade_convert = (num) => {
        if (num === 10) {
            return "دهم";
        }
        else if (num === 11 ) {
            return "یازدهم";
        }
        else if (num === 12) {
            return "دوازدهم";
        }
        else if (num === 13) {
            return "کنکور";
        }
        else if (num === 14) {
            return "فارغ التحصیل";
        }
    }
    major_convert = (num) => {
        if (num===1) {
            return "ریاضی";
        }
        else if (num===2) {
            return "تجربی";
        }
        else if (num===3) {
            return "انسانی";
        }
        else if (num===4) {
            return "هنر";
        }
    }
    handle_name = (target) => {
        if (target.value.length > 2) {
            this.setState({ name: target.value , err_msg : "" });
        }
        else {
            this.setState({ err_msg: "نام وارد شده کوتاه است" });
        }
    }
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
            major
        }
        axios
            .post(`https://daryaftyar.ir/backend/api/register_user` , obj)
            .then(res => {
                //console.log(res.data);
                let data = res.data;
                axios
                    .get(`https://daryaftyar.ir/backend/api/user/${data.user_id}`)
                    .then(res => {
                        let user = res.data;
                        localStorage.setItem("user", JSON.stringify(user));
                        localStorage.removeItem("answer");
                        localStorage.removeItem("phone_number");
                        window.location.href = window.location.href.replace("signUp" , "home");
                    })
                    .catch(err => alert(err.message));
            })
            .catch(err => console.log(err));
    }
    render() { 
        const {
            cart,
            user,
            data,
            books,
        } = this.props;
        return (
            <>
                <SiteHeader
                    cart_count={cart ? cart.cart_summary.items_count : 0}
                    name={user ? user.name : "ورود / ثبت نام"}
                    is_logged_in={data.is_logged_in}
                    books = {books}
                />
            <div className="website-sing-up yalda-sing-up mm-width">
                    <div className="main-content">
                        <h1 className="title">
                            ثبت نام
                        </h1>
                        <div className="input-wrapper">
                            <img src={userIcon} alt="" />
                            <input
                                type="text"
                                className="enter-mobile"
                                placeholder='نام و نام خانوادگی'
                                onInput={({target})=>{this.handle_name(target)}}
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
                            onClick={()=>{this.hanle_selection("g",10)}}
                        >
                            دهم
                        </span>
                        <span
                            className={this.state.grade === 11 ? "option selected" : "option"}
                            onClick={()=>{this.hanle_selection("g",11)}}
                        >
                            یازدهم
                        </span>
                        <span
                            className={this.state.grade === 12 ? "option selected" : "option"}
                            onClick={()=>{this.hanle_selection("g",12)}}
                        >
                            دوازدهم
                        </span>
                        <span
                            className={this.state.grade === 13 ? "option selected" : "option"}
                            onClick={()=>{this.hanle_selection("g",13)}}
                        >
                            کنکور
                        </span>
                        <span
                            className={this.state.grade === 14 ? "option selected" : "option"}
                            onClick={()=>{this.hanle_selection("g",14)}}
                        >
                            فارغ التحصیل
                        </span>
                    </div>
                    <div className="grades-wrapper">
                        <span
                            className={this.state.major === 1 ? "option selected" : "option"}
                            onClick={()=>{this.hanle_selection("m",1)}}
                        >
                            ریاضی
                        </span>
                        <span
                            className={this.state.major === 2 ? "option selected" : "option"}
                            onClick={()=>{this.hanle_selection("m",2)}}
                        >
                            تجربی
                        </span>
                        <span
                            className={this.state.major === 3 ? "option selected" : "option"}
                            onClick={()=>{this.hanle_selection("m",3)}}
                        >
                            انسانی
                        </span>
                        <span
                            className={this.state.major === 4 ? "option selected" : "option"}
                            onClick={()=>{this.hanle_selection("m",4)}}
                        >
                            هنر
                        </span>
                    </div>
                    <span
                    className="submit"
                    onClick={()=>{this.make_user()}}
                    >
                        ثبت نام
                    </span>
                    {this.state.err_msg !== "" ? 
                        <span className="error">
                            {this.state.err_msg}
                        </span>
                        :
                        <></>
                    }
                </div>
                    <SiteFooter
                    pause={data.pause}
                    error={data.error}
                />
            </>
        );
    }
}
 
export default withWebsiteData(SignUp);