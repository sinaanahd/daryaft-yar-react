import React, { Component } from 'react';
import find_loc from '../../../functions/find-loc';
import save_local_address from '../../../functions/save_local_address';
import map_handler from '../../../functions/map_handler';
import FooterBot from '../../../shop-bot/botFooter';
import withBackEndData from '../../../hoc/with-back-end-data';
import BackBtn from '../../../reusables/back';
import copy_to_clip_board from '../../../functions/copy-to-clip-board';
import copyImg from "../../../../assets/images/copy-img.png";
import tokenIcon from '../../../../assets/images/token.png';
import bigPom from '../../../../assets/images/anar-leaf-big.png';
import bigLeaf from '../../../../assets/images/leaf-big.png';
class IncreaseToken extends Component {
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
    render() { 
        const { state } = this.props;
        return (
            <>
                <div className="increase-token-page">
                    <div className="token-header">
                        <span className="token-icon">
                            <img src={tokenIcon} alt="افزایش توکن" />
                            <span className="token-count">
                                1
                            </span>
                        </span>
                        <span className="page-title">
                            افزایش توکن
                        </span>
                        <span className="back-place">
                            <BackBtn
                                state={state}
                                go={this.state.go}
                            />
                        </span>
                    </div>
                    <div className="main-content">
                        <img src={bigPom} alt="" className='big-pom' />
                        <p className="rules">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                            از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و
                            مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی
                            مورد نیاز و کاربردهای متنوع با
                            هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                        <div className="link-text">
                            <span className="user-link">
                                <bdi>
                                    hhtps://_____________________/_______/
                                </bdi>
                            </span>
                            <span
                                className="copy-wrapper"
                                onClick={() => copy_to_clip_board("none")}
                            >
                                <span className="icon">
                                    <img src={copyImg} alt="" />
                                </span>
                                <span className="text">
                                    کپی کردن
                                </span>
                            </span>
                        </div>
                        <img src={bigLeaf} alt="" className='big-leaf'/>
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
 
export default withBackEndData(IncreaseToken);