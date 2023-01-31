import React, { Component } from 'react';
import withWebsiteData from '../../../hoc/with-website-data';
import PanleHeader from '../header/panel-header';
import PanelSideBar from '../sidebar/panel-sidebar';
import UserInfo from '../user-info/user-info';
import StudentsDataFrom from '../student-data/student-forms';
class PanelSettings extends Component {
    state = {  } 
    render() { 
        const { user } = this.props;
        return (
            <>
                <PanleHeader
                    user={user}
                />
                <section className="usesr-info-section mm-width">
                    <div className="layout">
                        <UserInfo user={user} />
                        <StudentsDataFrom user={user} />
                    </div>
                    <PanelSideBar />
                </section>
            </>
        );
    }
}
 
export default withWebsiteData(PanelSettings);