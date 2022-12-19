import React, { Component } from 'react';
import tokenIcon from '../../../../assets/images/token.png';
import bigPom from '../../../../assets/images/anar-leaf-big.png';
import bigLeaf from '../../../../assets/images/leaf-big.png';
import SampleFooter from '../sample/sample-footer';
import SampleHeader from '../sample/sample-header';
class YaldaRulesW extends Component {
    state = { 
        go: "",
        
    } 
    componentDidMount() {
        
    } 
    render() { 
        return (
            <>
                <SampleHeader />
                <div className="rules-page-w mm-width">
                    <div className="main-content">
                        <h1>
                        قوانین
                        </h1>
                        <img src={bigPom} alt="" className='big-pom' />
                        <p className="rule">
                            وقتی صندوقتو باز کردی ، ازش یه اسکرین شات به ادمین ربات دریافت یار
                            (به آیدی
                            &nbsp; 
                                <a href="https://t.me/daryaftbot_admin"><b>daryaftbot_admin@</b></a>
                            )
                            بفرست .
                        </p>
                        <p className="rule">
                            تو میتونی یک بار ، یک صندوق از بین ۹ صندوق هدیه انتخاب کنی و اونو بازش کنی .
                        </p>
                        <p className="rule">
                             یادت نره که به ازای هر کدوم از دوستات که با لینک دعوتت، داخل ربات ثبت نام کنن ، یک صندوق دیگه میتونی باز کنی و یک‌ جایزه دیگه ببری !
                        </p>
                        <img src={bigLeaf} alt="" className='big-leaf'/>
                    </div>
                </div>
                <SampleFooter />
            </>
        );
    }
}
 
export default YaldaRulesW;