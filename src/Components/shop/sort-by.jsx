import React, { Component } from 'react';
import downIcon from '../../assets/images/down-icon.png';
class SortBy extends Component {
    state = {} 
    componentDidMount() {
        // console.log(this.props);
        // this.props.active_sort();
    }
    render() { 
        const { active_sort } = this.props;
        return (
            <div className="sort-by-wrapper" onClick={()=>active_sort()}>
                <div className="content">
                    دسته بندی  بر اساس
                </div>
                <div className="go-to-sort-by">
                    <img src={downIcon} alt="sort-by-img"/>
                </div>
            </div>
        );
    }
}
 
export default SortBy;