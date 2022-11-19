import React, { Component } from 'react';
import FooterBot from './botFooter';
import ShopHeader from '../shop/shop-header';
import ShopBody from '../shop/shop-body';
import withBackEndData from '../hoc/with-back-end-data';
import find_loc from '../functions/find-loc';
import Single_product from '../single-prod/single-product';
import { withRouter } from 'react-browser-router';
import Loading from '../reusables/loading';
import PopUpCart from '../popUpCart/popUpCart';
import SearchResult from '../shop/search-wrapper/search-result';
import save_local_address from '../functions/save_local_address';
import map_handler from '../functions/map_handler';

class Shop extends Component {
    state = {
        go:"",
    }
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go = map_handler();
        this.setState({ go });
    }
    render() { 
        const {
            state,
            filterFunc,
            clickHandler,
            backBook,
            map_handler,
            go_to,
            update_address,
            open_single_book,
            cart_handler,
            handle_decrement,
            handle_search,
            search_focus,
            search_focus_out,
            back,
        } = this.props;
        return (
            <div className='books-page-wrapper'>
                <ShopHeader  />
                <ShopBody
                    data={state}
                    filterFunc={filterFunc}
                    clickHandler={clickHandler}
                    backBook={backBook}
                    map_handler={map_handler}
                    go_to={go_to}
                    update_address={update_address}
                    open_single_book={open_single_book}
                    cart_handler={cart_handler}
                    handle_search={handle_search}
                    search_focus={search_focus}
                    search_focus_out={search_focus_out}
                    go={this.state.go}
                    back={back}
                />
                {state.single_active ?
                    <Single_product
                        state={state}
                        go_to={go_to}
                        update_address={update_address}
                        cart_handler={cart_handler}
                        handle_decrement={handle_decrement}
                        back={back}
                    />
                    :
                    ""
                }
                {state.single_active ?
                    <></>:
                    state.cart_active ? 
                        <PopUpCart back={back} /> :
                    <></>
                }
                {
                    state.search_open ? 
                        <SearchResult searched_items={state.searched_items} />
                        :
                        <></>
                }
                <Loading pause={ state.pause } />
                <FooterBot cart_count={state.cart ? state.cart.cart_details.length : 0} />
            </div>
        );
    }
}
 
export default withBackEndData(Shop);
//export default Shop;
