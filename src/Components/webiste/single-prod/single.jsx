import React, { Component } from 'react';
import SiteHeader from '../header/header';
import RightCol from './right-col/right-col';
import LeftCol from './left-col/left-col';
import SuggestedBooks from './suggested';
class SingleProdPage extends Component {
    state = { 
        book: JSON.parse(localStorage.getItem("sina"))[0],
     } 
    render() { 
        const { book } = this.state;
        return (
            <>
                <SiteHeader></SiteHeader>
                <section className="single-book-page-wrapper mm-width">
                    <RightCol book={book} />
                    <LeftCol book={book} />

                </section>
            </>
        );
    }
}
 
export default SingleProdPage;