import React, { Component } from 'react';
import SiteFooter from '../footer/site-footer';
import SiteHeader from '../header/header';
import withWebsiteData from '../../hoc/with-website-data';
import notFound from "../../../assets/images/website/not-found.svg"
class NotFound extends Component {
    state = {  } 
    render() { 
        const { cart, user, data } = this.props;
        return (
            <>
                <SiteHeader
                    cart_count={cart.cart_summary.items_count}
                    name={user.name}
                    is_logged_in={data.is_logged_in}
                />
                <section className="not-found mm-width">
                    <h1>
                        صفحه مورد نظر یافت نشد
                    </h1>
                    <img src={notFound} alt="" />
                </section>
                <SiteFooter />
            </>
        );
    }
}
 
export default withWebsiteData(NotFound);