import React, { Component } from 'react';
import Courses from './filters/courses';
import Grades from './filters/grades';
import Publishers from './filters/publishers';
import Subjects from './filters/subjects';
import find_loc from '../functions/find-loc';
import save_local_address from '../functions/save_local_address';
class FilterOptions extends Component {
    state = {
    } 
    componentDidMount() {
    }
    render() { 
        const { filter , filters , clickHandler , back} = this.props;
        return (
            <div className="books-wrapper filters-are-activated">
                {filter === "pub" ? <Publishers publishers={filters.publishers} clickHandler={clickHandler} /> : ""}
                {filter === "gra" ? <Grades grades={filters.grades} clickHandler={clickHandler} /> : ""}
                {filter === "cou" ? <Courses courses={filters.courses} clickHandler={clickHandler} /> : ""}
                {filter === "sub" ? <Subjects subjects={filters.subjects} clickHandler={clickHandler} /> : ""}
                <span className={(filter === "pub") || (filter === "cou") ? "save_and_return_btn fixed-btn" : "save_and_return_btn"} onClick={()=>back("filters")}>
                    ذخیره و بازگشت
                </span>
            </div>
        );
    }
}
 
export default FilterOptions;