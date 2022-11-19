import React, { Component } from 'react';
class Grade extends Component {
    state = {} 
    componentDidMount() {
        // const session = JSON.parse(sessionStorage.getItem("ag"));
        // if (session) {
        //     if (session.includes(this.props.grade.id)) {
        //         this.props.clickHandler(this.props.grade);
        //     }
        // }
    }
    render() { 
        const { grade ,clickHandler} = this.props;
        return (
            <span className={grade.clicked ? "book-year-item" : "book-year-item disabled"}  onClick={() => { clickHandler(grade) }}>
                {grade.name}
            </span>
        );
    }
}
 
export default Grade;