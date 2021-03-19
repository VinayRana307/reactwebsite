import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input, Textarea, FormFeedback, FormText
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class ViewNominals extends Component {
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
            formData:{},
			OwnerList:[],
			update:[]
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
			[name] : value
        });
	}
	handleSubmit = (event) =>{
		event.preventDefault();
		const formData = this.state.formData;
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
				...formData
			})
			};console.log(requestOptions)
			return fetch('http://'+this.state.ServerPath+'/api/addSystemSetting',requestOptions)
			.then(handleResponse)
			.then(res => {
			});
			function handleResponse(response) {
			return response.text().then(text => {
				const data = text && JSON.parse(text);
				if (response.ok) {
					if(response.status === 200){
						//alert('success')
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
							<Card className="main-card mb-3">
								<CardBody className="pad0 min-vh-100">
									<div className="card-header mt-3 ">Nominals</div>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-6"> 
											<Label className="pad0">Non-allowable Expenses Codes : </Label>
											<select className="form-control" onChange={this.handleInputChange} name="ExpensesCodes">
												<option>Select</option>
												<option value="Capital Exp">Capital Exp</option>
											</select>
										</Label>
										<Label className="col-md-6"> 
											<Label className="pad0">Rent Nominal : </Label>
											<select className="form-control" onChange={this.handleInputChange} name="RentNominal">
												<option>Select</option>
												<option value="Rent(1)">Rent(1)</option>
											</select>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-6"> 
											<Label className="pad0">Landlord Deposit Nominal : </Label>
											<select className="form-control" onChange={this.handleInputChange} name="DepositNominal">
												<option>Select</option>
												<option value="Landlord Deposit">Landlord Deposit</option>
											</select>
										</Label>
										<Label className="col-md-6"> 
											<Label className="pad0">Dilapidation Nominal : </Label>
											<select className="form-control" onChange={this.handleInputChange} name="DilapidationNominal">
												<option>Select</option>
												<option value="Dilapidation(23)">Dilapidation(23)</option>
											</select>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-4"> 
											<Label className="pad0">Gas Safety Expiry Code : </Label>
											<Input onChange={this.handleInputChange} type="date" name="GasSafetyExpiryCode"/>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Gas Safety Remainder Code : </Label>
											<Input onChange={this.handleInputChange} type="date" name="GasSafetyRemainderCode"/>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Gas Safety Remainder Date Notice : </Label>
											<Input onChange={this.handleInputChange} placeholder="" name="GasSafetyRemainderDateNotice"/>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-6"> 
											<Label className="pad0">Repair Order Invoice Posted  : </Label>
											<select className="form-control" name="InvoicePosted" onChange={this.handleInputChange}>
												<option>Select</option>
												<option value="Invoice Posted">Invoice Posted</option>
											</select>
										</Label>
										<Label className="col-md-6"> 
											<Label className="pad0">Property Date to Chase Diary Code : </Label>
											<select className="form-control" name="ChaseDiaryCode" onChange={this.handleInputChange}>
												<option>Select</option>
												<option value="Chase Repair Order">Chase Repair Order</option>
											</select>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 mt-4 text-right pad0">
										<Label className="col-md-2">
											<button className="button" type="button" onClick={this.handleSubmit}>Ok</button>
										</Label>
										<Label className="col-md-2">
											<button className="button" type="button">Cancel</button>
										</Label>
									</FormGroup>
								</CardBody>
							</Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
};
export default ViewNominals;