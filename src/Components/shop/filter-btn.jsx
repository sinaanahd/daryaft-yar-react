import React, { Component } from 'react';
class FilterBtn extends Component {
    state = {  } 
    render() { 
        const { filterFunc } = this.props;
        return (
            <div className="filters-wrapper">
                <span className="filter fil-1" onClick={() => { filterFunc("pub") }}>
                    انتشارات
                </span>
                <span className="filter fil-2" onClick={() => { filterFunc("sub") }}>
                    رشته
                </span>
                <span className="filter fil-3" onClick={() => { filterFunc("gra") }}>
                    پایه
                </span>
                <span className="filter fil-4" onClick={() => { filterFunc("cou") }}>
                    درس
                </span>
            </div>
        );
    }
}
 
export default FilterBtn;