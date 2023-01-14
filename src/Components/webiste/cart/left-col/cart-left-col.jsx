import React, { Component } from 'react';
import factorIcon from "../../../../assets/images/website/factor-icon-cart.png";
import split_in_three from '../../../functions/spilit_in_three';
import { Link } from 'react-router-dom';
class CartLeftCol extends Component {
    state = {  } 
    render() { 
        const { cart_summary } = this.props;
        return (
            <div className="left-col">
                <div className="cart-details">
                    <img src={factorIcon} alt="سبد خرید" className='factor' />
                    <span className="detail-row">
                        <h5 className="title-detail">
                            جمع مبلغ کالاها:
                        </h5>
                        <span className="result">
                            <span className="amount">
                                {cart_summary ?
                                    split_in_three(cart_summary.total_price_of_items)
                                    :
                                    0
                                }
                            </span>
                            <span className="currency">
                                تومان
                            </span>
                        </span>
                    </span>
                    <span className="detail-row">
                        <h5 className="title-detail">
                            تخفیف :
                        </h5>
                        <span className="result">
                            <span className="amount">
                                {cart_summary ?
                                    split_in_three(cart_summary.total_discount_of_items)
                                    :
                                    0
                                }
                            </span>
                            <span className="currency">
                                تومان
                            </span>
                        </span>
                    </span>
                    <span className="detail-row">
                        <h5 className="title-detail">
                            هزینه ارسال:
                        </h5>
                        <span className="result">
                            {cart_summary ? cart_summary.post_cost === 0 ?
                                "رایگان"
                                :
                                <>
                                    <span className="amount">
                                        {split_in_three(cart_summary.post_cost)}
                                    </span>
                                    <span className="currency">
                                        تومان
                                    </span>
                                </>
                                : 
                                0
                            }
                        </span>
                    </span>
                    <span className="detail-row seprate">
                        <h5 className="title-detail">
                            مبلغ قابل پرداخت
                        </h5>
                        <span className="result">
                            <span className="amount">
                                {cart_summary ?
                                    split_in_three(cart_summary.final_price)
                                    :
                                    0
                                }
                            </span>
                            <span className="currency">
                                تومان
                            </span>
                        </span>
                    </span>
                </div>
                <div className="complete-buy">
                    <Link to="./final-cart">
                        تمکیل فرایند خرید
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default CartLeftCol;