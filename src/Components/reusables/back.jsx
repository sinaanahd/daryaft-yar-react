import React, { Component } from 'react';
import backimg from "../../assets/images/back-forward-btn.png"; 
import { Link } from 'react-router-dom';
import map_handler from '../functions/map_handler';
class BackBtn extends Component {
    state = {
    }
    componentDidMount() {
    }
    handle_went = () => {
        let address_to_here = JSON.parse(localStorage.getItem("address"));
        const splited = address_to_here.split("/");
        const len = splited.length - 1;
        address_to_here = address_to_here.replace(splited[len - 1]+"/", "");
        localStorage.setItem("address", JSON.stringify(address_to_here));
    }
    render() { 
        const { go } = this.props;
        return (
            <Link className="back" to={go} onClick={()=>{this.handle_went()}}>
                <img src={backimg} alt="عکس بازگشت" className="back-img" />
            </Link>
        );
    }
}
 
export default BackBtn;