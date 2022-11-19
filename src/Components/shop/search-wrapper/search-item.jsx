import React, { Component } from 'react';
import split_in_three from '../../functions/spilit_in_three';
class SearchItem extends Component {
    state = {  } 
    render() { 
        const { item } = this.props;
        return (
            <>
                {item === "موردی پیدا نشد" ?
                    <div className='no-search'>
                        متاسفانه موردی یافت نشد 
                    </div>
                    :
                    <div className="search-result-item">
                        <img src={item.img_url} />
                        <div className="book-details">
                            <span id="search-txt-${item.id}">
                                {item.name}
                            </span>
                            <span className="search-book-publisher">
                                {item.publisher}
                            </span>
                            <span className={(item.discounted_price !== item.price) ? "prices  has-discount" : "prices "}>
                                <span className="normal-price">
                                    {split_in_three(item.price)}
                                </span>
                                <span className="discounted-price">
                                    {split_in_three(item.discounted_price)}
                                </span>
                            </span>
                        </div>
                    </div>}
            </>
        );
    }
}
 
export default SearchItem;