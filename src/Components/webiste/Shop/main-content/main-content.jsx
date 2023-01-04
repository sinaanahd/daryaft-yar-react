import React, { Component } from 'react';
import SortBy from '../sort-by/sort-by';
import Books from "./books/books";
import Pagination from './pagination/pagination';
class MainContent extends Component {
    state = {  } 
    render() { 
        const { books } = this.props;
        return (
            <div className="main-content">
                <SortBy></SortBy>
                <Books books={ books } />
                <Pagination />
            </div>
        );
    }
}
 
export default MainContent;