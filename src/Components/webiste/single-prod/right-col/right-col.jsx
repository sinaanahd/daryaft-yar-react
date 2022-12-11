import React, { Component } from 'react';
import SingleCartDetails from './add-to-cart';
class RightCol extends Component {
    state = {  } 
    render() { 
        const { book } = this.props;
        return (
            <div className="right-col">
                <div className="img-wrapper">
                    <img src={book.img_url} alt={book.name} />
                </div>
                <SingleCartDetails book={book}/>
            </div>
        );
    }
}
 
export default RightCol;