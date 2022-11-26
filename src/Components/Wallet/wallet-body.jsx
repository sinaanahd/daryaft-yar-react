import React, { Component } from 'react';
import split_in_three from '../functions/spilit_in_three';
import checkIcon from "../../assets/images/check-icon.png";
import LittleLoading from '../reusables/little-loading';
class WalletBody extends Component {
    state = {  } 
    render() { 
        const { state } = this.props;
        return (
            <>
                <div className="wallet-page-title">
                    کیف پول
                </div>
                <div className="main-content">
                    <div className="wallet-title">
                        <span className="text">
                            اعتبار کیف پول
                        </span>
                        <span className="img-wrapper">
                            <img src={checkIcon} alt="" />
                        </span>
                    </div>
                    <div className="wallet-info">
                        <div className="wallet-amount">
                            <span className="price">
                                {state.user.amount ?
                                    split_in_three(state.user.amount) :<LittleLoading />
                                }
                            </span>
                            تومان
                        </div>
                        <div className="wallet-days-left">
                            <span className="days">
                                {state.user.days_left ?
                                    state.user.days_left
                                    :
                                    <LittleLoading/>
                                }
                            </span>
                            روز مهلت استفاده
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default WalletBody;