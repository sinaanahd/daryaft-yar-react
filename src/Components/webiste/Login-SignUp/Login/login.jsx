import React, { Component } from 'react';
import phoneImg from "../../../../assets/images/phone-icon.png";
import passImg from "../../../../assets/images/website/key-icon.png";
class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className="login-col">
                <h1>
                    ورود
                </h1>
                <div className="forms-wrapper">
                    <span className="input-wrapper">
                        <img src={phoneImg} alt="" />
                        <input type="text" placeholder='نام و نام خانوادگی'/>
                    </span>
                    <span className="input-wrapper">
                        <img src={passImg} alt="" />
                        <input type="password" placeholder='پسورد' />
                    </span>
                </div>
                <span className="btn-submit">
                    ورود
                </span>
            </div>
        );
    }
}
 
export default Login;