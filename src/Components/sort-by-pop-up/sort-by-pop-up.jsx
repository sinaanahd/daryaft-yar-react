import React, { Component } from 'react';
class PopUpSort extends Component {
    state = {  } 
    render() { 
        const { sort_by, sort , back } = this.props;
        return (
            <div className="filter-by-modal">
                <div className="wrapper-sort-by">
                    <div className="sort-by-wrapper">
                        <div className={sort_by === "normal" ? "sort sorted-by-none" : "sort disabled"} onClick={()=>sort("normal")}>
                            هیچکدام
                        </div>
                        <div className={sort_by === "least" ? "sort sorted-by-leastPrice" : "sort disabled"} onClick={()=>sort("least")}>
                            ارزان ترین
                        </div>
                        <div className={sort_by === "most" ? "sort sorted-by-mostprice" : "sort disabled"} onClick={()=>sort("most")}>
                            گران ترین
                        </div>
                        <div className={sort_by === "loved" ? "sort sorted-by-popularity" : "sort disabled"} onClick={()=>sort("loved")}>
                            محبوب ترین
                        </div>
                    </div>
                    <span className="save_and_return_btn srt" onClick={()=>back("sort-pop-up")}>
                        ذخیره و بازگشت
                    </span >
                </div>
            </div>
        );
    }
}
 
export default PopUpSort;