import React, { Component } from 'react';
import find_loc from '../../../functions/find-loc';
import save_local_address from '../../../functions/save_local_address';
import map_handler from '../../../functions/map_handler';
import withBackEndData from '../../../hoc/with-back-end-data';
class FalPage extends Component {
    state = { 
        go: "",
    } 
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go = map_handler();
        this.setState({ go });
    }
    render() { 
        return (
            <div className="fal-page">
                <div className="main-content">
                    <p className="fal-text">
                        سینا اناهید
                    </p>
                </div>
            </div>
        );
    }
}
 
export default withBackEndData(FalPage);