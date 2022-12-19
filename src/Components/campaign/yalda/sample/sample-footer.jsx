import React, { Component } from 'react';
import mainLogo from '../../../../assets/images/welcome-photo.png';
import { Link } from 'react-router-dom';
import anarPaen from '../../../../assets/images/anar-paEn.png';
import anarBala from '../../../../assets/images/anar-bala.png';
class SampleFooter extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="sample-footer mm-width"> 
                <img src={anarPaen} alt="" className='b-l' />  
                <img src={anarBala} alt="" className='t-r'/>    
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