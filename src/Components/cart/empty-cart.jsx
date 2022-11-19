import React, { Component } from 'react';
import emptyImg from "../../assets/images/empty-cart-vector.png";
class EmptyCart extends Component {
    state = {  } 
    render() { 
        return (
            <div className="cart-is-empty">
                <img src={emptyImg} alt="سبد خرید خالی است" />
                <div className="empty-text">
                    سبد خرید شما خالی است
                </div>
                <div className="return-home">
                    بازگشت به خانه
                </div>
            </div>
        );
    }
}
 
export default EmptyCart;