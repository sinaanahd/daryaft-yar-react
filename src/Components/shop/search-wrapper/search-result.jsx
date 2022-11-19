import React, { Component } from 'react';
import SearchItem from './search-item';
class SearchResult extends Component {
    state = { 
    }
    // componentDidMount = () => {
    //     console.log()
    // }
    render() { 
        const { searched_items } = this.props;
        return (
            <div className='search-modal'>
                نتایج یافت شده :
                <div className="search-result">
                    {searched_items.length !== 0 ?
                        searched_items.map(si => <SearchItem
                            item={ si }
                            key={si.id}
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