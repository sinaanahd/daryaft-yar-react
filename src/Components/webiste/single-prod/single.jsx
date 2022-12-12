import React, { Component } from 'react';
import SiteHeader from '../header/header';
import RightCol from './right-col/right-col';
import LeftCol from './left-col/left-col';
import SuggestedBooks from './suggested';
import SiteFooter from '../footer/site-footer';
class SingleProdPage extends Component {
    state = { 
        book: JSON.parse(localStorage.getItem("sina"))[0],
        books: JSON.parse(localStorage.getItem("sina")).slice(0, 20)
     } 
    render() { 
        const { book , books } = this.state;
        return (
            <>
                <SiteHeader></SiteHeader>
                <section className="single-book-page-wrapper mm-width">
                    <RightCol book={book} />
                    <LeftCol book={book} />
                </section>
                <SuggestedBooks books={books} book={book} />
                <SiteFooter></SiteFooter>
            </>
        );
    }
}
 
export default SingleProdPage;