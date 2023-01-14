import React, { Component } from 'react';
import topPom from "../../../../assets/images/website/snow-icon.png";
import bottomPom from "../../../../assets/images/website/trees-rec-icon.png";
import topLeaf from "../../../../assets/images/website/snow-half-icon.png";
import bottomLeaf from "../../../../assets/images/website/trees-icon.png";
import openChest from "../../../../assets/images/yalda-chest-open.png";
import { Link } from 'react-router-dom';
import SampleFooter from '../sample/sample-footer';
import SampleHeader from '../sample/sample-header';
import withYalda from '../../../hoc/with-yalda';
class PrizePage extends Component {
    state = { 
        more : false,
    } 
    componentDidMount() {
        
    }
    handle_open_more = () => {
        const more = !this.state.more;
        this.setState({ more });
    }
    render() { 
        const { user } = this.props;
        return (
            <>
                <SampleHeader />
                <div className="fal-page-w">
                    <div className="main-content">
                        {/* <div className={this.state.more ? "fal-wrapper more" : "fal-wrapper"}>
                            <img src={anarBala} alt="" className="top-right" />
                            <img src={bargBala} alt="" className="top-left" />
                            <span className="fal-text">
                                {user ? user.campaign.faal.text.map((t , i) => <p key={i++}>{t }</p>) : "درحال بارگذاری"}
                            </span>
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
                                {user ? user.campaign.faal.tabir : "در حال بارگذاری"}
                            </p>
                        </div> */}
                        <div className="fal-wrapper more">
                            <img src={topPom} alt="" className="top-right" />
                            <img src={topLeaf} alt="" className="top-left" />
                            <span className="prize-text">
                                {user ?
                                    user.campaign.prize.slice(1,user.campaign.prize.length).map((t, i) => <p key={ i++ }>{t}</p> )
                                    :
                                    "در حال بارگذاری"
                                }
                            </span>
                            <img src={bottomPom} alt="" className="bottom-left" />
                            <img src={bottomLeaf} alt="" className="bottom-right" />
                        </div>
                        <div className="open-chest">
                            <img src={openChest} alt="" />
                        </div>
                    </div>
                </div>
                <SampleFooter />
            </>
        );
    }
}
 
export default withYalda(PrizePage);