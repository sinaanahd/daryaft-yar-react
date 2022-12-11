import React, { Component } from 'react';
class SortBy extends Component {
    state = {  } 
    render() { 
        return (
            <div className="sort-by-btn-wrapper">
                <span className="sort-by-item title">
                    مرتب سازی براساس:
                </span>
                <span className="sort-by-item active">
                    پرفروش‌ترین
                </span>
                <span className="sort-by-item">
                    پربازدیدترین
                </span>
                <span className="sort-by-item">
                    محبوب‌ترین
                </span>
                <span className="sort-by-item">
                    جدیدترین
                </span>
            </div>
        );
    }
}
 
export default SortBy;