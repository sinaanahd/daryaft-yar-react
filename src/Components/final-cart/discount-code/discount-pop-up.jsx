import React, { Component } from 'react';
import { FaTimes } from "react-icons/fa";
import axios from 'axios';
// const us_id = window.Telegram.WebApp.initData;
// let final_id = "";
// if (us_id === "") {
//     final_id = "341393410";
// }
// else {
//     final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
// }
class DiscountPopUp extends Component {
    state = {
        code: "",
        display_message : false
    } 
    componentDidMount() {
    }
    handle_input = (e) => {
        this.setState({ code: e.target.value });
    }
    render() { 
        const { back ,data , handle_code , set_url} = this.props;
        return (
            <div className="discount-wrapper">
                <div className="contet-wrapper">
                    <span className="close-pop-up" onClick={()=>{back("discount-pop-up")}}>
                        <FaTimes />
                    </span>
                    <div className="text">
                        کد تخفیف خود را وارد کنید
                    </div>
                    <input
                        type="text"
                        className="discount-code-input"
                        placeholder="مثال : OFF-123"
                        onInput={(e)=>{this.handle_input(e)}}
                    />
                    {this.state.display_message ?
                        <span className="error-text s-1 s-2 s-3">
                            {data.cart.cart_summary.dis_code_details.status_message}
                        </span>
                        :
                        <></>
                    }
                    <span
                        className="submit-discount-btn"
                        onClick={() => {
                            handle_code(this.state.code);
                            this.setState({ display_message: true });
                        }}>
                        ثبت کد تخفیف
                    </span>
                </div>
            </div>
        );
    }
}
 
export default DiscountPopUp;