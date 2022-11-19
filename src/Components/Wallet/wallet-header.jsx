import React, { Component } from 'react';
import BackBtn from '../reusables/back';
class WalletHeader extends Component {
    state = {  } 
    render() { 
        const { state  , go} = this.props;
        return (
            <div className="wallet-header">
                <BackBtn state={state} go={go } />
            </div>
        );
    }
}
 
export default WalletHeader;