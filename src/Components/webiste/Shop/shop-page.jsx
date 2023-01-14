import React, { Component } from 'react';
import SiteHeader from '../header/header';
import SideBar from './main-content/side-bar/side-bar';
import MainContent from './main-content/main-content';
import withWebsiteData from '../../hoc/with-website-data';
import SiteFooter from '../footer/site-footer';
class ShopPage extends Component {
    state = {  } 
    render() { 
        const {
            books,
            cart,
            user,
            data,
            add_to_cart,
            change_active
        } = this.props;
        return (
            <>
                <SiteHeader
                    cart_count={cart ? cart.cart_summary.items_count : 0}
                    name={user ? user.name : "none"}
                    is_logged_in={data.is_logged_in}
                />
                <section className='content-wrapper shop-wrapper mm-width'>
                    <SideBar />
                    <MainContent
                        books={books}
                        add_to_cart={add_to_cart}
                        ids={cart ? cart.cart_items_ids : []}
                        change_active={change_active}
                    />
                </section>
                <SiteFooter
                    pause={data.pause}
                    error={data.error}
                />
            </>
        );
    }
}
 
export default withWebsiteData(ShopPage);