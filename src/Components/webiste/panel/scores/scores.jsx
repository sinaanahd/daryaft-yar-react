import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Scores extends Component {
    state = {  } 
    render() { 
        const { wallet, coin } = this.props;
        return (
            <div className="scores g-item">
                <h3 className="title">
                    امتیازات
                </h3>
                <div className="content">
                    <span className="s-item">
                        <h4 className="sub-title">
                            اعتبار کیف پول
                        </h4>
                        <span className="details">
                            <span className="amount">
                                {wallet.amount}
                                &nbsp;
                                تومان
                            </span>
                            <span className="days">
                                {wallet.days}
                                &nbsp;
                                روز مهلت استفاده
                            </span>
                        </span>
                    </span>
                    <span className="s-item">
                        <h4 className="sub-title">
                            تعداد سکه های حسابت
                        </h4>
                        <span className="details">
                            {coin}
                            &nbsp;
                            سکه
                        </span>
                    </span>
                </div>
                <div className="btn-wrapper">
                    <Link to="#" className='add-coin'>
                        افزایش سکه‌ها
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default Scores;