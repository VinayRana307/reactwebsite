import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class ViewStatements extends Component {
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
										<div className="card-header mt-3">Statements</div>
										<Label className="col-md-12 heading_mid ml-3">Statement Styles :</Label>
										<FormGroup className="col-md-12">
											<Label className="col-md-12"> 
												<Label className="pad0">Client Statement Style : </Label>
												<select className="form-control">
													<option>Select</option>
													<option>None</option>
													<option>Client</option>
													<option>Bank</option>
												</select>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-12"> 
												<Label className="pad0"><Input type="checkbox"/>  Show property folio on tenants demands and statement and client statements</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-6"> 
												<Label className="pad0"><Input type="checkbox"/>  Show Management type on client statements</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-6"> 
												<Label className="pad0"><Input type="checkbox"/>  Print Outstanding Column</Label>
											</Label>
											<Label className="col-md-6"> 
												<Label className="pad0"><Input type="checkbox"/>  Print sub-totals</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-12"> 
												<Label className="pad0">Show Outstanding brought forward : </Label>
												<select className="form-control">
													<option>Select</option>
													<option>Full</option>
												</select>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox"/>  Show VAT on statement arrears list</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox"/>  Print nominal heading and blank lines</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox"/>  Print comment in full</Label>
											</Label>
										</FormGroup><hr/>
										<FormGroup className="col-md-12">
											<Label className="col-md-12"> 
												<Label className="pad0"><Input type="checkbox"/>  Automatic tear up of unposted client statements on automatic run</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox"/>  Save Statement as PDF</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox"/>  Crystal exports to Word</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox"/>  Company Logos on statements</Label>
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
export default ViewStatements;