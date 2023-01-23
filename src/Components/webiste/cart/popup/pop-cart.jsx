import React, { Component } from 'react';
import LittleLoading from '../../../reusables/little-loading';
import cross from '../../../../assets/images/website/cross-icon.png';
import userIcon from '../../../../assets/images/website/user-icon-pp.png';
import address from '../../../../assets/images/website/building-icon-pp.png';
import post from '../../../../assets/images/website/boxes-icon-pp.png';
import phone from '../../../../assets/images/website/phone-icon-pp.png';
import axios from 'axios';

class PopDetails extends Component {
    state = { 
        err: {
            name: false,
            post: false,
            address: false,
            phone: false,
        },
        pause: false,
        data_user: {
            real_address: false,
            real_home_number: false,
            real_name: false,
            real_postal_code: false,
        },
    } 
    handle_inputs = (e, kind) => {
        const { value } = e.target;
        const err = this.state.err;
        const data_user = {... this.state.data_user};
        if (value.length === 0) {
            err[kind] = `فیلد ${kind} نباید خالی باشد`
        }
        else {
            err[kind] = false;
        }
        switch (kind) {
            case "name":
                if (e.target.value.length < 3) {
                    err[kind] = "نام وارد شده کوتاه است"
                }
                else {
                    data_user.real_name = e.target.value;
                }
                break;
            case "post":
                if (e.target.value.length !== 10) {
                    err[kind] = 'کد پستی باید ۱۰ رقم باشد'
                }
                else {
                    data_user.real_postal_code = e.target.value;
                }
                break;
            case "phone":
                if (e.target.value.length !== 11) {
                    err[kind] = "شماره تلفن ثابت باید ۱۱ رقم باشد";
                }
                else {
                    data_user.real_home_number = e.target.value;
                }
                break;
            case "address":
                if (e.target.value.length < 6) {
                    err[kind] = "آدرس وارد شده کوتاه است";
                }
                else {
                    data_user.real_address = e.target.value;
                }
        }

        this.setState({ err , data_user});
    }
    send_data = () => {
        const errors = { ...this.state.err };
        let status = true;
        const { user } = this.props;
        for (const pr in errors) {
            if (errors[pr]) {
                status = false;
            }
        }
        if (status) {
            this.setState({ pause: true });
            axios
                .patch(`https://daryaftyar.ir/backend/api/user_real_data/${user.user_id}`, this.state.data_user)
                .then((res) => {
                    let data = res.data;
                    const new_user_data = { ...user };
                    new_user_data.real_address = data.real_address;
                    new_user_data.real_home_number = data.real_home_number;
                    new_user_data.real_name = data.real_name;
                    new_user_data.real_postal_code = data.real_postal_code;
                    localStorage.setItem("user", JSON.stringify(new_user_data));
                    this.setState({ pause: false });
                    this.props.close_pop_up();
                    this.props.get_user(user.user_id);
                    this.props.get_cart(user.user_id)
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({ pause: false });
                });
        }
    }
    render() { 
        const {
            close_pop_up,
            user
        } = this.props;
        return (
            <div className="pop-up-wrapper">
                <div className="title-and-cross">
                    <h4 className="title">
                        تکمیل اطلاعات جهت ادامه خرید
                    </h4>
                    <img
                        src={cross}
                        alt=""
                        className="cross"
                        onClick={() => { close_pop_up() }}
                    />
                </div>
                <div className="inputs-wrapper">
                    <span className="input-wrapper">
                        <img src={userIcon} alt="" />
                        <input 
                            onInput={(e)=>{this.handle_inputs(e,"name")}}
                            type="text"
                            placeholder='نام و نام خانوادگی'
                        />
                    </span>
                    <span className="input-wrapper">
                        <img src={post} alt="" />
                        <input 
                            onInput={(e)=>{this.handle_inputs(e,"post")}}
                            type="number"
                            placeholder='کدپستی'
                        />
                    </span>
                    <span className="input-wrapper">
                        <img src={phone} alt="" />
                        <input 
                            onInput={(e)=>{this.handle_inputs(e,"phone")}}
                            type="number"
                            placeholder='شماره تلفن ( به همراه کد شهر )'
                        />
                    </span>
                    <span className="input-wrapper">
                        <img src={address} alt="" />
                        <textarea
                            type="text"
                            placeholder='آدرس'
                            onInput={(e)=>{this.handle_inputs(e,"address")}}
                        />
                    </span>
                </div>
                <div className="error-wrapper">
                    {
                        this.state.err.name ?
                            this.state.err.name
                            :
                            this.state.err.post ?
                                this.state.err.post
                                :
                                this.state.err.phone ?
                                    this.state.err.phone
                                    :
                                    this.state.err.address ?
                                        this.state.err.address
                                        :
                                        <></>
                    }
                </div>
                <div className="sumbit-wrapper">
                    <span
                        className="submit"
                        onClick={()=>this.send_data()}
                    >
                        {
                            this.state.pause ? 
                                <LittleLoading />
                                :
                                "تایید اطلاعات و ادامه"
                        }
                    </span>
                </div>
            </div>
        );
    }
}
 
export default PopDetails;