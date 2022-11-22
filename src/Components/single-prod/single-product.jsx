import React, { Component } from 'react';
import el_by_id from '../functions/el-by-id';
import split_in_three from '../functions/spilit_in_three';
import plusIcon from "../../assets/images/plus-white.png";
import minusIcon from "../../assets/images/minus-line-white.png"
import PopUpBack from '../reusables/back-for-pop-up';
class Single_product extends Component {
    state = {
    } 
    componentDidMount() {
    }
    render() { 
        const { go_to, update_address ,state , cart_handler , handle_decrement , back} = this.props;
        const { active_single_book: book } = this.props.state;
        const { grades, subjects } = this.props.state.filters;
        const { cart_details: cart_items } = this.props.state.cart;
        return (
            <div className="single-prod-page-wrapper">
                <div className="single-prod-header">
                    <div className="single-prod-page-title">
                        <br />
                        {book.name}
                    </div>
                    <PopUpBack which={"single-prod"} back={back} />
                </div>
                <div className="main-content">
                    <div className="book-img-price-wrapper">
                        <img src={book.img_url} alt="${book.name}" />
                        <div className={(book.discounted_price !== book.price) ? "price-wrapper has-discount" : "price-wrapper"}>
                            <span className="normal-price">
                                {split_in_three(book.price)}
                                تومان
                            </span>
                            <span className="discounted-price">
                                {split_in_three(book.discounted_price)}
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="details">
                        <div className="pages-details-wrapper">
                            نویسنده :
                            <span className="publisher">
                                {book.author}
                            </span>
                        </div>
                        <div className="pages-details-wrapper">
                            انتشارات :
                            <span className="pages-count">
                                {book.publisher}
                            </span>
                        </div>
                        <div className="pages-details-wrapper">
                            تعداد صفحات :
                            <span className="pages-count">
                                {book.pages_count}
                            </span>
                            صفحه
                        </div>
                        <div className="pages-details-wrapper">
                            پایه :
                            <span className="pages-count">
                                {el_by_id(grades, book.book_year).name}
                            </span>
                        </div>
                        <div className="pages-details-wrapper">
                            رشته :
                            <span className="pages-count">
                                {el_by_id(subjects, book.subject).name}
                            </span>
                        </div>
                        <div className="full-details-wrapper">
                            <span className="title">
                                توضیحات :
                            </span>
                            <ul className="book-details-ul">
                                {book.details.map(d => <li key={book.details.indexOf(d)}>{ d }</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className={el_by_id(cart_items, book.id).count_in_user_cart ? "add-to-cart-text" : "add-to-cart-text not-in-cart"} id="single-id-${book.id}">
                        <span className="text q-0">
                            اضافه کردن به سبد خرید
                        </span>
                        <span className="text q-1">
                            این محصول در سبد خرید شما موجود است (تعداد :
                            <span className="quan-count">
                                {el_by_id(cart_items, book.id).count_in_user_cart || 0}
                            </span>
                            )
                        </span>
                    </div>
                    <div className={el_by_id(cart_items, book.id).count_in_user_cart ? "single-prod-footer" : "single-prod-footer quan-0"}>
                        <span className="more">
                            <img src={plusIcon} className="m more-img" alt="" onClick={()=>{cart_handler(book)}}/>
                        </span>
                        <span className="quantity">
                            {el_by_id(cart_items, book.id).count_in_user_cart || 0}
                        </span>
                        <span className="less">
                            <img src={minusIcon} className="m less-img" alt="" onClick={()=>{handle_decrement(book)}}/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Single_product;