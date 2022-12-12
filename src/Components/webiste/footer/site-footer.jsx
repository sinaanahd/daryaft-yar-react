import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/website/main-logo.png";
import whatsappLogo from "../../../assets/images/website/whats-app.png";
import telegramLogo from "../../../assets/images/website/instagram.png";
import instagramLogo from "../../../assets/images/website/telegram.png";
class SiteFooter extends Component {
    state = {  } 
    render() { 
        return (
            <footer className='site-footer mm-width'>
                <div className="main-wrapper">
                    <div className="footer-col footer-col-1">
                        <h3 className="footer-title">
                            راهنمای خرید
                        </h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="./#">
                                    نحوه ی ثبت سفارشات
                                </Link>
                            </li>
                            <li>
                                <Link to="./#">
                                    مراحل ارسال سفارشات
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col footer-col-2">
                        <h3 className="footer-title">
                             خدمات مشتریان
                        </h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="./#">
                                    تخفیف‌ها
                                </Link>
                            </li>
                            <li>
                                <Link to="./#">
                                    نحوه بازگرداندن کالا
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col footer-col-3">
                        <h3 className="footer-title">
                            درباره ما 
                        </h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="./#">
                                    درباره ما
                                </Link>
                            </li>
                            <li>
                                <Link to="./#">
                                    تماس با ما
                                </Link>
                            </li>
                            <li>
                                <Link to="./#">
                                      پرسش های متداول
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col footer-col-4">
                        <img src={logo} alt="انتشارات دریافت" className='logo-footer'/>
                        <p className="follow-us-title">
                            ما را در شبکه های اجتماعی دنبال کنید
                        </p>
                        <span className="follow-icons-wrapper">
                            <span className="icon">
                                <img src={whatsappLogo} alt="واتسپ انتشارات دریافت" />
                            </span>
                            <span className="icon middle">
                                <img src={instagramLogo } alt="اینتستاگرام انتشارات دریافت" />
                            </span>
                            <span className="icon">
                                <img src={telegramLogo} alt="تلگرام انتشارات دریافت" />
                            </span>
                        </span>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default SiteFooter;