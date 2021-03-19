import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Form,FormGroup,Label} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt,faTrash,faEye} from '@fortawesome/free-solid-svg-icons';
class Utilities extends Component {
	state = {isOpen: false,Makebackup:false,EFTformat:false}
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
									<Form className="col-md-12 pad0">
										<div className="card-header mt-3 ">Utilities</div>
										<div className="col-md-12">
										<FormGroup className="pb-4 col-sm-12">
											<span className="utilities col-md-2"><Button className="btn btn-default">Tax Purge</Button></span>
											<span className="utilities col-md-2"><Button className="btn">Query Tool</Button></span>
											<span className="utilities col-md-3"><Button className="btn">Check Nominals</Button></span>
											<span className="utilities col-md-3"><Button className="btn" onClick={(e) => this.setState({Makebackup:false,EFTformat:true})}>Edit EFT Format</Button></span>
											<span className="utilities col-md-3"><Button className="btn">Execute SQL script</Button></span>
											<span className="utilities col-md-4"><Button className="btn">Check Tenant Balances</Button></span>
											<span className="utilities col-md-4"><Button className="btn">Backup Zip and email in one</Button></span>
											<span className="utilities col-md-4"><Button className="btn">Check Supplier Balances</Button></span>
										</FormGroup>	
										</div>
										{this.state.EFTformat?
										<div>
											<Label className="col-md-12 heading_mid pl-3">EFT Format Builder :</Label>
											<div className="table-responsive">
												<table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
													<thead>
														<tr className="heading_color">
															<th className="text-center">Value</th>
															<th className="text-center">Formal Description</th>		
															<th className="text-center">Actions</th>	
														</tr>
													</thead>
													<tbody>
														<tr>
															<td className="text-center">BACSTEL</td>
															<td className="text-center">Barclays Business Master 2</td>
															<td className="text-center buttons_action">
																<button type="button" className="btn btn-primary btn-sm btn-view" title="View client details"><FontAwesomeIcon icon={faEye}/></button>
																<button type="button" className="btn btn-primary btn-sm btn-edit" title="Edit client details"><FontAwesomeIcon icon={faPencilAlt}/></button>
																<button type="button" className="btn btn-primary btn-sm btn-delete" title="Delete client"  onClick={(e) => this.setState({ isOpen: true })}><FontAwesomeIcon icon={faTrash}/></button>
															</td>
														</tr>
														<tr>
															<td className="text-center">BACSTEL</td>
															<td className="text-center">Barclays Business Master 2</td>
															<td className="text-center buttons_action">
																<button type="button" className="btn btn-primary btn-sm btn-view" title="View client details"><FontAwesomeIcon icon={faEye}/></button>
																<button type="button" className="btn btn-primary btn-sm btn-edit" title="Edit client details"><FontAwesomeIcon icon={faPencilAlt}/></button>
																<button type="button" className="btn btn-primary btn-sm btn-delete" title="Delete client"  onClick={(e) => this.setState({ isOpen: true })}><FontAwesomeIcon icon={faTrash}/></button>
															</td>
														</tr>
														<tr>
															<td className="text-center">BACSTEL</td>
															<td className="text-center">Barclays Business Master 2</td>
															<td className="text-center buttons_action">
																<button type="button" className="btn btn-primary btn-sm btn-view" title="View client details"><FontAwesomeIcon icon={faEye}/></button>
																<button type="button" className="btn btn-primary btn-sm btn-edit" title="Edit client details"><FontAwesomeIcon icon={faPencilAlt}/></button>
																<button type="button" className="btn btn-primary btn-sm btn-delete" title="Delete client"  onClick={(e) => this.setState({ isOpen: true })}><FontAwesomeIcon icon={faTrash}/></button>
															</td>
														</tr>
												  </tbody>
												</table>
											</div>
											<FormGroup className="col-md-12 mt-4 pad0">
												<Label className="col-md-12 text-center">
													<Button className="button" type="button">Done</Button>
												</Label>
											</FormGroup>
										</div>	:null}
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
export default Utilities;