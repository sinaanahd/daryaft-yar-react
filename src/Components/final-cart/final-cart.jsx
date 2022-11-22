import React, { Component } from 'react';
import withBackEndData from '../hoc/with-back-end-data';
import split_in_three from '../functions/spilit_in_three';
import FinalCartHeader from './final-cart-header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FooterBot from '../shop-bot/botFooter';
import find_loc from '../functions/find-loc';
import save_local_address from '../functions/save_local_address';
import map_handler from '../functions/map_handler';

class FinalCart extends Component {
    state = {
        url: "",
        go:""
    } 
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go = map_handler();
        this.setState({ go });
        const us_id = window.Telegram.WebApp.initData;
        const final_id = "341393410";
        axios
            .get(`https://daryaftyar.ir/storeV2/payrequest/${final_id}`)
            .then(res => {
                let url = res.data.url_to_pay;
                this.setState({ url });
            })
            .catch(err => console.log(err))
    }
    disactive_click = (e) => {
        if (this.state.url === "") {
            e.preventDefault();
        }
    }
    render() { 
        const { state: data  , go_to , update_address} = this.props;
        return (
            <>
                <div className="cart-final-stage-page-wrapper">
                    <FinalCartHeader state={data} go={ this.state.go} />
                <div className="main-content">
                    <div className="cart-items-details">
                        <div className="cart-total-price">
                            <span className="label">
                                مجموع مبلغ سبد خرید شما :
                            </span>
                            <span className="total-price">
                                <span className="price">
                                    {data.cart ?
                                        split_in_three(data.cart.cart_summary.total_price_of_items)
                                        :
                                        "Loading ..."
                                    }
                                </span>
                                تومان
                            </span>
                        </div>
                        <div className="cart-discount">
                            <span className="label">
                                تخفیف :
                            </span>
                            <span className="total-price">
                                <span className="price">
                                    {data.cart ?
                                        split_in_three(data.cart.cart_summary.total_discount_of_items) :
                                        "Loading ..."
                                    }
                                </span>
                                تومان
                            </span>
                        </div>
                        <div className="cart-wallet">
                            <span className="label">
                                اعتبار کیف پول :
                            </span>
                            <span className="total-price">
                                <span className="price">
                                    {data.cart ?
                                        split_in_three(data.cart.cart_summary.credit_discount_final)
                                        :
                                        "Loading ..."
                                    }
                                </span>
                                تومان
                            </span>
                        </div>
                        <div className="cart-wallet">
                            <span className="label">
                                هزینه پست :
                            </span>
                            <span className="total-price">
                                <span className="price">
                                    {data.cart ?
                                        data.cart.cart_summary.post_cost === 0 ?
                                            "رایگان"
                                            :
                                            split_in_three(data.cart.cart_summary.post_cost)
                                        :
                                        "Loading ..."
                                    }
                                </span>
                                <span>
                                    {data.cart ?
                                        data.cart.cart_summary.post_cost === 0 ?
                                            " " : "تومان"
                                        :
                                        "Loading ..."
                                    }
                                </span>
        
                            </span>
                        </div>
                        <div className="cart-final-pay">
                            <span className="label">
                                قابل پرداخت :
                            </span>
                            <span className="total-price">
                                <span className="price">
                                    {data.cart ?
                                        split_in_three(data.cart.cart_summary.final_price)
                                        :
                                        "Loading ..."
                                    }
                                </span>
                                تومان
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cart-details">
                    <div className="prods-incart-text">
                        <span className="number">
                            {data.cart ?
                                data.cart.cart_details.length
                                :
                                "Loading ..."
                            }
                        </span>
                        محصول در سبد خرید شما موجود است :
                    </div>
                    <div className="view-btn">
                        مشاهده
                    </div>
                </div>
                <a href={this.state.url} className={this.state.url ? "pay-btn-wrapper" : "pay-btn-wrapper disabled"} target="_blank" onClick={(e)=>this.disactive_click(e)}>
                    پرداخت
                </a>
                </div>
                <FooterBot cart_count={ data.cart ? data.cart.cart_details.length : 0 }/>
            </>
        );
    }
}
 
export default withBackEndData(FinalCart);