import React, { Component } from 'react';
import withWebsiteData from '../../hoc/with-website-data';
import SiteHeader from '../header/header';
import SiteFooter from '../footer/site-footer';
import Book from "../Shop/main-content/books/book";
import Slider from './slider/slider';
import { Link } from 'react-router-dom';
import null_books from '../reusable/null_books';
import bigBanner1 from "../../../assets/images/website/big-banner-1.jpg";
import arrowLeftWhite from '../../../assets/images/website/arrow-left-w-icon.png';
// import arr from '../../functions/matlan';
class HomePage extends Component {
    state = { 
        carousel_states: [
            {
                id: 1,
                scrolled: 1,
                reverse : false,
            },
            {
                id : 2,
                scrolled : 1,
                reverse : false,
            },
        ],
    } 
    componentDidMount() {
        // console.log(this.props.books);
        // arr.forEach(a => {
        //     console.log(arr.indexOf(a) + 1, a.length);
        // })
    }
    hanle_carousel = (id) => {
        const carousel_states = this.state.carousel_states;
        const selected = carousel_states[id - 1];
        // alert()
        if (selected.reverse) {
            selected.scrolled = selected.scrolled - 1;
        }
        else {
            selected.scrolled = selected.scrolled + 1;
        }
        if (selected.scrolled === 4) {
            selected.reverse = true;
        }
        else if (selected.scrolled === 1) {
            selected.reverse = false;
        }
        this.setState(carousel_states);
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
        const needed_book2 = books ? books.slice(0, 20) : false;
        return (
            <>
                <SiteHeader
                    cart_count={cart ? cart.cart_summary.items_count : 0}
                    name={user ? user.name : "ورود / ثبت نام"}
                    is_logged_in={data.is_logged_in}
                    books = {books}
                />
                <section className="home-page mm-width">
                    <section className="banners-wrapper">
                        <div className="big-banner">
                            <Link to="/shop">
                                <img src={bigBanner1} alt="" />
                            </Link>
                        </div>
                        <Slider />
                    </section>

                    <h3 className='res-title white'>
                            پیشنهاد‌های رد ‌نشدنی
                    </h3>
                    <section className="cant-say-no in">
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
                                    null_books.map(b => <Book book={b} key={b.id} add_to_cart={add_to_cart} />)
                            }
                        </div>
                    </section>
                    <h3 className='res-title'>
                            محبوب‌ترین کتاب‌ها
                    </h3>
                    <section className="circle-title in">
                        <h3 className='title'>
                            محبوب‌ترین کتاب‌ها
                        </h3>
                        <div className={`books-wrapper carousel-type s-${this.state.carousel_states[0].scrolled}`}>
                            {
                                needed_book2 ?
                                    needed_book2.map(b => <Book
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
                        </div>
                        <div
                            className={this.state.carousel_states[0].reverse ? "continue-carousel rev" : "continue-carousel"}
                            onClick={() => { this.hanle_carousel(1) }}>
                            <img
                                src={arrowLeftWhite}
                                alt=""
                            />
                        </div>
                    </section>

                    <h3 className='res-title'>
                            پرفروش ترین کتاب‌ها
                    </h3>
                    <section className="most-sale in">
                        <h3 className='title'>
                            پرفروش ترین کتاب‌ها
                        </h3>
                        <div className={`books-wrapper`}>
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
                            {/* <div
                                className="continue-carousel"
                            >
                                <img
                                    src={arrowLeftWhite}
                                    alt=""
                                />
                            </div> */}
                        </div>
                    </section>
                    
                    <h3 className='res-title'>
                            آخرین کتاب‌ها
                    </h3>
                    <section className="circle-title in">
                        <h3 className='title'>
                            آخرین کتاب‌ها
                        </h3>
                        <div className={`books-wrapper carousel-type s-${this.state.carousel_states[1].scrolled}`}>
                            {
                                needed_book2 ?
                                    needed_book2.map(b => <Book
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
                        </div>
                        <div
                            className={this.state.carousel_states[1].reverse ? "continue-carousel rev" : "continue-carousel"}
                            onClick={() => { this.hanle_carousel(2) }}
                        >
                            <img src={arrowLeftWhite} alt="" />
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