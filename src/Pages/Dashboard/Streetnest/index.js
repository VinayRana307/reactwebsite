import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AnalyticsDashboard1 extends Component {
	constructor() {
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
						<div>
							<Row>
								<Col md="12" lg="12">
									<Col md="12" lg="12" className="pad0">
										<Card className="mb-3 border_radius0">
											<CardHeader className="card-header-tab">
												<div className="card-header-title">
													Overview
                                      			</div>
												<div className="card-header-title button_title">
												{Paybtn?
												<Button style={{ right: '15px' }}>Pay To Client</Button>:null}
													<Button onClick={() => this.setState({ open: true,AddContact:true ,PayMentPay:false})} >Add Contact</Button>
												</div>
											</CardHeader>
									
											<Row className="inlineblock_s block_dues">
												<Col md="12" lg="12">
													<Col md="2" lg="2">
														<div className="sub_divs backgroundsblue text-center">
															<div className="anothertext">Rent Due Today</div>
															<h4>sdsd</h4>
														</div>
													</Col>
												</Col>
											</Row>
										</Card>
									</Col>
								</Col>
							</Row>						
						</div>	
				</ReactCSSTransitionGroup>
			</Fragment>
		)
	}
}