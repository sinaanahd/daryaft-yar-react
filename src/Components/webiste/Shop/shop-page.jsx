import React, { Component } from 'react';
import SiteHeader from '../header/header';
import SideBar from './main-content/side-bar/side-bar';
import MainContent from './main-content/main-content';
import withWebsiteData from '../../hoc/with-website-data';
class ShopPage extends Component {
    state = {  } 
    render() { 
        const { books,cart, user, data } = this.props;
        return (
            <>
                <SiteHeader
                    cart_count={cart.cart_summary.items_count}
                    name={user.name}
                    is_logged_in={data.is_logged_in}
                />
                <section className='content-wrapper shop-wrapper mm-width'>
                    <SideBar />
                    <MainContent books={books} />
                </section>
            </>
        );
    }
}
 
export default withWebsiteData(ShopPage);