import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class TenantAccountAddress extends Component {
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
									<div className="card-header mt-3 ">Property Tenant Accounts Address Report</div>
										<Label className="col-md-12 heading_mid ml-3">Options :</Label>
										<Form className="col-md-12">
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-12">
													<Label className="pad0">Enter P to sort by Property or T to sort by Tenant</Label>
													<select className="form-control">
														<option>Select</option>
														<option>P</option>
														<option>T</option>
													</select>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6">
												<Label className="pad0"><Input type="checkbox"/>  Include Suspended tenants?</Label>
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
        to: '#/elements/reports/propertyreport/',
    },
];
export default TenantAccountAddress;