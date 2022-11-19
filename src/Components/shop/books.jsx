import React, { Component } from 'react';
import Book from './book';
class Books extends Component {
    state = { 
    } 
    render() { 
        const {
            books,
            cart,
            is_null,
            open_single_book,
            cart_handler
        } = this.props;
        return (
            <div className={is_null ? "books-wrapper null" : "books-wrapper"}>
                {books.map(book => <Book
                    data={book}
                    key={book.id}
                    cart={cart ? cart : ""}
                    open_single_book={open_single_book}
                    cart_handler={cart_handler}
                />)}
            </div>
        );
    }
}
 
export default Books;