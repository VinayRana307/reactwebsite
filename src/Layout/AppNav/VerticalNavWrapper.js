import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import MetisMenu from 'react-metismenu';
import { ClientList, PropertyNav, TanentNav, SupplierNav, ChargesNav, BankNav, AuditNav, AdminNav, ReportsNav, StandardLetterNav, PropertyLandlord,TenantPayments,TenantAgreement,TenantPropertyNav,ClientAgreement,ClientPayment,Agreement } from './NavItems';
import { Link } from 'react-router-dom'
class Nav extends Component {
	constructor(props) {
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			data: null,
			Pic: '',
			Data: [],
			file: '',
			imagePreviewUrl: ''
		};
		this._handleImageChange = this._handleImageChange.bind(this);
	}
	componentDidMount() {
		const ww = localStorage.getItem('res');
		const myObject = JSON.parse(ww);
		const token = myObject.body.token;
		fetch('http://' + this.state.ServerPath + '/api/getMyProfile', {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer' + ' ' + token,
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.status === 401) {
					localStorage.clear("res");
					window.location.href = "#/login/loginuser";
				}
				return response.json();
			})
			.then((data) => {
				this.setState({
					Pic: data.body.usersDetail.profileImage,
					Data: data.body
				})
			})
	}
	_handleImageChange(e) {
		e.preventDefault();
		this.setState({
			selectedFile: e.target.files[0]
		});
		const ww = localStorage.getItem('res');
		const myObject = JSON.parse(ww);
		const token = myObject.body.token;
		const fileInput = document.querySelector('#imageupload');
		const formData = new FormData();
		formData.append('image', fileInput.files[0]);
		fetch('http://' + this.state.ServerPath + '/api/updateProfileImage', {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer' + ' ' + token,
				"Accept": "multipart/form-data",
			},
			body: formData,
		}).then(res => {
			if (res.ok) {
				alert("File uploaded successfully.");
				window.location.href="#/elements/editprofile";
			} else {
				alert('File Not Uploaded');
			}
		});
	}
	render() {
		const { Data } = this.state;
		var roleType = Data.roleType;
		if (roleType === 'Manager') {
			roleType = <div>
				<MetisMenu content={ClientList} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={PropertyNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={TanentNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={SupplierNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={Agreement} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={ChargesNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={BankNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={AuditNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={AdminNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={ReportsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={StandardLetterNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
			</div>;
		} else if (roleType === 'Client') {
			roleType = <div>
				<MetisMenu content={ClientList} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={PropertyNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={TanentNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={SupplierNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={Agreement} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={ClientAgreement} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={ClientPayment} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
			</div>;
		} else if (roleType === 'Landlord') {
			roleType = <div>
				<MetisMenu content={ClientList} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={PropertyLandlord} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={TanentNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={SupplierNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={Agreement} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={BankNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={AdminNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
			</div>;
		} else if (roleType === 'Tenant') {
			roleType = <div>
				<MetisMenu content={TenantPropertyNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={TenantPayments} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
				<MetisMenu content={TenantAgreement} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
			</div>;
		}
		const pic = 'http://' + this.state.ServerPath + '/' + this.state.Pic;
		return (
			<Fragment>
				<div className="text-center user_profilesection">
					<form onSubmit={this._handleSubmit}>
						<label>
							<input type="file" className="upload_profile" id="imageupload" onChange={this._handleImageChange} />
							<div className="Userimage"><img src={pic} className="Userimage_pic" /></div>
						</label>
						<Link to="/elements/editprofile" title="Edit Your Profile"><p>{Data.firstName}  {Data.userName}</p></Link>
					</form>
				</div>
				{roleType}
			</Fragment>
		);
	}
	isPathActive(path) {
		return this.props.location.pathname.startsWith(path);
	}
}
export default withRouter(Nav);