import React, { Component } from 'react';
import BackBtn from '../reusables/back';
class FinalCartHeader extends Component {
    state = {  } 
    render() { 
        const { go} = this.props;
        return (
            <div className="cart-header">
                <BackBtn go={go } />
                <div className="cart-page-title">
                    سبد خرید
                </div>
            </div>
        );
    }
}
 
export default FinalCartHeader;