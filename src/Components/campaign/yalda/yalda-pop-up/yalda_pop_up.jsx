import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import crossIcon from "../../../../assets/images/plus-white.png";
import yaldaBanner1 from "../../../../assets/images/yalda-banner-1.jpg";
class YaldaPopUp extends Component {
    state = {  } 
    render() { 
        const { campaign_close } = this.props;
        return (
            <div className="banner_wrapper">
                <div className="img-btn-wrapper">
                    <span
                        className="close-yalda"
                        onClick={() => { campaign_close() }}
                    >
                        <img src={crossIcon} alt="بستن" />
                    </span>
                    <img
                        src={yaldaBanner1}
                        alt="بنر یلدا"
                        className='yalda-photo'
                    />
                </div>
                <Link to="./falPage">
                    ورود
                </Link>
            </div>
        );
    }
}
 
export default YaldaPopUp;