import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class ViewLogCodes extends Component {
	state={Clientlog:false,Propertylog:false,Tenantlog:false,Supplierlog:false,};
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
									<div className="card-header mt-3 ">Log Codes</div>
									<Form className="col-md-12">
										<Label className="col-md-12 heading_mid ml-3">No logo margins :</Label>
										<FormGroup className="col-md-12">
											<Label className="col-md-3"> 
												<Label className="pad0"><Input type="radio" name="logcode" onClick={(e) => this.setState({ Clientlog: true,Propertylog: false ,Tenantlog: false,Supplierlog: false})}/>  Client</Label>
											</Label>
											<Label className="col-md-3"> 
												<Label className="pad0"><Input type="radio" name="logcode" onClick={(e) => this.setState({Clientlog: false,Propertylog: true ,Tenantlog: false,Supplierlog: false})}/>  Property</Label>
											</Label>
											<Label className="col-md-3"> 
												<Label className="pad0"><Input type="radio" name="logcode" onClick={(e) => this.setState({Clientlog: false,Propertylog: false ,Tenantlog: true,Supplierlog: false})}/>  Tenant</Label>
											</Label>
											<Label className="col-md-3"> 
												<Label className="pad0"><Input type="radio" name="logcode" onClick={(e) => this.setState({Clientlog: false,Propertylog: false ,Tenantlog: false,Supplierlog: true})}/>  Supplier</Label>
											</Label>
										</FormGroup>
										{this.state.Clientlog?
										<div>
											<Label className="col-md-12 heading_mid ml-3">Client Log Codes :</Label>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Standard Letter Sent : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-6"> 
													<Label className="pad0">Standard Letter Emailed : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Email Sent  : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-6"> 
													<Label className="pad0">Text Message Sent : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
										</div>	
										:null}
										{this.state.Propertylog?
										<div>
											<Label className="col-md-12 heading_mid ml-3">Property Log Codes :</Label>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-4"> 
													<Label className="pad0">Standard Letter Sent : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Standard Letter Emailed : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Email Sent  : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Text Message Sent : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-6"> 
													<Label className="pad0">Repair Order Emailed  : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-6"> 
													<Label className="pad0">Repair Order Text Message Sent  : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
										</div>
										:null}
										{this.state.Tenantlog?
										<div>
											<Label className="col-md-12 heading_mid ml-3">Tenant Log Codes :</Label>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-4"> 
													<Label className="pad0">Tenant Man. Charge Invoice Printed  : </Label>
													<select className="form-control">
														<option>Select</option>
														<option>Management Charge Invoice sent</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Receipt Issued : </Label>
													<select className="form-control">
														<option>Select</option>
														<option>Receipt Issued</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Demand : </Label>
													<select className="form-control">
														<option>Select</option>
														<option>Demand Sent</option>
													</select>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-4"> 
													<Label className="pad0">Demand Emailed  : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Statement : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Statement Emailed : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Standard Letter Sent : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-6"> 
													<Label className="pad0">Standard Letter Emailed : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Email Sent  : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-6"> 
													<Label className="pad0">Text Message Sent : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
										</div>	
										:null}
										{this.state.Supplierlog?
										<div>
											<Label className="col-md-12 heading_mid ml-3">Supplier Log Codes :</Label>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-4"> 
													<Label className="pad0">Email Sent  : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Text Message Sent : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Repair Order Emailed : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-4"> 
													<Label className="pad0">Repair Order Text Message Sent  : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Remittance Advice Printed : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
												<Label className="col-md-4"> 
													<Label className="pad0">Remittance Advice Emailed : </Label>
													<select className="form-control">
														<option>Select</option>
													</select>
												</Label>
											</FormGroup>
										</div>:null}
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
export default ViewLogCodes;