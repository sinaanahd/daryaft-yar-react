import React, { Component } from 'react';
import phoneIcon from '../../../../assets/images/svg/phone-icon.svg';
import userIcon from '../../../../assets/images/svg/user-icon.svg';
import homeIcon from '../../../../assets/images/svg/home-icon.svg';
import postIcon from '../../../../assets/images/svg/post-icon.svg';
import telephoneIcon from '../../../../assets/images/svg/telephone-icon.svg';
class UserInfo extends Component {
    state = {  } 
    render() { 
        const { user } = this.props;
        return (
            <div className="user-info">
                <h3 className="title">
                    اطلاعات شخصی
                </h3>
                <div className="forms">
                    <span className="form name">
                        <input type="text" className="name" placeholder={"نام فعلی :  " + user.real_name} />
                        <img src={userIcon} alt="" />
                    </span>
                    <span className="form phone-number">
                        <input type="number" className="phone-number" placeholder={"شماره فعلی :  " + user.real_home_number} />
                        <img src={phoneIcon} alt="" />
                    </span>
                    <span className="form home">
                        <textarea className="home" placeholder={"آدرس فعلی :  " + user.real_address} />
                        <img src={homeIcon} alt="" />
                    </span>
                    <span className="form post">
                        <input type="number" className="postalcode" placeholder={"کدپستی فعلی :  " + user.real_postal_code} />
                        <img src={postIcon} alt="" />
                    </span>
                    <span className="form name">
                        <input type="number" className="telephone" placeholder={"شماره فعلی :  " + user.real_home_number} />
                        <img src={telephoneIcon} alt="" />
                    </span>
                </div>
                <span className="submit">
                    ثبت تغییرات
                </span>
            </div>
        );
    }
}
 
export default UserInfo;