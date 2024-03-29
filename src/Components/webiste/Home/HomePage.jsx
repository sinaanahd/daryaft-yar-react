import React, { Component } from "react";
import withWebsiteData from "../../hoc/with-website-data";
import SiteHeader from "../header/header";
import SiteFooter from "../footer/site-footer";
import Book from "../Shop/main-content/books/book";
import Slider from "./slider/slider";
import { Link } from "react-router-dom";
import null_books from "../reusable/null_books";
import bigBanner1 from "../../../assets/images/big-banner-3.webp";
import arrowLeftWhite from "../../../assets/images/website/arrow-left-w-icon.png";
// import arr from '../../functions/matlan';

class HomePage extends Component {
  state = {
    carousel_states: [
      {
        id: 1,
        scrolled: 1,
        reverse: false,
      },
      {
        id: 2,
        scrolled: 1,
        reverse: false,
      },
    ],
  };
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
    } else {
      selected.scrolled = selected.scrolled + 1;
    }
    if (selected.scrolled === 2) {
      selected.reverse = true;
    } else if (selected.scrolled === 1) {
      selected.reverse = false;
    }
    this.setState(carousel_states);
  };
  render() {
    const {
      books,
      cart,
      user,
      data,
      add_to_cart,
      change_active,
      add_to_recent_visit,
      hot,
      most,
      rad,
      last,
    } = this.props;
    return (
      <>
        <link rel="preload" href={bigBanner1} as="image" />
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
          change_active={change_active}
        />
        <section className="home-page mm-width">
          <section className="banners-wrapper">
            <div className="big-banner">
              <Link aria-label="رفتن به فروشگاه" to="/shop">
                <img
                  width={200}
                  height={300}
                  src={bigBanner1}
                  alt="رفتن به فروشگاه"
                />
              </Link>
            </div>
            <Slider />
          </section>

          <h2 className="res-title white">پیشنهاد‌های رد ‌نشدنی</h2>
          <section className="cant-say-no in">
            <h2 className="title">پیشنهاد‌های رد ‌نشدنی</h2>
            <div className="books-wrapper">
              {rad.length !== 0 && rad
                ? rad.map((b) => (
                    <Book
                      book={b}
                      key={b.id}
                      add_to_cart={add_to_cart}
                      ids={cart ? cart.cart_items_ids : []}
                      change_active={change_active}
                      add_to_recent_visit={add_to_recent_visit}
                    />
                  ))
                : null_books.map((b) => (
                    <Book
                      is_null={true}
                      book={b}
                      key={b.id}
                      add_to_cart={add_to_cart}
                      add_to_recent_visit={add_to_recent_visit}
                    />
                  ))}
            </div>
          </section>
          <h2 className="res-title">محبوب‌ترین کتاب‌ها</h2>
          <section className="circle-title in">
            <h2 className="title">محبوب‌ترین کتاب‌ها</h2>
            <div
              className={`books-wrapper carousel-type s-${this.state.carousel_states[0].scrolled}`}>
              {hot.length !== 0 && hot
                ? hot.map((b) => (
                    <Book
                      ids={cart ? cart.cart_items_ids : []}
                      change_active={change_active}
                      book={b}
                      key={b.id}
                      add_to_cart={add_to_cart}
                      add_to_recent_visit={add_to_recent_visit}
                    />
                  ))
                : null_books.map((b) => (
                    <Book
                      is_null={true}
                      ids={cart ? cart.cart_items_ids : []}
                      change_active={change_active}
                      book={b}
                      key={b.id}
                      add_to_cart={add_to_cart}
                      add_to_recent_visit={add_to_recent_visit}
                    />
                  ))}
            </div>
            <div
              className={
                this.state.carousel_states[0].reverse
                  ? "continue-carousel rev"
                  : "continue-carousel"
              }
              onClick={() => {
                this.hanle_carousel(1);
              }}>
              <img
                width={11}
                height={11}
                src={arrowLeftWhite}
                alt="جا به جایی"
                loading="lazy"
              />
            </div>
          </section>

          <h2 className="res-title">پرفروش ترین کتاب‌ها</h2>
          <section className="most-sale in">
            <h2 className="title">پرفروش ترین کتاب‌ها</h2>
            <div className={`books-wrapper`}>
              {most.length !== 0 && most
                ? most.map((b) => (
                    <Book
                      ids={cart ? cart.cart_items_ids : []}
                      change_active={change_active}
                      book={b}
                      key={b.id}
                      add_to_cart={add_to_cart}
                      add_to_recent_visit={add_to_recent_visit}
                    />
                  ))
                : null_books.map((b) => (
                    <Book
                      is_null={true}
                      ids={cart ? cart.cart_items_ids : []}
                      change_active={change_active}
                      book={b}
                      key={b.id}
                      add_to_cart={add_to_cart}
                      add_to_recent_visit={add_to_recent_visit}
                    />
                  ))}
            </div>
          </section>

          <h2 className="res-title">آخرین کتاب‌ها</h2>
          <section className="circle-title in">
            <h2 className="title">آخرین کتاب‌ها</h2>
            <div
              className={`books-wrapper carousel-type s-${this.state.carousel_states[1].scrolled}`}>
              {last.length !== 0 && last
                ? last.map((b) => (
                    <Book
                      book={b}
                      key={b.id}
                      add_to_cart={add_to_cart}
                      ids={cart ? cart.cart_items_ids : []}
                      change_active={change_active}
                      add_to_recent_visit={add_to_recent_visit}
                    />
                  ))
                : null_books.map((b) => (
                    <Book
                      is_null={true}
                      book={b}
                      key={b.id}
                      add_to_cart={add_to_cart}
                      ids={cart ? cart.cart_items_ids : []}
                      change_active={change_active}
                      add_to_recent_visit={add_to_recent_visit}
                    />
                  ))}
            </div>
            <div
              className={
                this.state.carousel_states[1].reverse
                  ? "continue-carousel rev"
                  : "continue-carousel"
              }
              onClick={() => {
                this.hanle_carousel(2);
              }}>
              <img
                width={11}
                height={11}
                src={arrowLeftWhite}
                alt="جا به جایی"
                loading="lazy"
              />
            </div>
          </section>
        </section>
        <SiteFooter pause={data.pause} error={data.error} />
      </>
    );
  }
}

export default withWebsiteData(HomePage);
