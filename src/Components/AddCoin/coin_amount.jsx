import React, { Component } from 'react';
import split_in_three from '../functions/spilit_in_three';
class CoinAmount extends Component {
    state = {  } 
    render() { 
        const { amount,handle_coin,selected } = this.props;
        return (
            <div className="option" onClick={() => handle_coin(amount.amount)}>
                <span className={amount.amount === selected ? "status active" : "status"}>

                </span>
                <span className="text">
                    {amount.amount} سکه -
                    {split_in_three(amount.price)}
                    تومان
                    (ارزانترین)
                </span>
            </div>
        );
    }
}
 
export default CoinAmount;