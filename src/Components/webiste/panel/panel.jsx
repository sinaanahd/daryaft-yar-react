import React, { Component } from "react";
import withWebsiteData from "../../hoc/with-website-data";
import PanleHeader from "./header/panel-header";
import PanelSideBar from "./sidebar/panel-sidebar";
import LastOrders from "./latest-orders/latest-orders";
import Scores from "./scores/scores";
import Orders from "./orders/orders";
class Panel extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="panel-main-area mm-width">
          <div className="panel-grid">
            <LastOrders />
            <Orders />
            <Scores
              user={user}
              coin={user ? user.coin : 0}
              wallet={{
                amount: user ? user.amount : 0,
                days: user ? user.days_left : 0,
              }}
            />
          </div>
          <PanelSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(Panel);
