import React, { Component } from 'react';
import arrowDown from "../../../../../../assets/images/website/arrow-down-icon.png";
//! modal for each filter item is not created
class Filters extends Component {
    state = {  } 
    render() { 
        return (
            <div className="filters_wrapper">
                <div className="filter">
                    <span className="text">
                        پایه تحصیلی
                    </span>
                    <span>
                        <img src={arrowDown} alt="فلش به سمت پایین" />
                    </span>
                </div>
                <div className="filter">
                    <span className="text">
                        رشته تحصیلی
                    </span>
                    <span>
                        <img src={arrowDown} alt="فلش به سمت پایین" />
                    </span>
                </div>
                <div className="filter">
                    <span className="text">
                        مولف
                    </span>
                    <span>
                        <img src={arrowDown} alt="فلش به سمت پایین" />
                    </span>
                </div>
                <div className="filter">
                    <span className="text">
                        سری
                    </span>
                    <span>
                        <img src={arrowDown} alt="فلش به سمت پایین" />
                    </span>
                </div>
                <div className="filter">
                    <span className="text">
                        سال چاپ
                    </span>
                    <span>
                        <img src={arrowDown} alt="فلش به سمت پایین" />
                    </span>
                </div>
            </div>
        );
    }
}
 
export default Filters;