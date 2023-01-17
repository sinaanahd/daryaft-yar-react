import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SampleFooter from '../sample/sample-footer';
import SampleHeader from '../sample/sample-header';
import topPom from "../../../../assets/images/website/snow-icon.png";
import bottomPom from "../../../../assets/images/website/trees-rec-icon.png";
import topLeaf from "../../../../assets/images/website/snow-half-icon.png";
import bottomLeaf from "../../../../assets/images/website/trees-icon.png";
import phoneIcon from "../../../../assets/images/phone-icon.png";
import axios from 'axios';
class Clogin extends Component {
    state = {
        condition: false,
        err_msg: "شماره باید با ۰۹ شروع شود",
        has_err: true,
        phone_number: "",
        pause: true,
        url: "",
        len: 4,
        confirm_code: "",
        code_arr: [1, 1, 1, 1],
        code_err : false,
    } 
    handle_user = (target) => {
        if (target.value.startsWith("09")) {
            if (target.value.length === 11) {
                this.setState({ has_err: false  , phone_number : target.value});
            }
            else {
                this.setState({ err_msg: "شماره باید ۱۱ رقم باشد" , has_err : true });
            }
        }
        else {
            this.setState({ err_msg: "شماره باید با ۰۹ شروع شود" , has_err : true });
        }
    }
    handle_check_code = () => {
        let code_arr = this.state.code_arr;
        // code_arr = code_arr.reverse();
        let code_str = "";
        code_arr.forEach(c => code_str += c);
        if (code_str === this.state.confirm_code) {
            this.setState({ condition: true , code_err : false  });
        }
        else {
            this.setState({ code_err: true });
        }
    }
    handle_small_input = (e, num) => {
        let len = this.state.len;
        if (num !== len - 1) {
            document.querySelector(`#digit-${num + 1}`).focus();
        }
        if (e.target.value > 1) {
            e.target.value = e.target.value[0];
        }
        let code_arr = this.state.code_arr;
        code_arr[num] = e.target.value;
        this.setState({ code_arr });
    }
    get_user = () => {
        axios
            .get(`https://daryaftyar.ir/backend/api/verify_phone_number/${this.state.phone_number}`)
            .then(res => {
                this.setState({ pause: false });
                let answer = res.data;
                // if (answer.verification_code.length === 5) {
                //     this.setState({ len: 5 });
                //     this.setState({code_arr : [1,1,1,1,1]})
                // }
                console.log(res.data);
                this.setState({ confirm_code: answer.verification_code });
                if (answer.been_before) {
                    this.setState({ url: "./campaign" });
                    axios
                        .get(`https://daryaftyar.ir/backend/api/user/${answer.user_id}`)
                        .then(res => {
                            let user = res.data;
                            localStorage.setItem("user", JSON.stringify(user));
                        })
                        .catch(err => alert(err.message));
                }
                else {
                    this.setState({ url: "./Csingup" });
                }
            })
            .catch(err => alert(err.message));
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
                                onInput={({ target }) => {
                                    this.handle_user(target);
                                }}
                            />
                            {
                                this.state.has_err
                                    ?
                                    <span className="error">
                                        {this.state.err_msg}
                                    </span>
                                    :
                                    <></>
                            }
                        </div>
                        <span
                            className="submit"
                            onClick={() => { this.get_user() }}
                        >
                            ثبت
                        </span>
                        {this.state.has_err ?
                            <></> :
                            this.state.pause ?
                                <></>
                                :
                                <div className="confirm-code">
                                    <p>
                                        کد تایید ارسال شده را وارد نمایید
                                    </p>
                                    <span className="inputs-wrapper">
                                        <input
                                            type="number"
                                            name="digit-0"
                                            id="digit-0"
                                            onInput={(e) => {
                                                this.handle_small_input(e, 0);
                                            }}
                                        />
                                        <input
                                            type="number"
                                            name="digit-1"
                                            id="digit-1"
                                            onInput={(e) => {
                                                this.handle_small_input(e, 1);
                                            }}
                                        />
                                        <input
                                            type="number"
                                            name="digit-2"
                                            id="digit-2"
                                            onInput={(e) => {
                                                this.handle_small_input(e, 2);
                                            }}
                                        />
                                        <input
                                            type="number"
                                            name="digit-3"
                                            id="digit-3"
                                            onInput={(e) => {
                                                this.handle_small_input(e, 3);
                                            }}
                                        />
                                        {this.state.len === 5 ? <input
                                            type="number"
                                            name="digit-4"
                                            id="digit-4"
                                            onInput={(e) => {
                                                this.handle_small_input(e, 4);
                                            }}
                                        /> : <></>}
                                    </span>
                                    {this.state.condition ?
                                        <>
                                            <Link
                                                to={this.state.url}
                                                className="confirm"
                                            >
                                                ادامه
                                            </Link>
                                            {this.state.code_arr ?
                                                <span className='code_success'>
                                                    کد وارد شده صحیح است
                                                </span>
                                                :
                                                <></>
                                            }
                                        </>
                                        :
                                        <>
                                            <span
                                                className="confirm"
                                                onClick={() => { this.handle_check_code() }}
                                            >
                                                تایید
                                            </span>
                                            {this.state.code_arr ?
                                                <span className='code_err'>
                                                    کد وارد شده صحیح نمی باشد
                                                </span>
                                                :
                                                <></>
                                            }
                                        </>
                                    }
                                </div>
                        }
                    </div>
                    <img src={bottomLeaf} className="bottom-right" />
                    <img src={bottomPom} className="bottom-left" />
                </div>
                <SampleFooter />
            </>
            
        );
    }
}
 
export default Clogin;