import React, { Component, Fragment } from 'react';
import footer1 from "../../../src/assets/images/footer-1.png";
import footer2 from "../../../src/assets/images/footer-2.png";
import footer3 from "../../../src/assets/images/user-icon.png";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LittleLoading from '../reusables/little-loading';
import Errors from '../reusables/errors';
class FooterBot extends Component {
    state = {
    } 
    render() { 
        const { cart_count  , error} = this.props;
        return (
            <>
                <a href="#top" className="move-to-top">
                    <FaAngleDoubleUp/>
                </a>
                <footer className='bot-footer'>
                    <Link to="/bot/cart" className="footer-col footer-col-1">
                        <span className="icon-footer">
                            <img src={footer1} alt="" className="footer-icon-img" />
                        </span>
                        <span className="footer-title">
                            سبد خرید
                        </span>
                        <span className="cart-item-number">{ cart_count==="loading" ? <LittleLoading /> : cart_count }</span>
                    </Link>
                    <Link to="/bot/shop" className="footer-col footer-col-2">
                        <span className="icon-footer">
                            <img src={footer2} alt="" className="footer-icon-img" />
                        </span>
                        <span className="footer-title">
                            خانه
                        </span>
                    </Link>
                    <Link to="/bot/wallet" className="footer-col footer-col-3">
                        <span className="icon-footer">
                            <img src={footer3} alt="" className="footer-icon-img" />
                        </span>
                        <span className="footer-title">
                            حساب کاربری
                        </span>
                    </Link>
                </footer>
                {error ? <Errors error={error } /> : <></>}
            </>
        );
    }
}
 
export default FooterBot;