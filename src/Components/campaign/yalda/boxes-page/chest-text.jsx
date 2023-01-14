import React, { Component } from 'react';
import framLeaf1 from "../../../../assets/images/frame-leaf.png";
import framLeaf2 from "../../../../assets/images/frame-leaf2.png";
import { Link } from 'react-router-dom'; 
import withYalda from '../../../hoc/with-yalda';
import axios from 'axios';
class ChestConfirmation extends Component {
    state = {
        
    } 
    prize_open = (num) =>{
        const user = this.props.user;
        const user_token = user.campaign.user_token - 1 ;
        const prize_id = user.campaign.prize[0];
        if (user.campaign.user_token > 0) {
            axios
                .patch(`https://daryaftyar.ir/storeV2/user/${user.user_id}`, { opening_box_number: num, user_token })
                .then(res => {
                    let user = res.data;
                    localStorage.setItem("user", JSON.stringify(user));
                })
                .catch(err => alert(err.message));
        }
    }
    render() { 
        const { chest_number , handle_pop_up , user } = this.props;
        return (
            <div className="chest-pp-wrapper">
                <div className="content">
                    <img
                        src={framLeaf1}
                        alt=""
                        className="frame-top"
                    />
                    <div className="text-btn">
                        <span className="text">
                            از باز کردن صندوق شماره
                            &nbsp;
                            {chest_number}
                            &nbsp;
                            مطمئنی؟
                        </span>
                        <span className="btns">
                            <span className="yes">
                                <Link
                                    to={user.campaign.user_token > 0 ? "./w-prize" : "./invite"}
                                    onClick={()=>{this.prize_open(chest_number)}}
                                >
                                    بله
                                </Link>
                            </span>
                            <span
                                className="no"
                                onClick={()=>{handle_pop_up()}}
                            >
                                خیر
                            </span>
                        </span>
                    </div>
                    <img
                        src={framLeaf2}
                        alt=""
                        className="frame-bottom"
                    />
                </div>
            </div>
        );
    }
}
 
export default ChestConfirmation;