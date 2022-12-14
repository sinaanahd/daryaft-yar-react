import React, { Component } from 'react';
import find_loc from '../functions/find-loc';
import withBackEndData from '../hoc/with-back-end-data';
import CoinHeader from './coin-header';
import coinImg from '../../assets/images/coin-page-image.png';
import { Link } from 'react-router-dom';
import FooterBot from '../shop-bot/botFooter';
import save_local_address from '../functions/save_local_address';
import map_handler from '../functions/map_handler';
import LittleLoading from '../reusables/little-loading';

class Coin extends Component {
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
                <div className="coin-page-wrapper">
                    <CoinHeader go={this.state.go } />
                    <div className="coin-image-wrapper">
                        <img src={coinImg} className="coin image" alt="" />
                    </div>
                    <div className="expalin-text">
                        توضیحات
                    </div>
                    <div className="ways-to-add-coin-wrapper">
                        <div className="title">
                            راه های افزایش اعتبار کیف پول
                        </div>
                        <div className="text">

                        </div>
                    </div>
                    <div className="coin-count-wrapper">
                        <div className="coin-count-title">
                            تعداد سکه های حسابت
                        </div>
                        <div className="coin-count">
                            {state.user.coin ? state.user.coin : <LittleLoading />}
                        </div>
                    </div>
                    <Link className="add-more-coin" to="/bot/buy-coin">
                        افزایش سکه‌ها
                    </Link>
                </div>
                <FooterBot
                    cart_count={state.cart ? state.cart.cart_details.length : "loading"}
                    error={state.error}
                />
            </>
        );
    }
}
 
export default withBackEndData(Coin);