import React, { Component } from 'react';
class Course extends Component {
    state = {} 
    componentDidMount() {
        // const session = JSON.parse(sessionStorage.getItem("selected_items"));
        // if (session) {
        //     if (session.includes(this.props.course.id)) {
        //         this.props.clickHandler(this.props.course);
        //     }
        // }
    }
    render() { 
        const { course , clickHandler} = this.props;
        return (
            <span className={course.clicked ? "course-item" : "course-item disabled"} onClick={()=>{clickHandler(course)}}>
                {course.name}
            </span>
        );
    }
}
 
export default Course;