import React, { Component } from 'react';
import coin_icon from "../../assets/images/coin-icon.png";
import wallet_icon from "../../assets/images/wallet-icon.png";
import axios from 'axios';
import { Link } from 'react-router-dom';
import split_in_three from '../functions/spilit_in_three';
import LittleLoading from '../reusables/little-loading';
class ShopHeader extends Component {
    state = { 
        user: [],
    } 
    componentDidMount() {
    }
    render() { 
        const { user } = this.props;
        return (
            <header className="header">
                <Link to="/bot/coin" className="coin-wrapper">
                    <img src={coin_icon} alt="coin-img" className="coin-img" loading="lazy" />
                    <span className="coin-count">
                        {user.coin ? split_in_three(user.coin ): <LittleLoading />}
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
                            {user.amount ? split_in_three(user.amount) : <LittleLoading />}
                        </bdi>
                    </span>
                </Link>
            </header>
        );
    }
}
 
export default ShopHeader;