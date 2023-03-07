import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../../panel/header/panel-header";
import PKSideBar from "../../panel/sidebar/pk-side-bar";
import make_arr_question from "../../../functions/questions_arr";
import Question from "../Question/question";
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
              <h1 className="title">سوال‌هایی که پرسیدم</h1>
              <div className="questions">
                {make_arr_question(20).map((i) => (
                  <Question key={i} />
                ))}
              </div>
            </div>
            <div className="also-my-question second-row-boxes">
              <h2 className="title">سوال منم هست</h2>
              <div className="questions">
                {make_arr_question(20).map((i) => (
                  <Question key={i} />
                ))}
              </div>
            </div>
            <div className="answered-questions second-row-boxes">
              <h2 className="title">سوال‌هایی که جواب دادم</h2>
              <div className="questions">
                {make_arr_question(20).map((i) => (
                  <Question key={i} />
                ))}
              </div>
            </div>
          </div>
          <PKSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(MyQuestionPage);
