import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../../panel/header/panel-header";
import PKSideBar from "../../panel/sidebar/pk-side-bar";
class MyQuestionPage extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="my-questions mm-width">
          <div className="main-boxses">
            <div className="my-questions">
              <h1>سوال‌هایی که پرسیدم</h1>
            </div>
            <div className="also-my-question">
              <h1>سوال منم هست</h1>
            </div>
            <div className="answered-questions">
              <h1>سوال‌هایی که جواب دادم</h1>
            </div>
          </div>
          <PKSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(MyQuestionPage);
