import React, { Component } from 'react';
import Subject from './subject';
class Subjects extends Component {
    state = { 
    } 
    render() { 
        const { subjects ,clickHandler} = this.props;
        return (
            <>
                {subjects.map((sub) => <Subject subject={sub} key={sub.id} clickHandler={clickHandler } />)}
            </>
        );
    }
}
 
export default Subjects;