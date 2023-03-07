import React, { Component } from "react";
import withWebsiteData from "../../../hoc/with-website-data";
import PanleHeader from "../header/panel-header";
import PanelSideBar from "../sidebar/panel-sidebar";
import UserInfo from "../user-info/user-info";
import StudentsDataFrom from "../student-data/student-forms";
class PanelSettings extends Component {
  state = {};
  render() {
    const { user, update_user, change_user } = this.props;
    return (
      <>
        <PanleHeader user={user} />
        <section className="usesr-info-section mm-width">
          <div className="layout">
            <UserInfo user={user} update_user={update_user} />
            <StudentsDataFrom user={user} change_user={change_user} />
          </div>
          <PanelSideBar />
        </section>
      </>
    );
  }
}

export default withWebsiteData(PanelSettings);
