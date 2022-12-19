import React, { Component } from 'react';
import SampleFooter from '../sample/sample-footer';
import SampleHeader from '../sample/sample-header';
import copy_to_clip_board from '../../../functions/copy-to-clip-board';
import copyImg from "../../../../assets/images/copy-img.png";
import bigPom from '../../../../assets/images/anar-leaf-big.png';
import bigLeaf from '../../../../assets/images/leaf-big.png';
import withYalda from '../../../hoc/with-yalda';
class InviteFreinds extends Component {
    state = {  } 
    render() { 
        const { data } = this.props;
        return (
            <>
                <SampleHeader />
                <div className="increase-token-page-w mm-width">
                    <div className="main-content">
                        <img src={bigPom} alt="" className='big-pom' />
                        <h1>
                            دعوت از دوستان
                        </h1>
                        <p className="rules">
                            خب رفیق ، لینک زیر رو برای دوستات بفرست ، تا هم فالشون رو بگیری و هم این که با ثبت نام هر دوستت توی ربات، یک‌بار دیگه میتونی شانست رو‌ امتحان کنی و یک‌ صندوق دیگه باز کنی .
                        </p>
                        <div className="link-text">
                            <span className="user-link">
                                <bdi>
                                    {
                                        data.user ?
                                        data.user.campaign.referral_link
                                            :
                                            "در حال آماده سازی"
                                    }
                                </bdi>
                            </span>
                            <span
                                className="copy-wrapper"
                                onClick={() => {
                                    const to = data.user ? data.user.campaign.referral_link : "none";
                                    copy_to_clip_board(to);
                                }}
                            >
                                <span className="icon">
                                    <img src={copyImg} alt="" />
                                </span>
                                <span className="text">
                                    کپی کردن
                                </span>
                            </span>
                        </div>
                        <img src={bigLeaf} alt="" className='big-leaf' />
                    </div>
                </div>
                <SampleFooter />
            </>
        );
    }
}
 
export default withYalda(InviteFreinds);