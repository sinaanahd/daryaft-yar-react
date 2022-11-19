import React, { Component } from 'react';
import BackBtn from '../reusables/back';
class CoinHeader extends Component {
    state = {  } 
    render() { 
        const { go} = this.props;
        return (
            <div className="header">
                <div className="page-title">
                    افزایش سکه‌ها
                </div>
                <BackBtn go={go } />
            </div>
        );
    }
}
 
export default CoinHeader;