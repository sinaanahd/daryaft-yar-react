import React, { Component } from 'react';
import split_in_three from '../functions/spilit_in_three';
import { Link } from 'react-router-dom';
import CartItem from '../cart/cart-item';
import EmptyCart from '../cart/empty-cart';
import deleteImg from "../../assets/images/trash-icon-btn.png";
import Loading from '../reusables/loading';
import PopUpBack from '../reusables/back-for-pop-up';
import LittleLoading from '../reusables/little-loading';
class PopUpCart extends Component {
    state = {
    } 
    componentDidMount() {
    }
    render() { 
        const { state, cart_handler, handle_decrement, handle_remove, clear_cart,back } = this.props;
        return (
            <div className='cart-pop-up'>
                <div className="cart-page-wrapper modal">
                    <div className="cart-map-btns">
                        <div className="clear-cart">
                            <img src={deleteImg} className="clear-cart-img" alt="پاک کردن" onClick={() => { clear_cart() }} />
                        </div>
                        <PopUpBack which={"pop-up-cart"} back={back} />
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
                                    {state.cart ? split_in_three(state.cart.cart_summary.final_price) : <LittleLoading />}
                                </span>
                                <span className="total-price-amount">
                                    {state.cart ? split_in_three(state.cart.cart_summary.total_price_of_items) : <LittleLoading />}
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
            </div>
        );
    }
}
 
export default PopUpCart;