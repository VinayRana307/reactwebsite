import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
//import { IndexRoute } from 'react-router';
//import { sessionService } from 'redux-react-session';
// Tables

import Login from './LoginUser/Login';
//import HomePage from '../Dashboard/Streetnest';
const LoginUser = ({match}) => (
    <Fragment>
        <div className="">
            <div className="">
                <div className="">
                    <Route path={`${match.url}`} component={Login}/>
                </div>
            </div>
        </div>
    </Fragment>
);
//export default (
  //<Route path="/" component={Loginuser}>
    //<Route path="login"  onEnter={sessionService.checkAuth} component={HomePage}/>
    //<Route path="login" component={Loginuser} />
  //</Route>
//);
export default LoginUser;
