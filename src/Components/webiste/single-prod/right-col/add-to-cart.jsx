import React, { Component } from 'react';
import spilit_in_three from "../../../functions/spilit_in_three";
import calculate_discount from "../../../functions/calculate_discount";
import plusIcon from "../../../../assets/images/website/plus-icon.png";
import minusIcon from "../../../../assets/images/website/minus-icon.png";
class SingleCartDetails extends Component {
    state = {} 
    componentDidMount() {
        
    }
    render() { 
        const { book,handle_quan , cart } = this.props;
        return (
            <div className="prod-cart-deatials">
                <h3 className="cart-title-price cart-title">
                    قیمت فروش کالا:
                </h3>
                <div className="price-wrapper">
                    <span className="price-curency">
                        <span className="prices">
                            {book ? book.discounted_price === book.price ?
                                <></>
                                :
                                <span className="discounted">
                                    {spilit_in_three(book.discounted_price)}
                                </span>
                                :
                                0
                            }
                            <span className={book.discounted_price === book.price ? "normal" : "normal has-discount"}>
                                {spilit_in_three(book.price)}
                            </span>
                        </span>
                        <span className="currency">
                            تومان
                        </span>
                    </span>
                    <span className="discount-amount">
                            {calculate_discount(book.price , book.discounted_price)}%
                    </span>
                </div>
                <h3 className="cart-title-quan cart-title">
                    تعداد:
                </h3>
                <div className="quan-counter-wrapper">
                    <span className="dec">
                        <img
                            src={minusIcon}
                            alt="کم کردن"
                            onClick={() => { handle_quan(book.id, "-") }} />
                    </span>
                    <span className="quan">
                        {cart?
                            cart.cart_details.find(c => c.id === book.id)
                                ?
                                cart.cart_details.find(c => c.id === book.id).count_in_user_cart
                                :
                                0
                            :
                            0
                        }
                    </span>
                    <span className="inc">
                        <img
                            src={plusIcon}
                            alt="اضافه کردن"
                            onClick={()=>{handle_quan(book.id , "+")}}
                        />
                    </span>
                </div>
                <div className="add-to-cart">
                    افزودن به سبد خرید
                </div>
            </div>
        );
    }
}
 
export default SingleCartDetails;