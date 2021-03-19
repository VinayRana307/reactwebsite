import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input,
} from 'reactstrap';
import MetisMenu from 'react-metismenu';
class ViewSettings extends Component {
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
            formData:{},OwnerList:[],update:[]
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
				ComplianceSetting  		: formData.ComplianceSetting, 
				InclusiveExclusive  	: formData.InclusiveExclusive, 
				AutoplayReference 		: formData.AutoplayReference, 
				DebtPeriod				: formData.DebtPeriod,
				ExportFormat 			: formData.ExportFormat,
				StandardLetters 		: formData.StandardLetters,
				RecordType 				: formData.RecordType,
				RepairOrderFooter 		: formData.RepairOrderFooter,
				RepairOrderText 		: formData.RepairOrderText,
				deviceName 				: formData.deviceName,
				FileName 				: formData.FileName,
				TempBackupDeviceName 	: formData.TempBackupDeviceName,
				TempBackupFileName 		: formData.TempBackupFileName,
				
			})
			};
			return fetch('http://64.202.185.51:4000/api/addSystemSetting',requestOptions)
			.then(handleResponse)
			.then(res => {
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
							<Card className="main-card mb-3">
								<CardBody className="pad0 min-vh-100">
								<Form className="col-md-12" onSubmit={this.handleSubmit}>
									<div className="card-header mt-3">Settings</div>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-4"> 
											<Label className="pad0">Fee VAT Inclusive/Exclusive : </Label>
											<select className="form-control" name="InclusiveExclusive" onChange={this.handleInputChange}>
												<option>Select</option>
												<option>Neither</option>
											</select>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Default VAT Rate : </Label>
											<select className="form-control" name="vatRate" onChange={this.handleInputChange}>
												<option>Select</option>
												<option>17.5</option>
											</select>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">RICS Compliance Setting : </Label>
											<select className="form-control" name="ComplianceSetting" onChange={this.handleInputChange}>
												<option>Select</option>
												<option>Yes</option>
											</select>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-4"> 
											<Label className="pad0">Default Autoplay Reference : </Label>
											<Input placeholder="" name="AutoplayReference" onChange={this.handleInputChange}/>
										</Label>
										<Label className="col-md-4"> 
											<Label className="pad0">Tenant Aged Debt Period : </Label>
											<Input placeholder="" name="DebtPeriod" onChange={this.handleInputChange}/>
										</Label>	
										<Label className="col-md-4"> 
										<Label className="pad0">EFT Export Format : </Label>
										<select className="form-control" name="ExportFormat" onChange={this.handleInputChange}>
											<option>Select</option>
											<option>ALABACS</option>
										</select>
									</Label>
									</FormGroup>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-6"> 
											<Label className="pad0">Tenant for Standard Letters  : </Label>
											<Input placeholder="" name="StandardLetters" onChange={this.handleInputChange}/>
										</Label>
										<Label className="col-md-6"> 
											<Label className="pad0">Default Record Type : </Label>
											<select className="form-control" name="RecordType" onChange={this.handleInputChange}>
												<option>Select</option>
												<option Value="None">None</option>
												<option value="Commercial">Commercial</option>
												<option value="Residential">Residential</option>
												<option value="Residential Let-Only">Residential Let-Only</option>
												<option value="Service Charge">Service Charge</option>
											</select>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-6"> 
											<Label className="pad0">Repair Order Footer  : </Label>
											<select className="form-control" name="RepairOrderFooter" onChange={this.handleInputChange}>
												<option>Select</option>
												<option value="None">None</option>
												<option vlaue="Commercial">Commercial</option>
												<option value="Residential">Residential</option>
												<option value="Residential Let-Only">Residential Let-Only</option>
												<option value="Service Charge">Service Charge</option>
											</select>
										</Label>
										<Label className="col-md-6"> 
											<Label className="pad0">Repair Order Text Message : </Label>
											<select className="form-control" name="RepairOrderText" onChange={this.handleInputChange}>
												<option>Select</option>
												<option value="None">None</option>
												<option value="Commercial">Commercial</option>
												<option value="Residential">Residential</option>
												<option value="Residential Let-Only">Residential Let-Only</option>
												<option value="Service Charge">Service Charge</option>
											</select>
										</Label>
									</FormGroup>
									<Label className="col-md-12 heading_mid ml-3"> Advance Backup Configuration :</Label>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-6"> 
											<Label className="pad0">Backup device name : </Label>
											<Input placeholder="Property Craft Backup" name="deviceName" onChange={this.handleInputChange}/>
										</Label>
										<Label className="col-md-6"> 
											<Label className="pad0">File name : </Label>
											<Input placeholder="pcbackup.bak" name="TempBackupFileName" onChange={this.handleInputChange}/>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 pad0">
										<Label className="col-md-6"> 
											<Label className="pad0">Temp Backup device name : </Label>
											<Input placeholder="PCempBackup" name="TempBackupDeviceName" onChange={this.handleInputChange}/>
										</Label>
										<Label className="col-md-6"> 
											<Label className="pad0">File name : </Label>
											<Input placeholder="pctemp.bak" name="TempBackupFileName" onChange={this.handleInputChange}/>
										</Label>
									</FormGroup>
									<FormGroup className="col-md-12 mt-4 pad0">
										<Label className="col-md-12 text-center">
											<Button type="submit" id="btn">OK</Button>
											<Button id="btn">CANCEL</Button>
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
export default ViewSettings;