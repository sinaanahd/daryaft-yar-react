import React, { Component } from 'react';
import SiteCartItem from './cart-item';
class CartRightCol extends Component {
    state = {  } 
    render() { 
        const { cart_items,handle_quan,delete_item } = this.props;
        return (
            <div className="right-col">
                {cart_items ?
                    cart_items.map(item => <SiteCartItem
                        item={item}
                        key={item.id}
                        handle_quan={handle_quan}
                        delete_item={delete_item}
                    />)
                    :
                    <></>
                }
            </div>
        );
    }
}
 
export default CartRightCol;