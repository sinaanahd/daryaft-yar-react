import React, { Component } from 'react';
import calculate_discount from '../../../../functions/calculate_discount';
import cartWhite from "../../../../../assets/images/website/cart-icon-white.png";
import split_in_three from '../../../../functions/spilit_in_three';
import { Link } from 'react-router-dom';
class Book extends Component {
    state = { 
    } 
    componentDidMount() {
    }
    render() { 
        const {
            book,
            change_active,
            add_to_cart,
            ids,
        } = this.props;
        
        return (
            <div className="book">
                {
                    ids ? !ids.includes(book.id)
                        ?
                        <span className="add-to-cart">
                            <img
                                src={cartWhite}
                                onClick={() => { add_to_cart(book.id) }}
                                alt="اضافه کردن به سبد خرید" />
                        </span>
                        :
                        <></>
                        :
                        <span className="add-to-cart">
                            <img
                                src={cartWhite}
                                onClick={() => { add_to_cart(book.id) }}
                                alt="اضافه کردن به سبد خرید" />
                        </span>
                }
                <span className="img-wrapper">
                    <Link to={`/single-id/${book.id}`} onClick={()=>{change_active(book)}}>
                        <img src={book.img_url} alt={book.name} />
                    </Link>
                </span>
                <h3 className="book-title">
                    <Link to={`/single-id/${book.id}`} onClick={()=>{change_active(book)}}>
                        {book.name}
                    </Link>
                </h3>
                <span className="price-discount">
                    <span className="price-currency">
                        <span className="prices">
                            {
                                book.price === book.discounted_price ?
                                    <></>
                                    :
                                    <span className="discounted">
                                        {split_in_three(book.discounted_price)}
                                    </span>
                            }
                            <span className={book.price === book.discounted_price ? "normal" : "normal dis"}>
                                {split_in_three(book.price)}
                            </span>
                        </span>
                        <span className="curency">
                            تومان
                        </span>
                    </span>
                    <span className="discount-precent">
                        {calculate_discount(book.price, book.discounted_price)}%
                    </span>
                </span>
            </div>
        );
    }
}
 
export default Book;