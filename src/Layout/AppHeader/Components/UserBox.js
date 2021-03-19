import React, {Fragment} from 'react';
import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap';
import {
    toast,
    Bounce
} from 'react-toastify';
import {
    faCalendarAlt,
    faAngleDown,
	faBell,
	faEnvelope,
	faComment,
	faQuestionCircle,
	faUser
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
class UserBox extends React.Component {
    constructor(props) {
        super(props);

        const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
            active: false,
        };
    }
	logout= ()=> {
		localStorage.clear("res");
		//this.props.history.push("/");
		window.location.href = "#/login/loginuser";
	}
    notify2 = () => this.toastId = toast('Coming Soon' ,{
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });
    render() {
        return (
            <Fragment>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="link" className="p-0">
										<FontAwesomeIcon title="Notifications" className="ml-2 opacity-8" icon={faBell}/>
										<FontAwesomeIcon title="E-mail" className="ml-2 opacity-8" icon={faEnvelope}/>
										<FontAwesomeIcon title="Messages" className="ml-2 opacity-8" icon={faComment}/>
										<Link to="/elements/editprofile" ><FontAwesomeIcon title="Edit Your Profile" className="mr-2 ml-2" icon={faUser}/></Link>
										<FontAwesomeIcon className="ml-2 opacity-8" icon={faQuestionCircle}/>
                                    </DropdownToggle>
                                </UncontrolledButtonDropdown>
								<Button type="button" className="btn btn-logout" onClick={this.logout}>LogOut</Button>
                            </div>
                            <div className="widget-content-left  ml-3 header-user-info"></div>
                        </div>
                    </div>
                </div>
				<div id="tawkchat-minified-box" className="round" onClick={this.notify2}><div id="tawkchat-minified-wrapper" className="white ltr-direction"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" className="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" className="theme-background-color theme-text-color"><FontAwesomeIcon className="icon-mail appear" id="maximizeChat" icon={faEnvelope}/><span id="minimizeChatMinifiedBtn" className="icon-close hide" title="Minimize"></span></div></div></div>
            </Fragment>
        )
    }
}
export default UserBox;