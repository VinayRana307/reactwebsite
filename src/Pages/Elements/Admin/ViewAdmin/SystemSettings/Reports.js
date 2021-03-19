import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class ViewReports extends Component {
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
		const value = target.value;
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
				console.log(res)
			});

		function handleResponse(response) {
			return response.text().then(text => {
				const data = text && JSON.parse(text);
				if (response.ok) {
					if (response.status === 200) {
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
									<div className="card-header mt-3 ">Reports</div>
									<FormGroup className="col-md-12">
										<Label className="col-md-4"> 
											<Label className="pad0">Heading for Tenant Demands : </Label>
											<Input type="text" onChange={this.handleInputChange} name="TenantDemands" placeholder=""/>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Description for Tenant for demands and statement :</Label>
											<Input type="text" onChange={this.handleInputChange} name="demandsAndStatement" placeholder=""/>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Demand Label : </Label>
											<Input type="text" onChange={this.handleInputChange} name="DemandLabel" placeholder=""/>
										</Label>
									</FormGroup>
									<Label className="col-md-12 heading_mid ml-3">Margin for logo reports(in cm.) :</Label>
									<FormGroup className="col-md-12">
										<Label className="col-md-3"> 
											<Label className="pad0">Top : </Label>
											<Input type="text" onChange={this.handleInputChange} name="MarginLogoTop" placeholder="0.63"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Bottom : </Label>
											<Input type="text" onChange={this.handleInputChange} name="MarginLogoBottom" placeholder="0.53"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Left : </Label>
											<Input type="text" onChange={this.handleInputChange} name="MarginLogoLeft" placeholder="0.63"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Right : </Label>
											<Input type="text" onChange={this.handleInputChange} name="MarginLogoRight" placeholder="0.70"/>
										</Label>
									</FormGroup>
									<Label className="col-md-12 heading_mid ml-3">No logo margins :</Label>
									<FormGroup className="col-md-12">
										<Label className="col-md-3"> 
											<Label className="pad0">Top : </Label>
											<Input type="text" onChange={this.handleInputChange} name="NoLogoMarginsTop" placeholder="0.53"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Bottom : </Label>
											<Input type="text" onChange={this.handleInputChange} name="NoLogoMarginsBottom" placeholder="0.53"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Left : </Label>
											<Input type="text" onChange={this.handleInputChange} name="NoLogoMarginsLeft" placeholder="0.44"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Right : </Label>
											<Input type="text" onChange={this.handleInputChange} name="NoLogoMarginsRight" placeholder="0.35"/>
										</Label>
									</FormGroup>
									<Label className="col-md-12 heading_mid ml-3">Margin for Landscape :</Label>
									<FormGroup className="col-md-12">
										<Label className="col-md-3"> 
											<Label className="pad0">Top : </Label>
											<Input type="text" onChange={this.handleInputChange} name="LandscapeTop" placeholder="0.47"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Bottom : </Label>
											<Input type="text" onChange={this.handleInputChange} name="LandscapeBottom" placeholder="0.51"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Left : </Label>
											<Input type="text" onChange={this.handleInputChange} name="LandscapeLeft" placeholder="0.51"/>
										</Label>
										<Label className="col-md-3"> 
											<Label className="pad0">Right : </Label>
											<Input type="text" onChange={this.handleInputChange} name="LandscapeRight" placeholder="0.51"/>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 text-right mt-4 pad0">
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
export default ViewReports;