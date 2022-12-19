import React, { Component } from 'react';
import topPom from "../../../../assets/images/anar-bala.png";
import bottomPom from "../../../../assets/images/anar-paEn.png";
import topLeaf from "../../../../assets/images/barg-bala.png";
import bottomLeaf from "../../../../assets/images/barg-paEn.png";
import phoneIcon from "../../../../assets/images/phone-icon.png";
import userIcon from "../../../../assets/images/user-filed-icon.png";
import { Redirect } from 'react-router-dom';
import SampleFooter from '../sample/sample-footer';
import SampleHeader from '../sample/sample-header';
class YaldaSignUp extends Component {
    state = {} 
    componentDidMount() {
        // window.location.replace("/login")
    }
    render() { 
        return (
            <>
                <SampleHeader />
                <div className="yalda-sing-up mm-width">
                    <img src={topPom} className="top-right" />
                    <img src={topLeaf} className="top-left" />
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
                            />
                        </div>
                        <div className="input-wrapper">
                            <img src={phoneIcon} alt="" />
                            <input
                                type="number"
                                className="enter-mobile"
                                placeholder='شماره تلفن'
                            />
                        </div>
                    </div>
                    <div className="grades-wrapper">
                        <span className="option selected">
                            دهم
                        </span>
                        <span className="option">
                            یازدهم
                        </span>
                        <span className="option">
                            دوازدهم
                        </span>
                    </div>
                    <div className="grades-wrapper">
                        <span className="option selected">
                            ریاضی
                        </span>
                        <span className="option">
                            تجربی
                        </span>
                        <span className="option">
                            انسانی
                        </span>
                        <span className="option">
                            هنر
                        </span>
                    </div>
                    <span className="submit">
                        ثبت نام
                    </span>
                    <img src={bottomLeaf} className="bottom-right" />
                    <img src={bottomPom} className="bottom-left" />
                </div>
                <SampleFooter />
            </>
        );
    }
}
 
export default YaldaSignUp;