import React, { Component } from "react";
import MetisMenu from 'react-metismenu';
import { Row, FormGroup, Button, HelpBlock } from 'react-bootstrap';
import { Label, Input} from 'reactstrap';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {}, 
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
	
	render() {
		return (
			<div className="table_bodypart">
                <strong className="router_Link"><a href="#/School">Home</a></strong>
				<div className="homepage_row_container">
                    <form autoComplete="false">
                        <table cellPadding="5px">
                            <thead>
                                <tr>
                                    <th colspan='2'><h1 >Sign In<hr/></h1></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className="form-label">Name : </label>  
                                    </td>
                                    <td>
                                        <input type="text" type="form-control"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="form-label">Email : </label>  
                                    </td>
                                    <td>
                                        <input type="email" type="form-control"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="form-label">Mobile No. : </label>  
                                    </td>
                                    <td>
                                        <input type="text" type="form-control"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="form-label">Gender : </label>  
                                    </td>
                                    <td>
                                        <input type="radio" value="gender"/>   Male&nbsp;&nbsp;
                                        <input type="radio" value="gender"/>   Female
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="form-label">Name : </label>  
                                    </td>
                                    <td>
                                        <input type="text" type="form-control"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <button type="button">Sumbit</button>  
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="2">
                                        <strong><a href="signup">SignUp</a></strong>  
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>    
				</div>
			</div>
		)
	}
}
export const RegisterUser = [
	{
		label: 'Sign up',
		to: '#/signup/registeruser',
	},
];
export const ForgotPassword = [
	{
		label: 'Forgot Password',
		to: '#/foregetpassword/resetpassword',
	},
];
export default Login;