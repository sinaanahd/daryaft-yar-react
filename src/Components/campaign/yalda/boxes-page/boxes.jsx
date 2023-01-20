import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChestConfirmation from './chest-text';
import SampleFooter from '../sample/sample-footer';
import SampleHeader from '../sample/sample-header';
import withYalda from '../../../hoc/with-yalda';
import Chest from './chest';
class Campagin extends Component {
    state = { 
        go: "",
        pop_up: false,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        clicked_chest : "",
    } 
    componentDidMount() {
        // const place = find_loc(window.location.pathname);
        // save_local_address(place);
        // let go = map_handler();
        // this.setState({ go });
    }
    handle_pop_up = () => {
        this.setState({ pop_up: false });
    }
    chest_click = (num) => {
        this.setState({ pop_up: true , clicked_chest : num});
    }
    render() { 
        const { user } = this.props;
        return (
            <>
                <SampleHeader tokens={user ? user.campaign.user_token : 0} />
                <div className="yalda-page-w mm-width">
                    {/* <div className="yalda-header yalda-btn">
                        <span className="title">
                            عنوان
                        </span>
                        <BackBtn state={state} go={this.state.go} />
                    </div> */}
                    <div className="main-content">
                    {/* <img src={pomLeaf } className="t-l" alt="" /> */}
                        <p className="yalda-text">
                            جایزه نقدی ۳ میلیون تومانی
                            ، کلاس و کتاب و مشاوره رایگان
                            ، کلی کد تخفیف و کلی کارت هدیه داخل صندوق ها منتظرتن ...
                            یه صندوق باز کن و شانستو امتحان کن :{")"}
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
                            {this.state.numbers.map(num => <Chest
                                key={num}
                                num={num}
                                chest_click={this.chest_click}
                                opened_boxes={user ? user.campaign.opened_boxes : []}
                            />)}
                        </div>
                    {/* <img src={bigLeaf } className="b-r" alt="" /> */}
                    </div>
                {
                    this.state.pop_up ? 
                        <ChestConfirmation
                            chest_number={this.state.clicked_chest}
                                handle_pop_up={this.handle_pop_up}
                                user={user}
                        /> :
                        <></>
                }
                </div>
                {/* <FooterBot
                    cart_count={state.cart ? state.cart.cart_details.length : "loading"}
                    error={state.error}
                /> */}
                <SampleFooter />
            </>
        );
    }
}
 
export default withYalda(Campagin);