import React, { Component } from 'react';
import Book from './book';
class Books extends Component {
    state = { 
        books : JSON.parse(localStorage.getItem("sina")).slice(0,30),
    } 
    componentDidMount() {
        console.log(this.state.books[0]);
    }
    render() { 
        const { books } = this.state;
        return (
            <div className="books-wrapper">
                {books.map(book => <Book
                    key={book.id}
                    book={book}
                />)}
            </div>
        );
    }
}
 
export default Books;