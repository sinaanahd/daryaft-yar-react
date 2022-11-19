import React, { Component } from 'react';
import withBackEndData from '../hoc/with-back-end-data';
import BackBtn from '../reusables/back';
import find_loc from '../functions/find-loc';
import FooterBot from '../shop-bot/botFooter';
import save_local_address from '../functions/save_local_address';
import map_handler from '../functions/map_handler';
class AddCoin extends Component {
    state = {
        go:"",
    } 
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go = map_handler();
        this.setState({ go });
    }
    render() { 
        const { state } = this.props;
        return (
            <>
                <div className="buy-coin-page-wrapper">
                    <div className="header">
                        <div className="page-title">
                            خرید سکه
                        </div>
                        <BackBtn go={this.state.go} />
                    </div>
                    <div className="coin-choose-wrapper">
                        <div className="options-wrapper">
                            <div className="option option-1">
                                <span className="status active">

                                </span>
                                <span className="text">
                                    ۵۰ سکه - ۵۰۰۰تومان (ارزانترین)
                                </span>
                            </div>
                            <div className="option option-2">
                                <span className="status">
                    
                                </span>
                                <span className="text">
                                    ۱۵۰سکه - ۹۰۰۰تومان (محبوب‌ترین)
                                </span>
                            </div>
                            <div className="option option-3">
                                <span className="status">
                    
                                </span>
                                <span className="text">
                                    ۵۰۰سکه - ۱۹۰۰۰ (به صرفه‌ترین)
                                </span>
                            </div>
                        </div>
                        <div className="image-wrapper">
                            <img src="./assets/images/coin-more.jpeg" loading="lazy" alt="" />
                        </div>
                    </div>
                    <div className="coin-footer">
                        <div className="buy-coin-btn">
                            خرید سکه
                        </div>
                    </div>
                </div>
                <FooterBot cart_count={ state.cart ? state.cart.cart_details.length : 0 }/>
            </>
        );
    }
}
 
export default withBackEndData(AddCoin);