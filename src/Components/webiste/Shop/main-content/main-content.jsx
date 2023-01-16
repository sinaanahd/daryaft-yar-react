import React, { Component } from 'react';
import SortBy from '../sort-by/sort-by';
import Books from "./books/books";
import Pagination from './pagination/pagination';
class MainContent extends Component {
    state = { 
        
    }
    componentDidMount () {
    }
    render() { 
        const {
            books,
            add_to_cart,
            ids,
            change_active,
            active_page,
            change_active_page,
        } = this.props;
        return (
            <div className="main-content">
                <SortBy></SortBy>
                <Books
                    books={books}
                    add_to_cart={add_to_cart}
                    ids={ids}
                    change_active={change_active}
                    active_page={active_page}
                />
                <Pagination
                    len={books.length}
                    active_page={active_page}
                    change_active_page={change_active_page}
                />
            </div>
        );
    }
}
 
export default MainContent;