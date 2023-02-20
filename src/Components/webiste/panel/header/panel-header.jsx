import React, { Component } from "react";
import { Link } from "react-router-dom";
import Notifications from "./notification";
import ResponsiveSideBar from "../sidebar/responsive-side-bar";
import mainLogo from "../../../../assets/images/welcome-photo.png";
import wallet from "../../../../assets/images/svg/wallet.svg";
import bell from "../../../../assets/images/svg/bell.svg";
import coins from "../../../../assets/images/svg/coins.svg";
import avatar from "../../../../assets/images/svg/avatar.svg";
import lines from "../../../../assets/images/svg/lines.svg";
class PanleHeader extends Component {
  state = {
    notif: false,
    menu: false,
  };
  active_notif = () => {
    const notif = !this.state.notif;
    this.setState({ notif });
  };
  active_menu = () => {
    const menu = !this.state.menu;
    this.setState({ menu });
  };
  render() {
    const { user } = this.props;
    return (
      <header className="panel-header mm-width">
        <div
          className="responsive-menu"
          onClick={() => {
            this.active_menu();
          }}>
          <img src={lines} alt="" className="responsive-side-bar" />
        </div>
        <div className="panel-cl side start">
          <img src={avatar} alt="" className="user-avatar" />
          {user ? (
            <span className="user-name">{user.name}</span>
          ) : (
            <Link to="/Login">ورود / ثبت‌نام</Link>
          )}
        </div>
        <div className="panel-cl middle">
          <Link to="/main-panel">
            <img src={mainLogo} alt="دریافت یار" className="site-logo" />
          </Link>
        </div>
        <div className="panel-cl side end">
          <span className="wallet icons">
            <img src={wallet} alt="" className="incon" />
            <span className="text">{user ? user.amount : 0}</span>
          </span>
          <Link to={user ? "/increase-coin" : "/Login"} className="coin icons">
            <img src={coins} alt="" className="incon" />
            <span className="text">{user ? user.coin : 0}</span>
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
        {this.state.menu ? (
          <ResponsiveSideBar user={user} close_menu={this.active_menu} />
        ) : (
          <></>
        )}
      </header>
    );
  }
}

export default PanleHeader;
