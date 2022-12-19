import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../../../assets/images/welcome-photo.png';
import tokenImg from '../../../../assets/images/token.png';
import leafPom from '../../../../assets/images/anar-leaf-big.png'
class SampleHeader extends Component {
    state = {  } 
    render() { 
        return (
            <header className="sample-header mm-width">
                <span className="welcome">
                    <p className="text">
                        به کمپین یلدا خوش اومدی
                    </p>  
                    <img src={leafPom} alt="" />
                </span>
                <Link to="./yalda-intro" className='logo-link'>
                    <img src={mainLogo} alt="" className="logo" />
                </Link>
                <Link to="./invite" className='token-link'>
                    <img src={tokenImg} alt="" className="token" />
                </Link>
            </header>
        );
    }
}
 
export default SampleHeader;