import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SampleHeader from '../sample/sample-header';
import SampleFooter from '../sample/sample-footer';
import withYalda from '../../../hoc/with-yalda';
import banner from "../../../../assets/images/campaign-banner.jpg";
class CampagingIntro extends Component {
    state = {  } 
    render() { 
        const { user } = this.props;
        return (
            <>
                <SampleHeader tokens={user ? user.campaign.user_token : 0} />
                <div className="yalda-intro mm-width">
                <div className="img-wrapper">
                    <Link to={user ? "./campaign" : "./Clogin"}>
                        <img src={banner} alt="کمپین زمستانه" />   
                    </Link>
                </div>
                <div className="intro-text">
                    <h1>
                        متن معرفی و توضیحی
                    </h1>
                    <p>
                        سلام دوست خوبم ،
                            به جشنواره
                        &nbsp;
                        <b>زمستان داغ</b>
                        &nbsp;
                            دریافت یار خوش اومدی !
                        <br />
                        قراره جایزه ببری :{")"}&nbsp;کلی جایزه نقدی و تخفیف انتظارتو میکشن. 
                        <br />
                        فقط کافیه <b> صندوقا</b> رو باز کنی !
                        <br />
                    </p>
                </div>
                    <Link
                        to={user ? "./campaign" : "./Clogin"}
                        className='go-to-campaging'
                    >
                    ورود به کمپین
                </Link>
                </div>
                <SampleFooter />
            </>
        );
    }
}
 
export default withYalda(CampagingIntro);