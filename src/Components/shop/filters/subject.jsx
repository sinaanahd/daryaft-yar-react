import React, { Component } from 'react';
class Subject extends Component {
    state = {} 
    componentDidMount() {
    }
    render() { 
        const { subject,clickHandler } = this.props;
        return (
            <span className={subject.clicked ? "subject-item" : "subject-item disabled"} onClick={() => { clickHandler(subject) }}>
                {subject.name}
            </span>
        );
    }
}
 
export default Subject;