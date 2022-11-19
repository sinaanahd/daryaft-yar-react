import React, { Component } from 'react';
import backimg from '../../assets/images/back-forward-btn.png';
import magnifier from '../../assets/images/magnifier-icon.png';
import BackBtn from '../reusables/back';
import PopUpBack from '../reusables/back-for-pop-up';
class Search extends Component {
    state = {  } 
    render() { 
        const {
            state,
            handle_search,
            search_focus,
            search_focus_out,
            go,
            back
        } = this.props;
        return (
            <div className="search-back-wrapper">
                <div className="search-wrapper">
                    <input
                        type="text"
                        className="search-books"
                        placeholder="جستجو ..."
                        onInput={(e) => handle_search(e.target.value)}
                        onFocus={(e) => search_focus(e)}
                        onBlur={(e) => search_focus_out(e)}
                    />
                    <img src={magnifier} alt="search-icon" className="search-icon" />
                </div>
                {state.filter_active ?
                    <PopUpBack which={"filters"} back={back} />
                    :
                    <BackBtn state={state} go={go} />
                }
            </div>
        );
    }
}
 
export default Search;