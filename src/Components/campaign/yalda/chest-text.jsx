import React, { Component } from 'react';
import framLeaf1 from "../../../assets/images/frame-leaf.png";
import framLeaf2 from "../../../assets/images/frame-leaf2.png";
import { Link } from 'react-router-dom'; 
class ChestConfirmation extends Component {
    state = {  } 
    render() { 
        const { chest_number , handle_pop_up } = this.props;
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
                                <Link to="./openChest">
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