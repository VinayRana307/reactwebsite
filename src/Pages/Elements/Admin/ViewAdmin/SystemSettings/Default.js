import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class ViewDefaults extends Component {
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
							<Card className="main-card mb-3 pb-4">
								<CardBody className="pad0 min-vh-100">
								<Form className="col-md-12">
									<div className="card-header mt-3 ">Default</div>
									<Label className="col-md-12 heading_mid ml-3">Default 'Transaction to include' for Client Statements :</Label>
									<FormGroup className="col-md-12">
										<Label className="col-md-4"> 
											<Label className="pad0">Income from Tenants : </Label>
											<select className="form-control">
												<option>Select</option>
												<option>All</option>
											</select>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Other Items : </Label>
											<select className="form-control">
												<option>Select</option>
												<option>All</option>
											</select>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Management Charges : </Label>
											<select className="form-control">
												<option>Select</option>
												<option>All</option>
											</select>
										</Label>
									</FormGroup>
									<Label className="col-md-12 heading_mid ml-3">Default 'Transaction to Include' for Management Charge Transfer :</Label>
									<FormGroup className="col-md-12">
										<Label className="col-md-12"> 
											<Label className="pad0">Include Transactions : </Label>
											<select className="form-control">
												<option>Select</option>
												<option>All</option>
											</select>
										</Label>
									</FormGroup>
									<Label className="col-md-12 heading_mid ml-3">Default 'Interest on Arrears ' for Tenant :</Label>
									<FormGroup className="col-md-12">
										<Label className="col-md-4"> 
											<Label className="pad0">Bank base rate : </Label>
											<select className="form-control">
												<option>Select</option>
												<option>none</option>
											</select>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Other Items : </Label>
											<Input placeholder="0.00%"/>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Management Charges : </Label>
											<Input placeholder=""/>
										</Label>
									</FormGroup>
									<Label className="col-md-12 heading_mid ml-3">Default 'Tenant Demand' :</Label>
									<FormGroup className="col-md-12">
										<Label className="col-md-4"> 
											<Label className="pad0">No. of days for tenant's payment to clear : </Label>
											<Input placeholder=""/>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 mt-4 pad0">
										<Label className="col-md-12 text-center">
											<button id="btn">Ok</button>
											<button id="btn">Cancel</button>
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
export default ViewDefaults;