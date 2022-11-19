import React, { Component } from 'react';
class Pagination extends Component {
    state = {  } 
    render() { 
        const { num , page ,onPaginate} = this.props;
        return (
            <span
                className={num === page ? "page-number active-page" : "page-number"}
                onClick={() => { onPaginate(num) }}
            >
                {num ? num : "1"}
            </span>
        );
    }
}
 
export default Pagination;