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
        const { cart, user, data ,  handle_quan ,delete_item} = this.props;
        return (
            <>
                <SiteHeader
                    cart_count={cart ? cart.cart_summary.items_count : 0}
                    name={user ? user.name : "none"}
                    is_logged_in={data.is_logged_in}
                />
                <section className="website-cart mm-width">
                    <CartRightCol
                        cart_items={cart ? cart.cart_details : []}
                        handle_quan={handle_quan}
                        delete_item={delete_item}
                    />
                    <CartLeftCol cart_summary={cart.cart_summary } />
                </section>
                <SiteFooter
                    pause={data.pause}
                    error={data.error}
                />
            </>
        );
    }
}
 
export default withWebsiteData(WebsiteCart);