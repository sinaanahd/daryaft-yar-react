import React, { Component } from 'react';
import chestClose from "../../../../assets/images/yalda-chest-closed.png";
import chestOpen from "../../../../assets/images/yalda-chest-open.png";
class YaldaChest extends Component {
    state = {  } 
    render() { 
        const { num ,chest_click , opened_chests} = this.props;
        return (
            <div className="chest" key={num}
                onClick={() => {
                    if (!opened_chests.includes(num)) {
                        chest_click(num)
                    }
                }}
            >
                <img src={ opened_chests.includes(num) ? chestOpen : chestClose} alt="" className="chest" />
                <span className="number-chest">
                    {num}
                </span>
            </div>
        );
    }
}
 
export default YaldaChest;