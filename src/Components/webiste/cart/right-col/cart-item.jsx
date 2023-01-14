import React, { Component } from 'react';
import minusIcon from "../../../../assets/images/website/minus-icon-cart.png";
import plusIcon from "../../../../assets/images/website/plus-icon-cart.png";
import deleteIcon from "../../../../assets/images/website/delete-icon-cart.png";
class SiteCartItem extends Component {
    state = {  } 
    render() { 
        const { item , handle_quan , delete_item } = this.props;
        return (
            <div className="cart-item">
                <span className="img-wrapper">
                    <img src={item.img_url} alt={item.name} />
                </span>
                <span className="cart-item-details">
                    <h3 className="item-title">
                        {item.name}
                    </h3>
                    <h4 className="details">
                        انتشارات
                        {item.publisher}
                        سال چاپ
                        {"وارد نشده"}
                    </h4>
                </span>
                <span className="price-btn-wrapper">
                    <span className="price">
                        {item.price}
                        <span className="currency">
                            تومان
                        </span>
                    </span>
                    <span className="btn-wrapper">
                        <img
                            src={minusIcon}
                            alt="کم کردن"
                            className="minus"
                            onClick={()=>{handle_quan(item.id , "-")}}
                        />
                        <span className="quantity">
                            {item.count_in_user_cart}
                        </span>
                        <img
                            src={plusIcon}
                            alt="اضافه کردن"
                            className="plus"
                            onClick={()=>{handle_quan(item.id , "+")}}
                        />
                    </span>
                </span>
                <span className="delete-icon">
                    <img
                        src={deleteIcon}
                        alt="حذف محصول"
                        className="delete"
                        onClick={()=>{delete_item(item.id)}}
                    />
                </span>
            </div>
        );
    }
}
 
export default SiteCartItem;