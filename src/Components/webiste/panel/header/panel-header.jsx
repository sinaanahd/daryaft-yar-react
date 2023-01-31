import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from "../../../../assets/images/welcome-photo.png";
import wallet from '../../../../assets/images/svg/wallet.svg';
import bell from '../../../../assets/images/svg/bell.svg';
import coins from '../../../../assets/images/svg/coins.svg';
import avatar from '../../../../assets/images/svg/avatar.svg';

class PanleHeader extends Component {
    state = {  } 
    render() { 
        const { user } = this.props;
        return (
            <header className="panel-header mm-width">
                <div className="panel-cl side">
                    <img src={avatar} alt="" className="user-avatar" />
                    <span className="user-name">
                        {user.name}
                    </span>
                </div>
                <div className="panel-cl middle">
                    <Link to="/home">
                        <img src={mainLogo} alt="دریافت یار" className="site-logo" />
                    </Link>
                </div>
                <div className="panel-cl side end">
                    <span className="wallet icons">
                        <img src={wallet} alt="" className="incon" />
                        <span className="text">
                            {user.amount}
                        </span>
                    </span>
                    <span className="coin icons">
                        <img src={coins} alt="" className="incon" />
                        <span className="text">
                            {user.coin}
                        </span>
                    </span>
                    <span className="bell icons">
                        <img src={bell} alt="" className="incon" />
                    </span>
                </div>
            </header>
        );
    }
}
 
export default PanleHeader;