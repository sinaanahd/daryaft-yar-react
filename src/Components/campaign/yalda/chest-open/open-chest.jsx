import React, { Component } from 'react';
import withBackEndData from '../../../hoc/with-back-end-data';
import BackBtn from '../../../reusables/back';
import find_loc from '../../../functions/find-loc';
import save_local_address from '../../../functions/save_local_address';
import map_handler from '../../../functions/map_handler';
import bargBala from '../../../../assets/images/barg-bala.png';
import bargPaen from '../../../../assets/images/barg-paEn.png';
import anarBala from '../../../../assets/images/anar-bala.png';
import anarPaen from '../../../../assets/images/anar-paEn.png';
import openChest from '../../../../assets/images/yalda-chest-open.png';
import star from '../../../../assets/images/start-fal.png';
import { Link } from 'react-router-dom';
import FooterBot from '../../../shop-bot/botFooter';
class OpenChest extends Component {
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
        const { state } = this.props;
        return (
            <>
            <div className="open-chest">
                <div className="chest-header">
                    <span className="user-name">
                        {state.user.name}
                    </span>
                    <BackBtn
                        state={state}
                        go={this.state.go}
                    />
                </div>
                <div className="main-contet">
                    <div className="prize-wrapper">
                        <img src={anarBala} alt="" className="top-right" />
                        <img src={bargBala} alt="" className="top-left" />
                        <span className="prize-text">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در
                                ستون و سطرآنچنان که لازم است و برای شرایط
                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                        </span>
                        <img src={anarPaen} alt="" className="bottom-left" />
                        <img src={bargPaen} alt="" className="bottom-right" />
                    </div>
                    <div className="open-chest">
                        <img src={openChest} alt="صندوق باز شده" />
                    </div>
                    <div className="fal-wrapper">
                        <img src={star} alt="" />
                        <span className="text">
                            &nbsp;
                            <Link to="./falPage">
                                فال حافظ
                            </Link>
                            &nbsp;
                            یادت نره
                        </span>
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
 
export default withBackEndData(OpenChest);