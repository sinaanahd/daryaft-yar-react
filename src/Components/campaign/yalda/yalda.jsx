import React, { Component } from 'react';
import withBackEndData from '../../hoc/with-back-end-data';
import BackBtn from '../../reusables/back';
import FooterBot from '../../shop-bot/botFooter';
import find_loc from '../../functions/find-loc';
import map_handler from '../../functions/map_handler';
import save_local_address from '../../functions/save_local_address';
import { Link } from 'react-router-dom';
import ChestConfirmation from './chest-text';
import Chest from './chest';
class Yalda extends Component {
    state = { 
        go: "",
        pop_up: false,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        clicked_chest : "",
    } 
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go = map_handler();
        this.setState({ go });
    }
    handle_pop_up = () => {
        this.setState({ pop_up: false });
    }
    chest_click = (num) => {
        this.setState({ pop_up: true , clicked_chest : num});
    }
    render() { 
        const { state } = this.props;
        return (
            <>
                <div className="yalda-page">
                    <div className="yalda-header yalda-btn">
                        <span className="title">
                            عنوان
                        </span>
                        <BackBtn state={state} go={this.state.go} />
                    </div>
                    <div className="main-content">
                        <p className="yalda-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <p className="read-rules">
                            حتما
                            &nbsp;
                            <Link to="./rules">
                                قوانین
                            </Link>
                            &nbsp;
                            رو مطالعه کن
                        </p>
                        <div className="chest-wrapper">
                            {this.state.numbers.map(num => <Chest key={num} num={num} chest_click={this.chest_click } />)}
                        </div>
                    </div>
                </div>
                {
                    this.state.pop_up ? 
                        <ChestConfirmation
                            chest_number={this.state.clicked_chest}
                            handle_pop_up={this.handle_pop_up}
                        /> :
                        <></>
                }
                <FooterBot
                    cart_count={state.cart ? state.cart.cart_details.length : "loading"}
                    error={state.error}
                />
            </>
        );
    }
}
 
export default withBackEndData(Yalda);