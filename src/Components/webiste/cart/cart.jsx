import React, { Component } from 'react';
import SiteHeader from "../header/header";
import SiteFooter from "../footer/site-footer";
import CartLeftCol from './left-col/cart-left-col';
import CartRightCol from './right-col/cart-right-col';
import withWebsiteData from '../../hoc/with-website-data';
class WebsiteCart extends Component {
    state = { 
    }
    render() { 
        const { cart, user, data } = this.props;
        return (
            <>
                <SiteHeader
                    cart_count={cart.cart_summary.items_count}
                    name={user.name}
                    is_logged_in={data.is_logged_in}
                />
                <section className="website-cart mm-width">
                    <CartRightCol cart_items={cart.cart_details } />
                    <CartLeftCol cart_summary={cart.cart_summary } />
                </section>
                <SiteFooter />
            </>
        );
    }
}
 
export default withWebsiteData(WebsiteCart);