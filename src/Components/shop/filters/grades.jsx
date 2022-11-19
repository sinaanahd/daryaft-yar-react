import React, { Component } from 'react';
import Grade from './grade';
class Grades extends Component {
    state = { 
    } 
    render() { 
        const { grades ,clickHandler } = this.props;
        return (
            <>
                {grades.map((grade) => <Grade key={grade.id} grade={grade} clickHandler={clickHandler} />)}
            </>
        );
    }
}
 
export default Grades;