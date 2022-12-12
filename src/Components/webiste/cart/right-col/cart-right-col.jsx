import React, { Component } from 'react';
import SiteCartItem from './cart-item';
class CartRightCol extends Component {
    state = {  } 
    render() { 
        const { cart_items } = this.props;
        return (
            <div className="right-col">
                {cart_items.map(item => <SiteCartItem item={item} key={ item.id } />)}
            </div>
        );
    }
}
 
export default CartRightCol;