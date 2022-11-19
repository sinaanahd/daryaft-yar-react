import React, { Component } from 'react';
import axios from 'axios';
import Publisher from './publisher';
class Publishers extends Component {
    state = { 
    }
    render() { 
        const { publishers ,clickHandler} = this.props;
        return (
            <>
                {publishers ? publishers.map((pub) => <Publisher publisher={pub} key={pub.id} clickHandler={clickHandler } />):"none"}
            </>
        );
    }
}
 
export default Publishers;