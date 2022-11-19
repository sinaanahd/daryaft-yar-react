import React, { Component } from 'react';
import Pagination from './pagination';
import {FaAngleLeft , FaAngleRight} from "react-icons/fa";

class Paginations extends Component {
    state = {  } 
    render() { 
        const { books  , page , onPaginate} = this.props;
        const books_len = books ? Math.ceil(books.length / 30) : 0;
        let page_counts = [];
        for (let i = 0; i < books_len; i++){
            page_counts.push(i + 1);
        }
        return (
            <div className="page-count">
                <span className="page-number previus-page" id="page-id-prev">
                    <FaAngleLeft/>
                </span>
                {page_counts ? page_counts.map(number => <Pagination
                    num={number}
                    page={page ? page : 1}
                    key={number}
                    onPaginate={onPaginate}
                />) : <p>Loading ... </p>}
                <span className="page-number next-page" id="page-id-next">
                    <FaAngleRight/>
                </span>
            </div>
        );
    }
}
 
export default Paginations;