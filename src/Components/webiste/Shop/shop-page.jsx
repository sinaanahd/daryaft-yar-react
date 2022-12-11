import React, { Component } from 'react';
import SiteHeader from '../header/header';
import SideBar from './main-content/side-bar/side-bar';
import MainContent from './main-content/main-content';
class ShopPage extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <SiteHeader />
                <section className='content-wrapper shop-wrapper mm-width'>
                    <SideBar></SideBar>
                    <MainContent></MainContent>
                </section>
            </>
        );
    }
}
 
export default ShopPage;