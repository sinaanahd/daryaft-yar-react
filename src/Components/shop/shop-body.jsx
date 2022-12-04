import React, { Component } from 'react';
import FilterBtn from './filter-btn';
import Books from './books';
import Paginations from './paginations';
import Search from './search';
import SortBy from './sort-by';
import FilterOptions from './filter-options';
import SearchResult from './search-wrapper/search-result';
class ShopBody extends Component {
    state = { 
        current_page : 1,
    } 
    handle_pagination = (page) => {
        this.setState({ current_page: page });
    }
    handle_filter_set = () => {
        this.setState({ current_page: 1 });
    }
    render() { 
        const { data
            , filterFunc
            , clickHandler
            , map_handler
            , go_to
            , update_address
            , open_single_book
            , cart_handler
            , handle_search
            , search_focus
            , search_focus_out
            , go
            , back
            , active_sort
        } = this.props;
        return (
            <div className="main-content">
                <Search
                    map_handler={map_handler}
                    state={data}
                    go={go} 
                    handle_search={handle_search}
                    search_focus={search_focus }
                    search_focus_out={search_focus_out}
                    back={back}
                    page={this.handle_filter_set}
                />
                <SortBy active_sort={active_sort} />
                <FilterBtn filterFunc={filterFunc} />
                {
                    data.filter_active ?
                        <FilterOptions
                            filters={data.filters}
                            filter={data.active_filter}
                            clickHandler={clickHandler}
                            back={back}
                        />
                        :
                        data.needed_book.length !==0 ?
                            <Books
                                books={data.needed_book.slice((this.state.current_page - 1) * 30, this.state.current_page * 30)}
                                cart={data.cart}
                                open_single_book={open_single_book}
                                cart_handler={cart_handler}
                            />
                            :
                            data.books ?
                                <Books
                                    books={data.books.slice((this.state.current_page - 1) * 30, this.state.current_page * 30)}
                                    cart={data.cart}
                                    open_single_book={open_single_book}
                                    cart_handler={cart_handler}
                                />
                                :
                                <Books
                                    books={data.null_books}
                                    cart={data.cart}
                                    is_null={true}
                                />
                }
                {
                    data.filter_active ?
                        " "
                        :
                        <Paginations
                            books={data.needed_book.length !==0 ?  data.needed_book : data.books}
                            page={this.state.current_page}
                            onPaginate={this.handle_pagination}
                        />
                }
                {/* {
                    data.searched_items !== [] ?
                        <SearchResult searched_items={data.searched_items} />
                        :
                        <></>
                } */}
            </div>
        );
    }
}
 
export default ShopBody;