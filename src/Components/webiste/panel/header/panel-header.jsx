import React, { Component } from "react";
import { Link } from "react-router-dom";
import Notifications from "./notification";
import mainLogo from "../../../../assets/images/welcome-photo.png";
import wallet from "../../../../assets/images/svg/wallet.svg";
import bell from "../../../../assets/images/svg/bell.svg";
import coins from "../../../../assets/images/svg/coins.svg";
import avatar from "../../../../assets/images/svg/avatar.svg";
class PanleHeader extends Component {
  state = {
    notif: false,
  };
  active_notif = () => {
    const notif = !this.state.notif;
    this.setState({ notif });
  };
  render() {
    const { user } = this.props;
    return (
      <header className="panel-header mm-width">
        <div className="panel-cl side">
          <img src={avatar} alt="" className="user-avatar" />
          <span className="user-name">{user.name}</span>
        </div>
        <div className="panel-cl middle">
          <Link to="/home">
            <img src={mainLogo} alt="دریافت یار" className="site-logo" />
          </Link>
        </div>
        <div className="panel-cl side end">
          <span className="wallet icons">
            <img src={wallet} alt="" className="incon" />
            <span className="text">{user.amount}</span>
          </span>
          <Link to="/increase-coin" className="coin icons">
            <img src={coins} alt="" className="incon" />
            <span className="text">{user.coin}</span>
          </Link>
          <span
            className="bell icons"
            onClick={() => {
              this.active_notif();
            }}>
            <img src={bell} alt="" className="incon" />
            {this.state.notif ? <Notifications user={user} /> : <></>}
          </span>
        </div>
      </header>
    );
  }
}

export default PanleHeader;
