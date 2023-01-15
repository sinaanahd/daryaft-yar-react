import React, { Component } from 'react';
import cross from '../../../../assets/images/website/cross-icon.png';
import user from '../../../../assets/images/website/user-icon-pp.png';
import address from '../../../../assets/images/website/building-icon-pp.png';
import post from '../../../../assets/images/website/boxes-icon-pp.png';
import phone from '../../../../assets/images/website/phone-icon-pp.png';

class PopDetails extends Component {
    state = { 
        err: {
            name: false,
            post: false,
            address: false,
            phone : false,
        }
    } 
    handle_inputs = (e, kind) => {
        const { value } = e.target;
        const err = this.state.err;
        if (value.length === 0) {
            err[kind] = `فیلد ${kind} نباید خالی باشد`
        }
        else {
            err[kind] = false;
        }
        if (kind === "name") {
            
        }
        switch (kind) {
            case "name":
                break;
        }

        this.setState({ err });
    }
    render() { 
        const { close_pop_up } = this.props;
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
                        <img src={user} alt="" />
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
                            placeholder='تلفن ثابت'
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
                    <span className="submit">
                        تایید اطلاعات و ادامه
                    </span>
                </div>
            </div>
        );
    }
}
 
export default PopDetails;