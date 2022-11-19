import React, { Component } from 'react';
class WalletIncreaseText extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="increase-title">
                    راه های افزایش اعتبار کیف پول
                </div>
                <div className="way-to-increase-wrapper">
                    <div className="way-to-increase-title">
                        دوست خوبم تو از راه های زیر میتونی اعتبار کسب کنی و در خرید از این فروشگاه ازش استفاده کنی :
                    </div>
                    <div className="ways-to-increase">
                        <p>
                            1 -با هربار جواب صحیح دادن به سوال دوستات در پرسشکده ربات ،
                            میتونی 500 تومان اعتبار جمع کنی !
                        </p>
                    </div>
                </div>
            </>
        );
    }
}
 
export default WalletIncreaseText;