import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class BankBalance extends Component {
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
									<div className="card-header mt-3 ">Client Bank Balance</div>
										<Form className="col-md-12">
											<Label className="col-md-12 heading_mid ml-3"> Options</Label>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-12">
													<Label className="pad0">Produce bank balance as at :</Label>
													<select className="form-control">
														<option>Select</option>
														<option>23/07/2002</option>
													</select>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0"><Input type="checkbox"/> Show bank balance breakdown per property?</Label>	
												</Label> 	
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6" check> 
													<Label className="pad0"><Input type="checkbox"/> Include deposit logical accounts</Label>	
												</Label>	
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6" check> 
													<Label className="pad0" check><Input type="checkbox"/> Include suspended properties?</Label>	
												</Label>	
											</FormGroup>
											<FormGroup className="col-md-12 mt-4 pad0">
												<Label className="col-md-12 text-center">
													<button id="btn">Ok</button>
													<button id="btn">Cancel</button>
												</Label>
											</FormGroup>
										</Form>
										<div className="btn-actions-pane-right text-right card_form col-md-12">
											<div role="group" className="btn-group-sm btn-group">
												<MetisMenu content={SubmitForm} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
											</div> 
										</div>
								</CardBody>
							</Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
};
export const SubmitForm = [
    {
        label: 'Submit >',
        to: '#/elements/reports/clientreport/',
    },
];
export default BankBalance;