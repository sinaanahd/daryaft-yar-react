import React, { Component } from 'react';
import withWebsiteData from '../../../hoc/with-website-data';
import SiteFooter from '../../footer/site-footer';
import SiteHeader from '../../header/header';
import { Link } from 'react-router-dom';
import LittleLoading from '../../../reusables/little-loading';
import axios from 'axios';
class CodePage extends Component {
    state = { 
        answer: JSON.parse(localStorage.getItem("answer")) ? JSON.parse(localStorage.getItem("answer")) : false,
        code_arr: [1, 1, 1, 1],
        err: false,
        pause : false,
    } 
    componentDidMount() {
        if (!this.state.answer) {
            window.location.href = window.location.href.replace("verification-code" , "login");
        }
    }
    handle_small_input = (e, num) => {
        let len = this.state.answer.verification_code.length;
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
    handle_check_code = () => {
        this.setState({ pause: true });
        let code_arr = this.state.code_arr;
        let code_str = "";
        code_arr.forEach(c => code_str += c);
        if (code_str === this.state.answer.verification_code) {
            this.setState({ err: false });
            if (this.state.answer.been_before) {
                axios
                    .get(`https://daryaftyar.ir/backend/api/user/${this.state.answer.user_id}`)
                    .then(res => {
                        const user = res.data;
                        localStorage.setItem("user", JSON.stringify(user));
                        localStorage.removeItem("answer");
                        this.setState({ pause: false });
                        window.location.href = window.location.href.replace("verification-code" , "home")
                    })
                    .catch(err => {
                        alert(err.message);
                        console.log(err);
                    })
            }
            else {
                window.location.href = window.location.href.replace("verification-code" , "signUp")
            }
        }
        else {
            this.setState({ err : true });
        }
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
                    books={books}
                />
                <section className="confirm-page confirm-code">
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
                    </span>     
                    <span
                        className="confirm"
                        onClick={() => { this.handle_check_code() }}
                    >
                        {this.state.pause ? <LittleLoading /> : "تایید"}
                    </span>
                    {this.state.err ?
                        <span className='code_err'>
                            کد وارد شده صحیح نمی باشد
                        </span>
                        :
                        <></>
                    }
                </section>
                <SiteFooter
                    pause={data.pause}
                    error={data.error}
                />
            </>
        );
    }
}
 
export default withWebsiteData(CodePage);