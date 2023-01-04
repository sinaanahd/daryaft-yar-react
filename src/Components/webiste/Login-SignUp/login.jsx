import React, { Component } from 'react';
import Login from './Login/login';
import SiteHeader from '../header/header';
import SiteFooter from '../footer/site-footer';
import SignUp from './singUp/singup';
import withWebsiteData from '../../hoc/with-website-data';
class LoginPage extends Component {
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
                <section className="login-signup">
                    <Login />
                    <SignUp />
                </section>
                <SiteFooter />
            </>
        );
    }
}
 
export default withWebsiteData(LoginPage);