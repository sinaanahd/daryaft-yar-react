import React, { Component } from 'react';
import withWebsiteData from '../../hoc/with-website-data';
import SiteFooter from '../footer/site-footer';
import SiteHeader from '../header/header';
class FinalCartPage extends Component {
    state = {  } 
    render() { 
        const {
            cart,
            user,
            data,
            books,
        } = this.props;
        return (
            <>
                <SiteHeader
                    cart_count={cart ? cart.cart_summary.items_count : 0}
                    name={user ? user.name : "ورود / ثبت نام"}
                    is_logged_in={data.is_logged_in}
                    books={books}
                />
                <section className="mm-width website-final-cart-wrapper">
                    final cart
                </section>
                <SiteFooter
                    pause={data.pause}
                    error={data.error}
                />
            </>
        );
    }
}
 
export default withWebsiteData(FinalCartPage);