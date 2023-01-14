import React, { Component } from 'react';
import mainLogo from '../../../../assets/images/welcome-photo.png';
import { Link } from 'react-router-dom';
import tree from '../../../../assets/images/website/trees-icon.png';
class SampleFooter extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="sample-footer mm-width"> 
                <img src={tree} alt="" className='b-l' />     
                <ul className="links">
                    <li>
                        <Link to="./invite" >
                            دعوت از دوستان
                        </Link>
                    </li>
                    <li>
                        <a href="https://t.me/daryaftbot_admin" target="_blank">
                            ارتباط با ادمین
                        </a>
                    </li>
                </ul>
                <img src={mainLogo} />
            </footer>
        );
    }
}
 
export default SampleFooter;