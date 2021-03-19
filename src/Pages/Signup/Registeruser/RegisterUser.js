import React, { Component } from "react";
import {FormGroup,Button,HelpBlock} from 'react-bootstrap';
import {Label,Input,} from 'reactstrap';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../../../shared/validator';
import { Link } from 'react-router-dom';
import  Home  from './login_gif.gif';
class Register extends Component {
    constructor(props) {
        super(props);

        const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
			loading: false, // Indicates in progress state of login form
        }
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let { formData } = this.state;
        formData[name] = value;
        this.setState({
            formData: formData
        });
    }
    validateRegisterForm = (e) => {
        let errors = {};
        const {formData} = this.state;
		if (formData.password !== formData.cpassword) {
			errors.cpassword = "Password doesn't match";
		}
        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }
    register = (event) => {
        event.preventDefault();
        let errors = this.validateRegisterForm();
        if(errors === true){
			const formData = this.state.formData;
			const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				firstName		: formData.firstName,
				lastName		: formData.lastName,
				email			: formData.email,
				password		: formData.password,
				countryCode		: formData.countryCode,
				phoneNumber		: formData.phoneNumber,
			})
			};
			{/*
				city 			: formData.city,
				state			: formData.state,
				country			: formData.country,
				roleType		: formData.roleType
			*/}
			//return fetch(`'http://' + this.state.ServerPath + '/api/signUp`, requestOptions)
			return fetch('http://' + this.state.ServerPath + '/api/signUp', requestOptions)
			.then(handleResponse)
			.then(res => {
				if (res) {
					localStorage.setItem('res', JSON.stringify(res));
				}
				return res;
			});
			function handleResponse(response) {
			return response.text().then(text => {
				const data = text && JSON.parse(text);
				if (response.ok) {
					if(response.status === 200){
						window.location.href = "#/dashboard/streetnest";
					}
				}
				else{
					if (response.status === 401) {
					}else if(response.status === 400){
						alert(data.message);
						//(response.statusText);
					}
					const error = (data && data.message) || response.statusText;
				}
				return data;
			});
			}
		} else {
		this.setState({
			errors: errors,
			formSubmitted: true
		});
		}
	}
    render() {
        const { errors, formSubmitted } = this.state;
        return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6 side1">
					<span><img src={Home} className="sticky" width={400} height={400}/></span>
					</div>
					<div className="col-sm-6 side2">
						<div className="row">
							<div className="col-md-11 registerpage">
								<div className="row">
									<div className="col-md-2"></div>
									<div className="col-sm-10 text-center head">
										<p>REGISTER</p>
									</div>
								</div>
								<div className="row text" style={{paddingBottom:"0px"}}>
									<div className="col-md-2"></div>
									<div className="col-sm-10 text-center">
										<p style={{marginTop:"0px"}}>with </p>
									</div>
								</div>	
								<div className="row text pad0" style={{paddingBottom:"0px"}}>
									<div className="col-md-2"></div>
									<div className="col-sm-10 text-center">
										<p style={{marginTop:"0px"}}><span className="text-street">STREET</span> <span className="text-nest"> NEST</span></p>
									</div>
								</div>	
							<div className="row">
							<div className="col-md-2"></div>
							<div className="col-sm-10">
								<div className="Register">
									<form onSubmit={this.register}>
										<FormGroup className="text-center">
											<Label for="firstName" className="col-md-6">
												<Input type="text" placeholder="First Name" onChange={this.handleInputChange} name="firstName" required/>
											</Label>
											<Label className="col-md-6">
												<Input type="text" placeholder="Last Name" onChange={this.handleInputChange} name="lastName" required/>
											</Label>
										</FormGroup>
										<FormGroup className="text-center">
											<Label className="col-md-12">
												<Input type="email" name="email" placeholder="Email" onChange={this.handleInputChange} name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
											</Label>
										</FormGroup>
										
										<FormGroup className="text-center">
											<Label className="col-md-4">
												<Input type="text" placeholder="Code +" onChange={this.handleInputChange} name="countryCode" required/>
											</Label>
											<Label className="col-md-8">
												<Input type="text" placeholder="Phone" onChange={this.handleInputChange} name="phoneNumber" required/>
											</Label>
										</FormGroup>
										{/*
										<FormGroup className="text-center">
											<Label for="Country" className="col-md-4">
												<Input type="text" placeholder="Country" onChange={this.handleInputChange} name="country" required/>
											</Label>
											<Label for="state" className="col-md-4">
												<Input type="text" placeholder="State"  onChange={this.handleInputChange} name="state" required />
											</Label>
											<Label for="City" className="col-md-4">
												<Input type="text" placeholder="City" onChange={this.handleInputChange} name="city" required/>
											</Label>
										</FormGroup>
										*/}
										<FormGroup className="text-center">
											<Label className="col-md-6">
												<Input type="password" placeholder="Password" onChange={this.handleInputChange} name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="password must be at least 8 characters long contain a number and an uppercase letter and lowercase letter" required/>
											</Label>
											<Label className="col-md-6" validationstate={ formSubmitted ? (errors.cpassword ? 'error' : 'success') : null }>
												<Input type="password" placeholder="Confirm Password" onChange={this.handleInputChange} name="cpassword" required/>
												{ errors.cpassword &&
													<span>{errors.cpassword}</span>
												}
											</Label>
										</FormGroup>
										{/*<FormGroup className="text-center">
											<Label className="col-md-12">
												<select className="form-control" onChange={this.handleInputChange} name="roleType" required>
												<option>Sign up As:</option>
												<option value="Manager">Manager</option>
												{/*<option value="Landlord">Landlord</option>
												<option value="Client">Client</option>
											<option value="Tenant">Tenant</option>
												</select>
											</Label>
										</FormGroup>
										*/}
										<FormGroup className="text-center">
											<Label className="col-md-12">
												<Button type="submit" className="button1 border_radius0" id="button">REGISTER</Button>		
											</Label>
										</FormGroup>
										<FormGroup className="text-center">
											<Label className="col-md-12">
												<div className="backlogin text-right">Already registered? <span><Link to="/login/loginuser">Sign in</Link></span></div>
											</Label>
										</FormGroup>
									</form>
									</div>
									</div>	
								</div>
							</div>	
						</div>	
						<div className="col-md-1"></div>		
					</div>
				</div>
			</div>		
        )
    }
}
export default Register;