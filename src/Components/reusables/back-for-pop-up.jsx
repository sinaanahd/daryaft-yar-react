import React, { Component } from 'react';
import backimg from "../../assets/images/back-forward-btn.png"; 
import { Link } from 'react-browser-router';
import map_handler from '../functions/map_handler';
class PopUpBack extends Component {
    state = {
    }
    componentDidMount() {
    }
    render() { 
        const { which , back } = this.props;
        return (
            <div className="back"  onClick={()=>{back(which)}}>
                <img src={backimg} alt="عکس بازگشت" className="back-img" />
            </div>
        );
    }
}
 
export default PopUpBack;