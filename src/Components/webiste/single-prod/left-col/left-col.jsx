import React, { Component } from 'react';
import LeftColHeader from './left-col-header';
import MainContent from './main-content';
class LeftCol extends Component {
    state = {  } 
    render() { 
        const { book } = this.props;
        return (
            <div className="left-col">
                <LeftColHeader book={book} />
                <MainContent book={book} />
            </div>
        );
    }
}
 
export default LeftCol;