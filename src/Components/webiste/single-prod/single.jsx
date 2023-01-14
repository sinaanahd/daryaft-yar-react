import React, { Component } from 'react';
import SiteHeader from '../header/header';
import RightCol from './right-col/right-col';
import LeftCol from './left-col/left-col';
import SuggestedBooks from './suggested';
import SiteFooter from '../footer/site-footer';
import withWebsiteData from '../../hoc/with-website-data';
import null_books from '../reusable/null_books';
class SingleProdPage extends Component {
    state = { 
        book : false,
    } 
    componentDidMount() {
        const { books } = this.props;
        const book_id = parseInt(this.props.location.pathname.split("/")[2]);
        const book = books ? books.filter(b => b.id === book_id)[0] : null_books;
        //console.log(book);
        this.setState({ book });
    }
    render() { 
        const {
            cart,
            user,
            data,
            change_active,
            handle_quan
        } = this.props;
        return (
            <>
                <SiteHeader
                    cart_count={cart ? cart.cart_summary.items_count : 0}
                    name={user ? user.name : "none"}
                    is_logged_in={data.is_logged_in}
                />
                <section className="single-book-page-wrapper mm-width">
                    {
                        data.active_single ? 
                            <>
                                <RightCol
                                    book={data.active_single}
                                    handle_quan={handle_quan}
                                    cart={cart}
                                />
                            <LeftCol book={data.active_single} />
                        </>
                            :
                            this.state.book ? 
                                <>
                                    <RightCol
                                        book={this.state.book}
                                        handle_quan={handle_quan}
                                        cart={cart}
                                    />
                                    <LeftCol book={this.state.book} />
                                </>
                                :
                                "در حال آماده سازی"
                    }
                </section>
                <SuggestedBooks books={data.books ? data.books.slice(0, 20) : null_books} change_active={ change_active } />
                <SiteFooter
                    pause={data.pause}
                    error={data.error}
                />
            </>
        );
    }
}
 
export default withWebsiteData(SingleProdPage);