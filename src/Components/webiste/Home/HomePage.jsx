import React, { Component } from 'react';
import withWebsiteData from '../../hoc/with-website-data';
import SiteHeader from '../header/header';
import SiteFooter from '../footer/site-footer';
import Book from "../Shop/main-content/books/book";
import null_books from '../reusable/null_books';
import smallBanner from "../../../assets/images/website/small-banner.png";
import bigBanner from "../../../assets/images/website/big-banner.png";
import arrowLeftWhite from '../../../assets/images/website/arrow-left-w-icon.png';
// import arr from '../../functions/matlan';
class HomePage extends Component {
    state = { 
    } 
    componentDidMount() {
        // console.log(this.props.books);
        // arr.forEach(a => {
        //     console.log(arr.indexOf(a) + 1, a.length);
        // })
    }
    render() { 
        const {
            books,
            cart,
            user,
            data,
            add_to_cart,
            change_active,
        } = this.props;
        const needed_book = books ? books.slice(0, 5) : false;
        return (
            <>
                <SiteHeader
                    cart_count={cart ? cart.cart_summary.items_count : 0}
                    name={user ? user.name : "none"}
                    is_logged_in={data.is_logged_in}
                />
                <section className="home-page mm-width">
                    <section className="banners-wrapper">
                        <div className="big-banner">
                            <img src={bigBanner} alt="" />
                        </div>
                        <div className="small-banner">
                            <img src={smallBanner} alt="" />
                        </div>
                    </section>
                    <section className="cant-say-no">
                        <h3 className='title'>
                            پیشنهاد‌های رد ‌نشدنی
                        </h3>
                        <div className="books-wrapper">
                            {
                                needed_book ? 
                                    needed_book.map(b => <Book
                                        book={b}
                                        key={b.id}
                                        add_to_cart={add_to_cart}
                                        ids={cart ? cart.cart_items_ids : []}
                                        change_active={change_active}
                                    />)
                                    :
                                    null_books.map(b => <Book book={b} key={b.id} add_to_cart={add_to_cart } />)
                            }
                        </div>
                    </section>
                    <section className="circle-title">
                        <h3 className='title'>
                            محبوب‌ترین کتاب‌ها
                        </h3>
                        <div className="books-wrapper">
                            {
                                needed_book ? 
                                    needed_book.map(b => <Book
                                        ids={cart ? cart.cart_items_ids : []}
                                        change_active={change_active}
                                        book={b}
                                        key={b.id}
                                        add_to_cart={add_to_cart}
                                    />)
                                    :
                                    null_books.map(b => <Book
                                        ids={cart ? cart.cart_items_ids : []}
                                        change_active={change_active}
                                        book={b}
                                        key={b.id}
                                        add_to_cart={add_to_cart}
                                    />)
                            }
                            <div className="continue-carousel">
                                <img src={arrowLeftWhite} alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="most-sale">
                        <h3 className='title'>
                            پرفروش ترین کتاب‌ها
                        </h3>
                        <div className="books-wrapper">
                            {
                                needed_book ? 
                                    needed_book.map(b => <Book
                                        ids={cart ? cart.cart_items_ids : []}
                                        change_active={change_active}
                                        book={b}
                                        key={b.id}
                                        add_to_cart={add_to_cart}
                                    />)
                                    :
                                    null_books.map(b => <Book
                                        ids={cart ? cart.cart_items_ids : []}
                                        change_active={change_active}
                                        book={b}
                                        key={b.id}
                                        add_to_cart={add_to_cart}
                                    />)
                            }
                            <div className="continue-carousel">
                                <img src={arrowLeftWhite} alt="" />
                            </div>
                        </div>
                    </section>
                    
                    
                    <section className="circle-title">
                        <h3 className='title'>
                            آخرین کتاب‌ها
                        </h3>
                        <div className="books-wrapper">
                            {
                                needed_book ? 
                                    needed_book.map(b => <Book
                                        book={b}
                                        key={b.id}
                                        add_to_cart={add_to_cart}
                                        ids={cart ? cart.cart_items_ids : []}
                                        change_active={change_active}
                                    />)
                                    :
                                    null_books.map(b => <Book
                                        book={b}
                                        key={b.id}
                                        add_to_cart={add_to_cart}
                                        ids={cart ? cart.cart_items_ids : []}
                                        change_active={change_active}
                                    />)
                            }
                            <div className="continue-carousel">
                                <img src={arrowLeftWhite} alt="" />
                            </div>
                        </div>
                    </section>
                </section>
                <SiteFooter
                    pause={data.pause}
                    error={data.error}
                />
            </>
        );
    }
}
 
export default withWebsiteData(HomePage);