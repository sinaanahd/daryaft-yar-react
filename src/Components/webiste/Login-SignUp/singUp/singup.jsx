import React, { Component } from 'react';
import userImg from "../../../../assets/images/user-filed-icon.png";
import phoneImg from "../../../../assets/images/phone-icon.png";
import passImg from "../../../../assets/images/website/key-icon.png";
import { AiOutlineCheck } from "react-icons/ai";
class SignUp extends Component {
    state = { 
        agreed_to_terms : false,
    } 
    handle_agree = () => {
        const agreed_to_terms = !this.state.agreed_to_terms;
        this.setState({ agreed_to_terms });
    }
    render() { 
        return (
            <div className="signUp">
                <h1>
                    ثبت نام
                </h1>
                <div className="forms-wrapper">
                    <span className="input-wrapper">
                        <img src={userImg} alt="" />
                        <input type="text" placeholder='نام و نام خانوادگی' />
                    </span>
                    <span className="input-wrapper">
                        <img src={phoneImg} alt="" />
                        <input type="number" placeholder='شماره تلفن' />
                    </span>
                    <span className="input-wrapper">
                        <img src={passImg} alt="" />
                        <input type="password" placeholder='پسورد' />
                    </span>
                    <span className={
                        this.state.agreed_to_terms
                            ?
                            "agree-to-terms agreed"
                            :
                            "agree-to-terms"
                    }>
                        <AiOutlineCheck
                            onClick={()=>{this.handle_agree()}}
                        />
                        <span className='empty'
                            onClick={()=>{this.handle_agree()}}
                        >

                        </span>
                        <p>
                            با قوانین و مقررات موافقم
                        </p>
                    </span>
                </div>
                <span className="btn-submit">
                    ثبت نام
                </span>
            </div>
        );
    }
}
 
export default SignUp;