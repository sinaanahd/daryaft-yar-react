import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../../panel/header/panel-header";
import PanelSideBar from "../../panel/sidebar/panel-sidebar";
import bigSlider from '../../../../assets/images/website/big-banner-1.jpg';
import plusQuestion from '../../../../assets/images/svg/plus-question.svg';
import { Link } from "react-router-dom";
class MainPagePK extends Component {
    state = { 
        active: 0,
        banners: [
            {
                banner: bigSlider,
                id: 0,
                desc: "",
                link : "#"
            },
            {
                banner: bigSlider,
                id: 1,
                desc: "",
                link : "#"
            },
            {
                banner: bigSlider,
                id: 2,
                desc: "",
                link : "#"
            },
            {
                banner: bigSlider,
                id: 3,
                desc: "",
                link : "#"
            },
        ],
    } 
    change_slider = (active) => {
        this.setState({ active });
    }
    render() { 
        const { user } = this.props;
        return (
            <>
                <PanleHeader
                    user={user}
                />
                <section className="main-page-pk mm-width">
                    <div className="main-area">
                        <div className="slider">
                            {<img
                                src={this.state.banners[this.state.active].banner}
                                alt={this.state.banners[this.state.active].desc}
                            />}
                            <span className="btns-for-slider">
                                {this.state.banners.map((banner) => <span
                                    key={banner.id}
                                    className={this.state.active === banner.id ? "b-active b-btn" : "b-btn"}
                                    onClick={()=>{this.change_slider(banner.id)}}
                                ></span>)}
                            </span>
                        </div>
                        <div className="second-row-pk">
                            <div className="ask-question cols">
                                <span className="title">
                                    <span className="icon">
                                        <img src={plusQuestion} />
                                    </span>
                                    <h3 className="title">
                                        سوال خودتو اینجا بپرس
                                    </h3>
                                </span> 
                                <span className="question-textarea">
                                    <textarea placeholder="تایپ کن ...">
                                    </textarea>
                                </span>
                                <span className="select-subject">
                                    انتخاب موضوع
                                </span>
                                <span className="send-question-wrapper">
                                    <span className="send-question-btn">
                                        ارسال
                                    </span>
                                </span>
                            </div>
                            <div className="latest-question cols">
                                <h3 className="title">
                                    آخرین سوال ها
                                </h3>
                                <div className="questions-wrapper">
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="question">
                                        <p className="question-text">
                                            قندکافت و اکسایش پیرووات و چرخه کربس هر سه
                                              تا یه نوع اکسایش محسوب میشن ؟ 
                                        </p>
                                        <span className="btns-wrapper">
                                            <span className="answer-btn">
                                                پاسخ دادن
                                            </span>
                                            <span className="tags">
                                                <span className="tag">
                                                    زیست
                                                </span>
                                                <span className="tag">
                                                    زیست
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <Link to="/questions" className="all-question">
                                    همه سوال‌ها
                                </Link>
                            </div>
                        </div>
                    </div>
                    <PanelSideBar />
                </section>
            </>
        );
    }
}
 
export default withWebsiteData(MainPagePK);