import React, { Component } from 'react';
import chestClose from "../../../assets/images/yalda-chest-closed.png";
class Chest extends Component {
    state = {  } 
    render() { 
        const { num ,chest_click} = this.props;
        return (
            <div className="chest" key={num} onClick={()=>{chest_click(num)}}>
                <img src={chestClose} alt="" className="chest" />
                <span className="number-chest">
                    {num}
                </span>
            </div>
        );
    }
}
 
export default Chest;