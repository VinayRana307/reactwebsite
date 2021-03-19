import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class ViewSecurity extends Component {
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
									<Form className="col-md-12 pad0">
										<div className="card-header mt-3 ">Security</div>
										<Label className="col-md-12 heading_mid pl-3">Select a user from the list box, or type in user name :</Label>
										<FormGroup className="col-md-12">
											<Label className="col-md-5"> 
												<select className="form-control">
													<option>Select</option>
													<option>sa</option>
												</select>
											</Label>
											<Label className="col-md-5"> 
												<Label className="pad0">Level : </Label>
												<select className="form-control">
													<option>Select</option>
													<option>4</option>
												</select>
											</Label>
											<Label className="col-md-2"> 
												<button id="btn">Set</button>
											</Label>
										</FormGroup>
										<div className="table-responsive">
											<table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
												<thead>
													<tr className="heading_color">
														<th className="text-center">Name</th>
														<th className="text-center">Level</th>	
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="text-center">sa</td>
														<td className="text-center">4</td>
													</tr>
											  </tbody>
											</table>
										</div>
										<FormGroup className="col-md-12 mt-4 pad0">
											<Label className="col-md-12 text-center">
												<button id="btn">Ok</button>
											</Label>
										</FormGroup>
										<Label className="col-md-12 heading_mid pl-3">Menu Option security settings :</Label>
										<FormGroup className="col-md-12">
											<Label className="col-md-8"> 
												<Label className="pad0">Select menu group : </Label>
												<select className="form-control">
													<option>Select</option>
													<option>Client Options</option>
												</select>
											</Label>
											<Label className="col-md-4"> 
												<button id="btn">Refresh</button>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-10"> 
												<Label className="pad0">Levels can be any value from 1-9 Default user level is 4.</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-10"> 
												<Label className="pad0"> Your current level is underdefined.</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-9"> 
												<Label className="pad0">(if the option level is higher then the user level access is.) </Label>
											</Label>
											<Label className="col-md-3"> 
												<button id="btn">Individual form options</button>
											</Label>
										</FormGroup>
										<div className="table-responsive">
											<table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
												<thead>
													<tr className="heading_color">
														<th className="text-center">Menu Option</th>
														<th className="text-center">Level</th>	
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="text-center">Client insert</td>
														<td className="text-center">4</td>
													</tr>
													<tr>
														<td className="text-center">Client statement</td>
														<td className="text-center">4</td>
													</tr>
													<tr>
														<td className="text-center">Client view/edit</td>
														<td className="text-center">4</td>
													</tr>
											  </tbody>
											</table>
										</div>
										<FormGroup className="col-md-12 mt-4 pad0">
											<Label className="col-md-12 text-center">
												<button id="btn">Ok</button>
											</Label>
										</FormGroup>
										<Label className="col-md-12 heading_mid pl-3">Individual screen options levels :</Label>
										<FormGroup className="col-md-12">
											<Label className="col-md-12"> 
												<Label className="pad0">Select group : </Label>
												<select className="form-control">
													<option>Select</option>
													<option>Client Options</option>
												</select>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-10"> 
												<Label className="pad0">Levels can be any value from 1-9 Default user level is 4.</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-10"> 
												<Label className="pad0"> Your current level is 4.</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-10"> 
												<Label className="pad0">(if the option level is higher then the user level access is denied.) </Label>
											</Label>
										</FormGroup>
										<div className="table-responsive">
											<table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
												<thead>
													<tr className="heading_color">
														<th className="text-center">Option</th>
														<th className="text-center">Read Only Level</th>	
														<th className="text-center">Edit Level</th>	
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="text-center">Contact</td>
														<td className="text-center">1</td>
														<td className="text-center">4</td>
													</tr>
													<tr>
														<td className="text-center">Account Address</td>
														<td className="text-center">1</td>
														<td className="text-center">4</td>
													</tr>
													<tr>
														<td className="text-center">log</td>
														<td className="text-center">1</td>
														<td className="text-center">4</td>
													</tr>
											  </tbody>
											</table>
										</div>
										<FormGroup className="col-md-12 mt-4 pad0">
											<Label className="col-md-12 text-center">
												<button id="btn">Ok</button>
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
export default ViewSecurity;