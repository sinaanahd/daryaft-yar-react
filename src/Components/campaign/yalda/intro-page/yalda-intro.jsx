import React, { Component } from 'react';
import banner from "../../../../assets/images/yalda-banner-2.jpg";
import { Link } from 'react-router-dom';
import SampleHeader from '../sample/sample-header';
import SampleFooter from '../sample/sample-footer';
import withYalda from '../../../hoc/with-yalda';
class YaldaIntro extends Component {
    state = {  } 
    render() { 
        const { user } = this.props;
        return (
            <>
                <SampleHeader />
                <div className="yalda-intro mm-width">
                <div className="img-wrapper">
                    <Link to="./yalda/login">
                        <img src={banner} alt="کمپین یلدا" />   
                    </Link>
                </div>
                <div className="intro-text">
                    <h1>
                        متن معرفی و توضیحی
                    </h1>
                    <p>
                        سلام دوست خوبم ،
                        به جشنواره یلدایی دریافت یار خوش اومدی !
                        <br />
                        قراره فال بگیری و جایزه ببری :{")"}
                        کلی جایزه نقدی و تخفیف انتظارتو میکشن.
                        <br />
                        فقط کافیه <b> صندوقا</b> رو باز کنی !
                        <br />
                    </p>
                </div>
                    <Link
                        to={user ? "./yalda" : "./Ylogin"}
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
 
export default withYalda(YaldaIntro);