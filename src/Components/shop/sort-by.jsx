import React, { Component } from 'react';
import downIcon from '../../assets/images/down-icon.png';
class SortBy extends Component {
    state = {  } 
    render() { 
        return (
            <div className="sort-by-wrapper">
                <div className="content">
                    دسته بندی  بر اساس
                </div>
                <div className="go-to-sort-by">
                    <img src={downIcon} alt="sort-by-img"/>
                </div>
            </div>
        );
    }
}
 
export default SortBy;