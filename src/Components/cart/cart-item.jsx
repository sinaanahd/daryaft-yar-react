import React, { Component } from 'react';
import split_in_three from '../functions/spilit_in_three';
import { FaPlus, FaMinus } from 'react-icons/fa';
import plusOrange from '../../assets/images/plus-icon-orange.png';
import trashIcon from '../../assets/images/trash-icon-btn-black.png';
import minusIcon from '../../assets/images/minus-icon.png';
import deleteIcon from "../../assets/images/delete-icon-orange.png"

class CartItem extends Component {
    state = {  } 
    render() { 
        const { item ,cart_handler,handle_decrement,handle_remove} = this.props;
        return (
            <div className="cart-item" id="cart-item-${item.id}">
                <div className="img-wrapper">
                    <img src={item.img_url} alt="${item.name}" />
                </div>
                <div className="prod-details">
                    <div className="prod-name">
                        {item.name}
                    </div>
                    <div className="prod-price">
                        {split_in_three(item.price)}
                    </div>
                    <div className="prod-btn-action">
                        <div className="add-btn">
                            <img src={plusOrange} className="m more" alt="" onClick={()=>cart_handler(item)}/>
                        </div>
                        <div className="quantity">
                            {item.count_in_user_cart}
                        </div>
                        <div className={item.count_in_user_cart === 1 ? "decrement-btn quan-1" : "decrement-btn"}>
                            <img src={trashIcon} className="trash less" alt="" onClick={() => handle_decrement(item)}/>
                            <img src={minusIcon} className="line less" alt="" onClick={()=>handle_decrement(item)}/>
                        </div>
                    </div>
                </div>
                <div className="remove-btn">
                    <img src={deleteIcon} alt="" onClick={()=>{handle_remove(item)}}/>
                </div>
            </div>
        );
    }
}
 
export default CartItem;