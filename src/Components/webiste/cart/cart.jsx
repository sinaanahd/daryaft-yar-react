import React, { Component } from 'react';
import SiteHeader from "../header/header";
import SiteFooter from "../footer/site-footer";
import CartLeftCol from './left-col/cart-left-col';
import CartRightCol from './right-col/cart-right-col';
class WebsiteCart extends Component {
    state = { 
        cart_items : JSON.parse(localStorage.getItem("sina2"))
    } 
    componentDidMount() {
        console.log(this.state.cart_items.cart_details , this.state.cart_items.cart_summary);
    }
    render() { 
        const cart_items = this.state.cart_items.cart_details;
        const cart_summary = this.state.cart_items.cart_summary;
        return (
            <>
                <SiteHeader />
                <section className="website-cart mm-width">
                    <CartRightCol cart_items={cart_items } />
                    <CartLeftCol cart_summary={cart_summary } />
                </section>
                <SiteFooter />
            </>
        );
    }
}
 
export default WebsiteCart;