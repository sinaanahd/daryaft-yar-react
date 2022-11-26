import React, { Component } from 'react';
import SearchItem from './search-item';
class SearchResult extends Component {
    state = { 
    }
    // componentDidMount = () => {
    //     console.log()
    // }
    render() { 
        const { searched_items ,open_single_book,close_search} = this.props;
        return (
            <div className='search-modal'>
                نتایج یافت شده :
                <div className="search-result">
                    {searched_items.length !== 0 ?
                        searched_items.map(si => <SearchItem
                            item={si}
                            key={si.id}
                            open_single_book={open_single_book}
                            close_search={close_search}
                        />)
                        : 
                        <div>"نتیجه ای یافت نشد"</div>    
                    }
                </div>
            </div>
        );
    }
}
 
export default SearchResult;