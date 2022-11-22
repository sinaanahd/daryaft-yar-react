import React, { Component, Fragment } from 'react';
import footer1 from "../../../src/assets/images/footer-1.png";
import footer2 from "../../../src/assets/images/footer-2.png";
import footer3 from "../../../src/assets/images/user-icon.png";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
class FooterBot extends Component {
    state = {
        // cart_details: [],
    } 
    componentDidMount() {
        // let cart = [];
        // axios
        //     .get("https://daryaftyar.ir/storeV2/cart/341393410")
        //     .then((res) => {
        //         cart = res.data;
        //         this.fill_data(cart)
        //     })
        //     .catch(err => console.log(err));
    }
    // fill_data = (data) => {
    //     this.setState({cart_details: data.cart_details});
    // }
    render() { 
        const { cart_count } = this.props;
        return (
            <>
                <a href="#top" className="move-to-top">
                    <FaAngleDoubleUp/>
                </a>
                <footer>
                    <Link to="/bot/cart" className="footer-col footer-col-1">
                        <span className="icon-footer">
                            <img src={footer1} alt="" className="footer-icon-img" />
                        </span>
                        <span className="footer-title">
                            سبد خرید
                        </span>
                        <span className="cart-item-number">{ cart_count }</span>
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
            </>
        );
    }
}
 
export default FooterBot;