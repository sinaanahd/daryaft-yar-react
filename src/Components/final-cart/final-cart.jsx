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
import LittleLoading from '../reusables/little-loading';
import DiscountPopUp from './discount-code/discount-pop-up';
import Loading from '../reusables/loading';
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
        this.set_url("entry");
    }
    set_url = (entry) => {
        const us_id = window.Telegram.WebApp.initData;
        let final_id = ""
        if (us_id === "") {
            final_id = "341393410";
        }
        else {
            final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
        }   
        axios
            .get(`https://daryaftyar.ir/storeV2/payrequest/${final_id}`)
            .then(res => {
                let url = res.data.url_to_pay;
                this.setState({ url });
                console.log("fc")
            })
            .catch(err => console.log(err))
    }
    disactive_click = (e) => {
        if (this.state.url === "") {
            e.preventDefault();
        }
        else {
            this.props.close_web_app();
        }
    }
    render() { 
        const {
            state: data,
            close_web_app,
            back,
            handle_discount_pop_up,
            handle_discount
        } = this.props;
        return (
            <>
                <div className="cart-final-stage-page-wrapper">
                    <FinalCartHeader state={data} go={this.state.go} />
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
                                            <LittleLoading />
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
                                            <LittleLoading />
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
                                            <LittleLoading />
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
                                            <LittleLoading />
                                        }
                                    </span>
                                    <span>
                                        {data.cart ?
                                            data.cart.cart_summary.post_cost === 0 ?
                                                " " : "تومان"
                                            :
                                            <LittleLoading />
                                        }
                                    </span>
        
                                </span>
                            </div>
                            <div className={data.cart.cart_summary.dis_code_details.status ? "cart-wallet" : "cart-wallet dis-none"}>
                                <span className="label">
                                    مقدار کد تخفیف :
                                </span>
                                <span className="total-price">
                                    <span className="price">
                                        {split_in_three(data.cart.cart_summary.dis_code_details.amount)}
                                    </span>
                                    تومان
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
                                            <LittleLoading />
                                        }
                                    </span>
                                    تومان
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="discount-code">
                        <span className="d-text">
                            کد تخفیف دارید ؟
                        </span>
                        <span className="d-btn" onClick={()=>{handle_discount_pop_up()}}>
                            وارد کنید
                        </span>
                    </div>
                    <div className="cart-details">
                        <div className="prods-incart-text">
                            <span className="number">
                                {data.cart ?
                                    data.cart.cart_details.length
                                    :
                                    <LittleLoading />
                                }
                            </span>
                            محصول در سبد خرید شما موجود است :
                        </div>
                        <Link to="/bot/cart" className="view-btn">
                            مشاهده
                        </Link>
                    </div>
                    <a
                        href={!data.re_url ? this.state.url : data.re_url}
                        className={this.state.url ? "pay-btn-wrapper" : "pay-btn-wrapper disabled"}
                        target="_blank"
                        onClick={(e) => this.disactive_click(e)}
                    >
                        پرداخت
                    </a>
                </div>
                {data.discount_active ? <DiscountPopUp
                    back={back}
                    data={data}
                    set_url={this.set_url}
                    handle_code={handle_discount}
                /> : <></>}
                <Loading pause={ data.pause} />
                <FooterBot
                    cart_count={data.cart ? data.cart.cart_details.length : "loading"}
                    error={data.error}
                />
            </>
        );
    }
}
 
export default withBackEndData(FinalCart);