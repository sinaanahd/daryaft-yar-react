import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../../../assets/images/welcome-photo.png';
import tokenImg from '../../../../assets/images/token.png';
import snow_img from '../../../../assets/images/website/snow-icon.png'
class SampleHeader extends Component {
    state = {  } 
    render() { 
        return (
            <header className="sample-header mm-width">
                <span className="welcome">
                    <p className="text">
                        به کمپین
                        &nbsp;&nbsp;
                        <b>زمستان داغ</b>
                        &nbsp;&nbsp;
                        خوش اومدی
                    </p>
                </span>
                <Link to="/intro" className='logo-link'>
                    <img src={mainLogo} alt="" className="logo" />
                </Link>
                <Link to="/invite" className='token-link'>
                    <img src={tokenImg} alt="" className="token" />
                </Link>
                <img src={snow_img} alt="" className='snow-header'/>
            </header>
        );
    }
}
 
export default SampleHeader;