import React, { Component } from 'react';
import Filters from './filters/filters';
class SideBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className="side-bar">
                <div className="page-text">
                    <h1>
                        دنیای کتاب
                    </h1>
                </div>
                <div className="show-in-stock">
                    <span className="text">
                        نمایش کالاهای موجود
                    </span>
                    <span className="btn">
                        {/* <span className="circle disactive"> */}
                        <span className="circle">
                        </span>
                    </span>
                </div>
                <Filters></Filters>
            </div>
        );
    }
}
 
export default SideBar;