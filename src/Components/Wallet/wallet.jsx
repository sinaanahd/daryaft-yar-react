import React, { Component } from 'react';
import withBackEndData from '../hoc/with-back-end-data';
import find_loc from '../functions/find-loc';
import WalletHeader from './wallet-header';
import WalletIncreaseText from './wallet-increase';
import WalletBody from './wallet-body';
import FooterBot from '../shop-bot/botFooter';
import save_local_address from '../functions/save_local_address';
import map_handler from '../functions/map_handler';
class Wallet extends Component {
    state = {
        go : "",
    } 
    componentDidMount() {
        const place = find_loc(window.location.pathname);
        save_local_address(place);
        let go = map_handler();
        this.setState({ go });
    }
    render() { 
        const { state } = this.props;
        return (
            <>
                <div className="wallet-wrapper-page">
                    <WalletHeader state={state} go={this.state.go } />
                    <WalletBody state={state} />
                    <WalletIncreaseText />
                </div>
                <FooterBot
                    cart_count={state.cart ? state.cart.cart_details.length : "loading"}
                    error={state.error}
                />
            </>
        );
    }
}
 
export default withBackEndData(Wallet);