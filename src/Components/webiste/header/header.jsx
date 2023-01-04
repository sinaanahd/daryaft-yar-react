import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  account_icon  from "../../../assets/images/website/account-icon.png"
import mainLogo from "../../../assets/images/website/main-logo.png";
import magnifier from "../../../assets/images/website/magnifier-icon.png";
import cartIcon from "../../../assets/images/website/cart-icon.png";
//import { FaAngleDown } from "react-icons/fa";
import arrowDown from "../../../assets/images/website/arrow-down-icon.png";
class SiteHeader extends Component {
    state = { 
    } 
    componentDidMount() {
       
    }
    render() { 
        const { cart_count, name , is_logged_in} = this.props;
        return (
            <header className="site-header">
                <div className="first-row">
                    <div className="btns-wrapper">
                        <span className="enter-btn-wrapper header-btn">
                            <Link to="/Login" >
                                {!is_logged_in ?
                                    "ثبت‌نام / ورود"
                                    :
                                    <>
                                        <span className='text'>
                                            {name}
                                        </span>
                                        <span className="btn-logo">
                                            <img src={account_icon} alt="ورود کاربر" />
                                        </span>
                                    </>
                                }
                            </Link>
                        </span>
                        <span className="header-btn cart-btn">
                            <Link to="/Cart">
                                <span className="cart-icon">
                                    <img src={cartIcon} alt="سبد خرید" />
                                </span>
                                <span className="cart-text">
                                    سبد خرید
                                </span>
                                <span className="cart-count">
                                    {cart_count}
                                </span>
                            </Link>
                        </span>
                    </div>
                    <div className="logo-wrapper">
                        <Link to="/home">
                            <img src={mainLogo} alt="" />
                        </Link>
                    </div>
                    <div className="search-wrapper">
                        <input type="text" placeholder='جستجو' />
                        <span className="header-search-icon">
                                <img src={magnifier} alt="جستجو" />
                        </span>
                    </div>
                </div>
                <div className="second-row">
                    <nav>
                        <ul className='main-nav'>
                            <li className="has-sub">
                                <Link to="/#">
                                    رشته
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    پایه
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    انتشارات
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    دروس
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    راهنمای خرید
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    نحوه ارسال
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                            <li className="has-sub">
                                <Link to="/#">
                                    تماس با ما
                                    <img src={arrowDown} alt="فلش پایین" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default SiteHeader;