import React, { Component } from 'react';
import Course from './course';
class Courses extends Component {
    state = {  
    } 
    render() { 
        const { courses , clickHandler} = this.props;
        return (
            <>
                {courses.map((cou) => <Course clickHandler={clickHandler } course={cou} key={ cou.id } />)}
            </>
        );
    }
}
 
export default Courses;