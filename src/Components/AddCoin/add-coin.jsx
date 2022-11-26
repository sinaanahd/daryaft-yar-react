import React, { Component } from 'react';
import withBackEndData from '../hoc/with-back-end-data';
import BackBtn from '../reusables/back';
import find_loc from '../functions/find-loc';
import FooterBot from '../shop-bot/botFooter';
import save_local_address from '../functions/save_local_address';
import map_handler from '../functions/map_handler';
import CoinAmount from './coin_amount';
import coin_image from "../../assets/images/coin-more.jpeg";
import Loading from '../reusables/loading';
class AddCoin extends Component {
    state = {
        go:"",
    } 
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go = map_handler();
        this.setState({ go });
        let selected_coin = this.props.state.selected_coin;
        this.props.handle_coin(selected_coin);
    }
    render() { 
        const { state , handle_coin } = this.props;
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
                            {state.coin_amount.map(a => <CoinAmount
                                amount={a}
                                handle_coin={handle_coin}
                                key={a.price}
                                selected={state.selected_coin}
                            />)}
                        </div>
                        <div className="image-wrapper">
                            <img src={coin_image} loading="lazy" alt="" />
                        </div>
                    </div>
                    <div className="coin-footer">
                        <a href={state.coin_url} target="_blank" className="buy-coin-btn">
                            خرید سکه
                        </a>
                    </div>
                </div>
                <FooterBot cart_count={state.cart ? state.cart.cart_details.length : 0} />
                {state.pause ? <Loading pause={state.pause} /> : <></>}
            </>
        );
    }
}
 
export default withBackEndData(AddCoin);