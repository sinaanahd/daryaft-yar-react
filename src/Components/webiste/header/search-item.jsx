import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SearchItem extends Component {
    state = {  } 
    render() { 
        const { item } = this.props;
        return (
            <div className="search-item">
                <Link
                    to={`/single-id/${item.id}`}
                    className="img"
                >
                    <img
                        src={item.img_url}
                        alt={item.name}
                    />
                </Link>
                <span className="details">
                    <h3 className="item-title">
                        <Link to={`/single-id/${item.id}`}>
                            {item.name}
                        </Link>
                    </h3>
                    <span className="prices">
                        {
                            item.price !== item.discounted_price ?
                                <span className="discounted">
                                    {item.discounted_price}
                                    تومان
                                </span>
                                :
                                <></>
                        }
                        <span className="normal">
                            {item.price}
                            تومان
                        </span>
                    </span>
                </span>
            </div>
        );
    }
}
 
export default SearchItem;