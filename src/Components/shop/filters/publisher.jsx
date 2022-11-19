import React, { Component } from 'react';
const publishers = JSON.parse(sessionStorage.getItem('selected_items')) ? JSON.parse(sessionStorage.getItem('selected_items')).active_publishers : "";
class Publisher extends Component {
    state = {}
    componentDidMount() {
    }
    render() { 
        const { publisher, clickHandler } = this.props;
        return (
            <span className={publishers.includes(publisher.id) || publisher.clicked ?
                "publisher-item" : "publisher-item disabled"
            } onClick={() => { clickHandler(publisher) }}>
                {publisher.name}
            </span>
        );
    }
}
 
export default Publisher;