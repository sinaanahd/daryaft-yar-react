import React, { Component } from 'react';
import Book from './book';
class Books extends Component {
    state = { 
    } 
    componentDidMount() {
       
    }
    render() { 
        const { books } = this.props;
        return (
            <div className="books-wrapper">
                {books.slice(0,40).map(book => <Book
                    key={book.id}
                    book={book}
                />)}
            </div>
        );
    }
}
 
export default Books;