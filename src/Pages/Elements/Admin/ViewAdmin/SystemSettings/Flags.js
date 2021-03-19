import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Form,FormGroup,Label,Input} from 'reactstrap';
class ViewFlags extends Component {
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			formData:{},
			values:'',
			FlagsData : [],
			Check : '0'
		}
	}
	handleInputChange = (event) => {
        const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		console.log(value);
		const name = target.name;
		if(value == true){
			const TrueValue = "1";
			let { formData } = this.state;
			formData[name] = TrueValue;
			this.setState({
				formData: formData,
				Check : '1'
			});
		}else{
			const FalseValue = '0';
			let { formData } = this.state;
			formData[name] = FalseValue;
			this.setState({
				formData: formData,
				Check : FalseValue,
			});
		}
				
        
	}
	componentDidMount() {
		this._isMounted = true;
		const ww = localStorage.getItem('res');
		const myObject = JSON.parse(ww);
		const token = myObject.body.token;
		fetch('http://' + this.state.ServerPath + '/api/editFlagList', {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer' + ' ' + token,
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data)
				if (this._isMounted) {
					this.setState({ FlagsData : data.body })
					//console.log(this.state.FlagsData)
				}
			})
	}
	componentWillUnmount() {
		this._isMounted = false;
	}
	handleSubmit = (event) => {
        event.preventDefault();
			const formData = this.state.formData;
			
			const AllData = [
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
				{flag_colums : 'dsssdsdsddss',type : this.state.Check},
			];
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
				const requestOptions = {
				method: 'POST',
				headers: { 
					'Authorization':'Bearer'+' '+ token,
					'Content-Type': 'application/json',
					'Accept':'application/json',
				},
				body: JSON.stringify({
					wstoken: 'jwtToken',
					wsfunction: 'any_function',
					moodlewsrestformat: 'json',
					...AllData
				})
				};
				return fetch('http://'+this.state.ServerPath+'/api/addflags',requestOptions)
				.then(handleResponse)
				.then(res => {
					console.warn(res)
				});
				function handleResponse(response) {
				return response.text().then(text => {
					const data = text && JSON.parse(text);
					if (response.ok) {
						if(response.status === 200){
							alert('Success')
							window.location.reload();
						}
					}
					else{
						if (response.status === 401) {
							// auto logout if 401 response returned from api
						}else if(response.status === 400){
							//(response.statusText);
							//errors.email = "asd";
						}
						const error = (data && data.message) || response.statusText;
					}
					return data;
				});
			}
	}

UpdatesFlags = (event) => {
		if(this.state.formData === true){
			this.setState({checkBox:'1'}) 
		}else{
		}
        event.preventDefault();
			const formData = this.state.formData;
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
				const requestOptions = {
				method: 'PUT',
				headers: { 
					'Authorization':'Bearer'+' '+ token,
					'Content-Type': 'application/json',
					'Accept':'application/json',
				},
				body: JSON.stringify({
					wstoken: 'jwtToken',
					wsfunction: 'any_function',
					moodlewsrestformat: 'json',
					id : '313',
					type : this.state.Check || this.state.FlagsData.type,
				})
				};
				return fetch('http://'+this.state.ServerPath+'/api/updateflags',requestOptions)
				.then(handleResponse)
				.then(res => {
					console.warn(res)
				});
				function handleResponse(response) {
				return response.text().then(text => {
					const data = text && JSON.parse(text);
					if (response.ok) {
						if(response.status === 200){
							window.location.reload();
						}
					}
					else{
						if (response.status === 401) {
							// auto logout if 401 response returned from api
						}else if(response.status === 400){
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
							<Card className="main-card mb-3 pb-4">
								<CardBody className="pad0 min-vh-100">
									<Form className="col-md-12">
										<div className="card-header mt-3 ">Flags</div>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox"  name="EFT" onChange={this.handleInputChange}/>  Enable EFT</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="chequePrinting" onChange={this.handleInputChange}/>  Enable cheque Printing</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="SupposeTax" onChange={this.handleInputChange}/>  Suppose Tax</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="ClientIncomeBankSummary" onChange={this.handleInputChange}/>  Client Income on Bank summary</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="ExpenseCredit" onChange={this.handleInputChange}/>  Expense credit on bank summary</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="TenantPayments" onChange={this.handleInputChange}/>  Tenant Payments on bank summary</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="ResidentLettings" onChange={this.handleInputChange}/>  Resident Lettings Database</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="standardLetters" onChange={this.handleInputChange}/>  Save merged standard letters</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="RemittanceAdvice" onChange={this.handleInputChange}/>  Save Remittance advice note as PDF</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="supplierAutomaticPayment" onChange={this.handleInputChange}/>  Enable supplier automatic payment</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="SupplierPartialPayments" onChange={this.handleInputChange}/>  Allow Supplier partial payments</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="backupOutlook" onChange={this.handleInputChange}/>  Send backup via Outlook</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="ClientPropertyTenantSupplierId" onChange={this.handleInputChange}/>  Show new client property/Property/Tenant & Supplier ID's</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="maintenancePlanFailure" onChange={this.handleInputChange}/>  Do not Check for maintenance plan failure </Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="propertyAvailableFunds" onChange={this.handleInputChange}/>  Show property available funds</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="negativeAvailableFunds" onChange={this.handleInputChange}/>  Show negative available funds</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="previousBalance" onChange={this.handleInputChange}/>  Print balance of previous debits/credits on Tenant Demands </Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="FormColours" onChange={this.handleInputChange}/>  Enable Form colours</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="commercialManagement" onChange={this.handleInputChange}/>  Enable commercial management</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="SuppressBankDetails" onChange={this.handleInputChange}/>  Suppress Bank Details </Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="SuppressTenantDemands" onChange={this.handleInputChange}/>  Suppress tenant demands</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="SuppressInterestArrears" onChange={this.handleInputChange}/>  Suppress interest on arrears</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="SuppressStatementSumms" onChange={this.handleInputChange}/>  Suppress statement summs on prop </Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="reportThroughViewer" onChange={this.handleInputChange}/>  Print report through viewer</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="gasSafetyRemainderBlankDates" onChange={this.handleInputChange}/>  Add gas safety remainder for 'blank' dates</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="gasSafetyRemainder" onChange={this.handleInputChange}/>  Add gas safety remainder </Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="TaxMessageLogEntry" onChange={this.handleInputChange}/>  Ask about tax message log entry </Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="emailLogEntry" onChange={this.handleInputChange}/>  Ask about email log entry</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="BatchEFTPayments" onChange={this.handleInputChange}/>  Batch EFT Payments </Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="clientsDetailsRepairOrder" onChange={this.handleInputChange}/>  Print clients details on Repair Order</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="HorizontalScrollBars" onChange={this.handleInputChange}/>  Hide Horizontal scroll bars</Label>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0"><Input type="checkbox" name="uncompletedRepairOrders" onChange={this.handleInputChange}/>  Check for uncompleted repair orders</Label>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12 text-right mt-4 pad0">
											<Label className="col-md-2">
												<Button className="button" type="submit" onClick={this.UpdatesFlags}>Ok</Button>
												
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
export default ViewFlags;