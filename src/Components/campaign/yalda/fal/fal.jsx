import React, { Component } from 'react';
import find_loc from '../../../functions/find-loc';
import save_local_address from '../../../functions/save_local_address';
import map_handler from '../../../functions/map_handler';
import withBackEndData from '../../../hoc/with-back-end-data';
import BackBtn from '../../../reusables/back';
import FooterBot from '../../../shop-bot/botFooter';
import bargBala from '../../../../assets/images/barg-bala.png';
import bargPaen from '../../../../assets/images/barg-paEn.png';
import anarBala from '../../../../assets/images/anar-bala.png';
import anarPaen from '../../../../assets/images/anar-paEn.png';
import { Link } from 'react-router-dom';
class FalPage extends Component {
    state = { 
        go: "",
        more : false,
    } 
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go = map_handler();
        this.setState({ go });
    }
    handle_open_more = () => {
        const more = !this.state.more;
        this.setState({ more });
    }
    render() { 
        const { state } = this.props;
        return (
            <>
                <div className="fal-page">
                    <div className="fal-header">
                        <span className="user-name">
                            {state.user.name}
                        </span>
                        <BackBtn
                            state={state}
                            go={this.state.go}
                        />
                    </div>
                    <div className="main-content">
                        <div className={this.state.more ? "fal-wrapper more" : "fal-wrapper"}>
                            <img src={anarBala} alt="" className="top-right" />
                            <img src={bargBala} alt="" className="top-left" />
                            <p className="fal-text">
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                                اگر آن ترک شيرازی به دست آرد دل ما را
                                <br />
                                به خال هندويش بخشم سمرقند و بخارا را
                                <br />
                            </p>
                            <img src={anarPaen} alt="" className="bottom-left" />
                            <img src={bargPaen} alt="" className="bottom-right" />
                            <span className="more-btn" onClick={()=>{this.handle_open_more()}}>
                                {!this.state.more ? "بیشتر" : "کمتر"}
                            </span>
                        </div>
                        <div className="fal-result">
                            <span className="title">
                                تعبیر:
                            </span>
                            <p className="result-text">
                                حافظ در این غزل روحی امیدوار را به نمایش می گذارد که به شیرینی زندگانی و بهبود روزگار آینده دلبسته است
                            </p>
                        </div>
                        <div className="to-prize">
                            <span className="arrow">
                                {"<<"}
                            </span>
                            <Link to="./yalda">
                                رفتن به جایزه
                            </Link>
                        </div>
                    </div>
                </div>
                <FooterBot
                    cart_count={state.cart ? state.cart.cart_details.length : "loading"}
                    error={state.error}
                />
            </>
        );
    }
}
 
export default withBackEndData(FalPage);