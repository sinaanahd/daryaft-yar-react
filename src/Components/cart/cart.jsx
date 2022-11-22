import React, { Component } from 'react';
import withCartData from '../hoc/with-cart';
import BackBtn from '../reusables/back';
import split_in_three from '../functions/spilit_in_three';
import deleteImg from "../../assets/images/trash-icon-btn.png";
import FooterBot from '../shop-bot/botFooter';
import EmptyCart from './empty-cart';
import CartItem from './cart-item';
import { Link } from 'react-router-dom';
import find_loc from '../functions/find-loc';
import Loading from '../reusables/loading';
import save_local_address from '../functions/save_local_address';
import map_handler from '../functions/map_handler';
class Cart extends Component {
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
        const { state , go_to ,cart_handler,handle_decrement , handle_remove,clear_cart} = this.props;
        return (
            <>
                <div className="cart-page-wrapper">
                    <div className="cart-map-btns">
                        <div className="clear-cart">
                            <img src={deleteImg} className="clear-cart-img" alt="پاک کردن" onClick={() => { clear_cart() }} />
                        </div>
                        <BackBtn go={this.state.go } />
                    </div>
                    <div className="page-title">
                        سبد خرید
                    </div>
                    <div className="cart-items-wrapper">
                        {state.cart ?
                            state.cart.cart_details.length !== 0 ?
                                state.cart.cart_details.map(ci => <CartItem
                                    item={ci}
                                    key={ci.id}
                                    cart_handler={cart_handler}
                                    handle_decrement={handle_decrement}
                                    handle_remove={handle_remove}
                                />)
                                :
                                <EmptyCart />
                            :
                            <EmptyCart />
                        }
                    </div>
                    <div className="cart-footer">
                        <div className={
                            state.cart ?
                                state.cart.cart_summary.total_discount_of_items === 0 ?
                                    "total-price"
                                    :
                                    "total-price has-discount"
                                : "total-price"
                        }
                        >
                            <span className="title">
                                مجموع :
                            </span>
                            <div className="prices">
                                <span className="discounted-price">
                                    {state.cart ? split_in_three(state.cart.cart_summary.final_price) : "Loading ... s"}
                                </span>
                                <span className="total-price-amount">
                                    {state.cart ? split_in_three(state.cart.cart_summary.total_price_of_items) : "Loading ..."}
                                </span>
                                <span className="toman">
                                    تومان
                                </span>
                            </div>
                        </div>
                        <Link
                            // to="/bot-shop/cart-final"
                            to={
                                state.cart ?
                                    state.cart.cart_summary.pay_permission ?
                                        "/bot/cart-final" :
                                        "/bot/user-data"
                                    :
                                    "/bot/user-data"
                            }
                            className="checkout-btn">
                            ادامه فرآیند خرید
                        </Link>
                    </div>
                </div>
                <Loading pause={state.pause} />
                <FooterBot cart_count={state.cart ? state.cart.cart_details.length : 0} />
            </>
        );
    }
}
 
export default withCartData(Cart);