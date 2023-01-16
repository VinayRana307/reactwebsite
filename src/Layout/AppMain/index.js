import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import {
    ToastContainer,
} from 'react-toastify';
//const Dashboard = lazy(() 	=> import('../../Pages/Dashboard'));
const HomePage = lazy(() 		=> import('../../Pages/Login'));
const LoginUser = lazy(() 		=> import('../../Pages/LoginPage'));
const Signup = lazy(() 		=> import('../../Pages/Signup'));
//const Properties = lazy(() 		=> import('../../Pages/ViewProperty'));
//const ForegetPassword = lazy(() 	=> import('../../Pages/ForegetPassword'));
const Elements = lazy(() 	=> import('../../Pages/Elements/'));
const MS_Word = lazy(() 	=> import('../../Pages/Questions/MS_Word/MS_Word'));

const AppMain = () => {
    return (
        <Fragment>
            {/* Elements */}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait.
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
            <Route path="/elements" component={Elements}/>
            </Suspense>
			
            {/* Homepage */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait.
                            <small></small>
                        </h6>
                    </div>
                </div>
                
            }>
                <Route path="/quiz" component={HomePage}/>
            </Suspense>
            <Route exact path="/" render={() => (
                <Redirect to="/quiz"/>
            )}/>


             {/* Login */}

             <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait.
                            <small></small>
                        </h6>
                    </div>
                </div>
                
            }>
                <Route path="/login" component={LoginUser}/>
            </Suspense>
			
			
			 {/* Register */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait.
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/Signup" component={Signup}/>
            </Suspense>

            {/* MS Word */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait.
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/msword" component={MS_Word}/>
            </Suspense>

            <ToastContainer/>
        </Fragment>
    )
};
export default AppMain;