import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class ViewRemittance extends Component {
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath : ServerPath,
			formData : {},
		}
	}
	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		let { formData } = this.state;
		formData[name] = value;
		this.setState({
			formData: formData,
			[name]: value
		});
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const formData = this.state.formData;
		const ww = localStorage.getItem('res');
		const myObject = JSON.parse(ww);
		const token = myObject.body.token;
		const requestOptions = {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer' + ' ' + token,
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},

			body: JSON.stringify({
				...formData	
			})
		};
		return fetch('http://' + this.state.ServerPath + '/api/addSystemSetting', requestOptions)
			.then(handleResponse)
			.then(res => {
				//this.setToken(res.token)  //setting the token in local storage
				//return Promise.resolve(res);
				//console.log(Promise.resolve(res));
			});

		function handleResponse(response) {
			return response.text().then(text => {
				const data = text && JSON.parse(text);
				if (response.ok) {
					if (response.status === 200) {
						alert('Data Store Successfully')
						window.location.reload();
					}
				} else {
					if (response.status === 401) {
						// auto logout if 401 response returned from api
					} else if (response.status === 400) {
						//(response.statusText);
						//errors.email = "asd";
					}
					const error = (data && data.message) || response.statusText;
				}
				return data;
			});
		}
	}
    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                     <Row>
                        <Col className="pad0">
							<Card className="main-card mb-3">
								<CardBody className="pad0 min-vh-100">
								<Form className="col-md-12">
									<div className="card-header mt-3 ">Remittance</div>
									<FormGroup className="col-md-12">
										<Label className="col-md-4"> 
											<Label className="pad0"><Input type="checkbox" onChange={this.handleInputChange} name="print_Remmitance" value="Yes"/>  Print Remittance</Label>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12">
										<Label className="col-md-12"> 
											<Label className="pad0">Remittance Address : </Label>
											<textarea maxlength="20"  rows="4" cols="10" onChange={this.handleInputChange} name="Remmitance_Address"></textarea>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12">
										<Label className="col-md-4"> 
											<Label className="pad0">Post Code : </Label>
											<Input placeholder="" onChange={this.handleInputChange} name="Remmitance_postcode"/>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 mt-4 text-right pad0">
										<Label className="col-md-2">
											<Button className="button" type="button" onClick={this.handleSubmit}>Ok</Button>
										</Label>
										<Label className="col-md-2">
											<Button className="button" type="button">Cancel</Button>
										</Label>
									</FormGroup>
								</Form>	
								</CardBody>
							</Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
};
export default ViewRemittance;