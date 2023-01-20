import axios from 'axios';
import React, { Component } from 'react';
import phoneImg from "../../../../assets/images/phone-icon.png";
import LittleLoading from '../../../reusables/little-loading';
import passImg from "../../../../assets/images/website/key-icon.png";
class Login extends Component {
    state = { 
        err: true,
        err_msg: "شماره باید با ۰۹ شروع بشه",
        phone_number: false,
        pause : false,
    }
    handle_user = (target) => {
        if (target.value.startsWith("09")) {
            if (target.value.length === 11) {
                this.setState({ err: false  , phone_number : target.value});
            }
            else {
                this.setState({ err_msg: "شماره باید ۱۱ رقم باشد" , has_err : true });
            }
        }
        else {
            this.setState({ err_msg: "شماره باید با ۰۹ شروع شود" , has_err : true });
        }
    }
    check_user = () => {
        this.setState({ pause: true });
        axios
            .get(`https://daryaftyar.ir/backend/api/verify_phone_number/${this.state.phone_number}`)
            .then(res => {
                this.setState({ pause: false });
                let answer = res.data;
                localStorage.setItem("answer", JSON.stringify(answer));
                window.location.href = window.location.href.replace("Login" , "verification-code")
            })
            .catch(err => alert(err.message));
    }
    
    render() { 
        return (
            <div className="login-col">
                <h1>
                    ورود
                </h1>
                <div className="forms-wrapper">
                    <span className="input-wrapper">
                        <img src={phoneImg} alt="" />
                        <input
                            type="number"
                            placeholder='شماره تلفن'
                            onInput={(e)=>{this.handle_user(e.target)}} />
                    </span>
                    {/* <span className="input-wrapper">
                        <img src={passImg} alt="" />
                        <input type="password" placeholder='پسورد' />
                    </span> */}
                    {
                        this.state.err ?
                            <span className="error">
                                {this.state.err_msg}
                            </span>    
                            :
                            <></>
                    }
                </div>
                {
                    !this.state.err ?
                        <span
                            className="btn-submit"
                            onClick={() => { this.check_user() }}
                        >
                            {
                                this.state.pause ? 
                                    <LittleLoading />
                                    :
                                    "ورود"

                        }
                        </span>
                        :
                        <></>
                }
            </div>
        );
    }
}
 
export default Login;