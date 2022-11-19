import React, { Component } from 'react';
import coin_icon from "../../assets/images/coin-icon.png";
import wallet_icon from "../../assets/images/wallet-icon.png";
import axios from 'axios';
import { Link } from 'react-browser-router';
import split_in_three from '../functions/spilit_in_three';
class ShopHeader extends Component {
    state = { 
        user: [],
    } 
    componentDidMount() {
        let user = [];
        axios
            .get("https://daryaftyar.ir/storeV2/user/341393410")
            .then((res) => {
                user = res.data;
                this.fill_user_data(user);
            })
            .catch(err => console.log(err));
    }
    fill_user_data = (data) => {
        this.setState({user: data});
    }
    render() { 
        return (
            <header className="header">
                <Link to="/bot/coin" className="coin-wrapper">
                    <img src={coin_icon} alt="coin-img" className="coin-img" loading="lazy" />
                    <span className="coin-count">
                        {this.state.user.coin ? split_in_three(this.state.user.coin ): 0}
                    </span>
                </Link>
                <div className="books-page-title">
                    کتاب ها
                </div>
                <Link to="/bot/wallet" className="wallet-wrapper">
                    <img src={wallet_icon} alt="wallet-img" className="wallet-img" loading="lazy" />
                    <span className="wallet-count">
                        T
                        &nbsp;
                        <bdi>
                            {this.state.user.amount ? split_in_three(this.state.user.amount) : 0}
                        </bdi>
                    </span>
                </Link>
            </header>
        );
    }
}
 
export default ShopHeader;