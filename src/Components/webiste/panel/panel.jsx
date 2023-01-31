import React, { Component } from 'react';
import withWebsiteData from '../../hoc/with-website-data';
import PanleHeader from './header/panel-header';
import PanelSideBar from './sidebar/panel-sidebar';
import LastOrders from './latest-orders/latest-orders';
import Scores from './scores/scores';
import Orders from './orders/orders';
class Panel extends Component {
    state = {  } 
    render() { 
        const { user } = this.props;
        return (
            <>
                <PanleHeader
                    user={user}
                />
                <section className="panel-main-area mm-width">
                    <div className="panel-grid">
                        <LastOrders />
                        <Scores
                            coin={user.coin}
                            wallet={
                                {
                                    amount: user.amount,
                                    days : user.days_left
                                }
                            }
                        />
                        <Orders />
                    </div>
                    <PanelSideBar />
                </section>
            </>
        );
    }
}
 
export default withWebsiteData(Panel);