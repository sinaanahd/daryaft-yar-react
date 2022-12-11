import React, { Component } from 'react';
import forwardIcon from "../../../../../assets/images/website/arrow-forward-icon.png";
import backIcon from "../../../../../assets/images/website/arrow-back-icon.png";
class Pagination extends Component {
    state = {  } 
    render() { 
        return (
            <div className="pagination">
                <div className="next-page move-btn">
                    <img src={forwardIcon} alt="" />
                    <span className="text">
                        صفحه بعد
                    </span>
                </div>
                <div className="pages-wrapper">
                    <span className="page-number active">
                        1
                    </span>
                    <span className="page-number">
                        2
                    </span>
                    <span className="page-number">
                        3
                    </span>
                    <span className="dots">
                        ...
                    </span>
                    <span className="page-number">
                        34
                    </span>
                    <span className="page-number">
                        35
                    </span>
                </div>
                <div className="prev-page move-btn">
                    <span className="text">
                        صفحه قبل
                    </span>
                    <img src={backIcon} alt="" />
                </div>
            </div>
        );
    }
}
 
export default Pagination;