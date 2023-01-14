import React, { Component } from 'react';
import SortBy from '../sort-by/sort-by';
import Books from "./books/books";
import Pagination from './pagination/pagination';
class MainContent extends Component {
    state = {  } 
    render() { 
        const {
            books,
            add_to_cart,
            ids,
            change_active
        } = this.props;
        return (
            <div className="main-content">
                <SortBy></SortBy>
                <Books
                    books={books}
                    add_to_cart={add_to_cart}
                    ids={ids}
                    change_active={change_active}
                />
                <Pagination />
            </div>
        );
    }
}
 
export default MainContent;