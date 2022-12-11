import React, { Component } from 'react';
import Book from '../../webiste/Shop/main-content/books/book';
class SuggestedBooks extends Component {
    state = {  } 
    render() { 
        return (
            <div className="suggested-books">
                <Book />
            </div>
        );
    }
}
 
export default SuggestedBooks;