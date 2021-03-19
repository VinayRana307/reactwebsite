import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Form,FormGroup,Label,Input} from 'reactstrap';
class OwnDetails extends Component {
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
    componentDidMount(){
		this._isMounted = true;
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/getOwnUser',{
				method: 'GET',
				headers: { 
				'Authorization':'Bearer'+' '+ token,
				'Content-Type': 'application/json',
				'Accept':'application/json',
				}
			})
			.then((response)=>{
				return response.json();
			})
			.then((data) => {
			if (this._isMounted) {
				this.setState({OwnerList : data.body,update : data.body.usersDetail})
                }
            })
	  }
	  componentWillUnmount() {
		this._isMounted = false;
	  }
	  handleSubmit = (event) =>{
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
			   //step1 
			   VATNumber : formData.VATNumber, 
			   SMSPassword : formData.SMSPassword, 
			   IntPrefix : formData.IntPrefix,
			   FirmID : formData.FirmID,
			   BranchID : formData.BranchID,
			   AccountType : formData.AccountType,
			   TaxRef : formData.TaxRef,
			   SortCode : formData.SortCode,
			   accountName : formData.accountName,
			   accountNumber : formData.accountNumber,
		   })
		   };
		   return fetch('http://'+this.state.ServerPath+'/api/updateOwnUser',requestOptions)
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
		const {OwnerList,update} = this.state;
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
									<Form className="col-md-12 pad0" onSubmit={this.handleSubmit}>
										<div className="card-header mt-3 ">Own Details</div>
										<FormGroup className="col-md-12">
											<Label className="col-md-6"> 
												<Label className="pad0">First Name : </Label>
												<Input type="text" defaultValue={OwnerList.firstName} name="firstName" onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-6"> 
												<Label className="pad0">Surname : </Label>
												<Input type="text" defaultValue={OwnerList.userName} name="userName" onChange={this.handleInputChange}/>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-4"> 
												<Label className="pad0">City : </Label>
												<Input type="text" defaultValue={OwnerList.city} name="city" onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0">State : </Label>
												<Input type="text" defaultValue={OwnerList.state} name="state" onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-4"> 
												<Label className="pad0">Country : </Label>
												<Input type="text" defaultValue={OwnerList.country} name="country" onChange={this.handleInputChange}/>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-6"> 
												<Label className="pad0">VAT Number : </Label>
												<Input type="text" defaultValue={update.VATNumber} name="VATNumber" onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-6"> 
												<Label className="pad0">Tax Referrence : </Label>
												<Input type="text" defaultValue={update.TaxRef} name="TaxRef" onChange={this.handleInputChange}/>
											</Label>
										</FormGroup>
										<Label className="col-md-12 heading_mid ml-3">Text Messaging :</Label>
										<FormGroup className="col-md-12">
											<Label className="col-md-6"> 
												<Label className="pad0">SMS Password : </Label>
												<Input type="text" defaultValue={update.SMSPassword} name="SMSPassword" onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-6"> 
												<Label className="pad0">Int prefix : </Label>
												<Input type="text" defaultValue={update.IntPrefix} name="IntPrefix" onChange={this.handleInputChange}/>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-6"> 
												<Label className="pad0">Firm ID : </Label>
												<Input type="text" defaultValue={update.FirmID} name="FirmID" onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-6"> 
												<Label className="pad0">Branch ID : </Label>
												<Input type="text" defaultValue={update.BranchID} name="BranchID" onChange={this.handleInputChange}/>
											</Label>
										</FormGroup>
										<Label className="col-md-12 heading_mid ml-3">Own Bank Details :</Label>
										<FormGroup className="col-md-12">
											<Label className="col-md-6"> 
												<Label className="pad0">Account Name : </Label>
												<Input type="text" defaultValue={update.accountName} name="accountName" onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-6"> 
												<Label className="pad0">Account Number : </Label>
												<Input type="text" defaultValue={update.accountNumber} name="accountNumber" onChange={this.handleInputChange}/>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12">
											<Label className="col-md-6"> 
												<Label className="pad0">Account Type : </Label>
												<Input type="text" defaultValue={update.AccountType} name="AccountType" onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-6"> 
												<Label className="pad0">Sort Code : </Label>
												<Input type="text" defaultValue={update.SortCode} name="SortCode" onChange={this.handleInputChange}/>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12 mt-4 text-right pad0">
											<Label className="col-md-1">
												<Button className="button" type="submit">Ok</Button>
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
export default OwnDetails;