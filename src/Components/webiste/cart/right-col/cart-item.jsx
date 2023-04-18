import React, { Component } from "react";
import minusIcon from "../../../../assets/images/website/minus-icon-cart.png";
import plusIcon from "../../../../assets/images/website/plus-icon-cart.png";
import deleteIcon from "../../../../assets/images/website/delete-icon-cart.png";
import split_in_three from "../../../functions/spilit_in_three";
class SiteCartItem extends Component {
  state = {};
  render() {
    const { item, handle_quan, delete_item } = this.props;
    return (
      <>
        <link rel="preload" href={item.image_link} as="image" />
        <div className="cart-item">
          <span className="img-wrapper">
            <img
              width={88}
              height={119}
              src={item.image_link}
              alt={item.name}
            />
          </span>
          <span className="cart-item-details">
            <h3 className="item-title">{item.name}</h3>
            <h4 className="details">
              انتشارات
              <b>&nbsp;{item.publisher}&nbsp;</b>
              {/* سال چاپ
            <b>
              &nbsp;
              {item}
              &nbsp;
            </b> */}
            </h4>
          </span>
          <span className="price-btn-wrapper">
            <span className="price">
              {split_in_three(item.price)}{" "}
              <span className="currency">تومان</span>
            </span>
            <span className="btn-wrapper">
              <img
                width={12}
                height={12}
                src={minusIcon}
                alt="کم کردن"
                className="minus"
                onClick={() => {
                  handle_quan(item.id, "-");
                }}
              />
              <span className="quantity">{item.count_in_user_cart}</span>
              <img
                width={12}
                height={12}
                src={plusIcon}
                alt="اضافه کردن"
                className="plus"
                onClick={() => {
                  handle_quan(item.id, "+");
                }}
              />
            </span>
          </span>
          <span className="delete-icon">
            <img
              src={deleteIcon}
              alt="حذف محصول"
              className="delete"
              width={17}
              height={17}
              onClick={() => {
                delete_item(item.id);
              }}
            />
          </span>
        </div>
      </>
    );
  }
}

export default SiteCartItem;
