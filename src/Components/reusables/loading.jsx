import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';
class Loading extends Component {
    state = {  } 
    render() { 
        const { pause } = this.props;
        return (
            <div className={pause ? "pause" : "pause none"}>
                <FaSpinner />
            </div>
        );
    }
}
 
export default Loading;