import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import StreetnestDashboard from './Streetnest/';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Dashboards = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/streetnest`} component={StreetnestDashboard}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Dashboards;