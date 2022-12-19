import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SampleFooter from '../sample/sample-footer';
import SampleHeader from '../sample/sample-header';
import topPom from "../../../../assets/images/anar-bala.png";
import bottomPom from "../../../../assets/images/anar-paEn.png";
import topLeaf from "../../../../assets/images/barg-bala.png";
import bottomLeaf from "../../../../assets/images/barg-paEn.png";
import phoneIcon from "../../../../assets/images/phone-icon.png";
class YaldaLogin extends Component {
    state = {
        condition: true,
    } 
    render() { 
        return (
            <>
                <SampleHeader />
                <div className="yalda-login mm-width">
                    <img src={topPom} className="top-right" />
                    <img src={topLeaf} className="top-left" />
                    <div className="main-content">
                        <h1 className="title">
                            ورود
                        </h1>
                        <div className="input-wrapper">
                            <img src={phoneIcon} alt="" />
                            <input
                                type="number"
                                className="enter-mobile"
                                placeholder='شماره تلفن'
                            
                            />
                        </div>
                        <span className="submit">
                            ثبت
                        </span>
                        <div className="confirm-code">
                            <p>
                                کد تایید ارسال شده را وارد نمایید
                            </p>
                            <span className="inputs-wrapper">
                                <input type="number" name="digit-1" id="digit-1" />
                                <input type="number" name="digit-2" id="digit-2" />
                                <input type="number" name="digit-3" id="digit-3" />
                                <input type="number" name="digit-4" id="digit-4" />
                            </span>
                            <Link
                                to={this.state.condition ? "./YsingUp" : "./"}
                                className="confirm"
                            >
                                تایید
                            </Link>
                        </div>
                    </div>
                    <img src={bottomLeaf} className="bottom-right" />
                    <img src={bottomPom} className="bottom-left" />
                </div>
                <SampleFooter />
            </>
            
        );
    }
}
 
export default YaldaLogin;