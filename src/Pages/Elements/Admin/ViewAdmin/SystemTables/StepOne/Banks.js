import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Form,FormGroup,Label,Input,Textarea} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt,faTrash,faSearch} from '@fortawesome/free-solid-svg-icons';
import EditUpdateBank from './Edit_UpdateBank/AddEdit';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
class ViewBanks extends Component {
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			AddBankList:[],
			formData:{},
			EditForm:false,
			AddForm:false,
			EditData:[],
			Table:false,
			Search : ''
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
	
	 handleSubmit = (event) => {
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
					wstoken: 'jwtToken',
					wsfunction: 'any_function',
					moodlewsrestformat: 'json',
					//step1 
					system_tableType : 'Bank',
					BankName : formData.BankName,
					Branch  : formData.Branch,
					SortCode  : formData.SortCode,
					Address : formData.Address,
					City  : formData.City,
					State   : formData.State,
					Country   : formData.Country,
					PostCode   : formData.PostCode,
				})
				};
				return fetch('http://'+this.state.ServerPath+'/api/addSystemTable',requestOptions)
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
	componentDidMount(){
		this._isMounted = true;
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/SystemTableList',{
				method: 'POST',
				headers: { 
				'Authorization':'Bearer'+' '+ token,
				'Content-Type': 'application/json',
				'Accept':'application/json',
				},
				body:JSON.stringify({
					wstoken: 'jwtToken',
					wsfunction: 'any_function',
					moodlewsrestformat: 'json',
					system_tableType : 'Bank',
				})
			})
			.then((response)=>{
				console.log(response)
				return response.json();
			})
			.then((data) => {
			if (this._isMounted) {
				this.setState({AddBankList: data.body})
					if(this.state.AddBankList == ''){
						this.setState({Table:false})
					}else{
						this.setState({Table:true})
					}
				}
			})
	  }
	  componentWillUnmount() {
		this._isMounted = false;
	  }
	  EditBankDetails = editBank =>{
		if(editBank){
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/editBankTableList/'+editBank,{
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
				this.setState({EditData: data.body})
			})
	 	 }
	  }
	  submit = userid => {
		confirmAlert({
		message: 'Are you sure you want to delete this ?',
		buttons: [
		   {
			 label: 'No',
			 onClick: ()=> '#/elements/admin' 
		   },
		   {
			label: 'Confirm',
			onClick:() => {this.componentDelete(userid)} 
		   }
		 ]
	   })
	 };
	 componentDelete = userid =>{
		const ww = localStorage.getItem('res');
		const myObject = JSON.parse(ww);
		const token = myObject.body.token;
		fetch('http://'+this.state.ServerPath+'/api/deleteSystemTable/'+userid,{
			method: 'DELETE',
			headers: { 
			'Authorization':'Bearer'+' '+ token,
			'Content-Type': 'application/json',
			'Accept':'application/json',
			}
		})
		.then((response)=>{
			return response.json();
		})
		.then((result)=>{ 
		   window.location.reload();
		})
  }
  handleInput=(event) => {
	  this.setState({
		  Search:event.target.value
	  })
  }
    render() {
		const {EditData,AddBankList} = this.state;
		const filterData = AddBankList.filter((fields) =>{
			// return fields.firstName.toLowerCase().includes(this.state.Search.toLowerCase())
			 return (
				fields.BankName && fields.BankName.toLowerCase().includes(this.state.Search.toLowerCase()) ||
				fields.Branch && fields.Branch.toLowerCase().includes(this.state.Search.toLowerCase()) || 
				fields.SortCode && fields.SortCode.toLowerCase().includes(this.state.Search.toLowerCase()) ||
				fields.PostCode && fields.PostCode.toLowerCase().includes(this.state.Search.toLowerCase()) ||
				fields.City && fields.City.toLowerCase().includes(this.state.Search.toLowerCase())
			 )
		 })
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
										<div className="card-header"><div className="ml-3">Bank Listing</div>
											<div className="btn-actions-pane-right">
												<div>
													<button className="addbtn" onClick={()=>this.setState({AddForm:true,EditForm:false})}>+ Add</button>
												</div>
											</div>
										</div>
										<div className="main">
											<div className="form-group has-search">
												<span className="form-control-feedback"><FontAwesomeIcon icon={faSearch} /></span>
												<input type="text" className="form-control" placeholder="Search" name="filter" value={this.state.filter} onChange={this.handleInput} />
											</div>
										</div>
										{this.state.Table?
											<div className="table-responsive">
												<table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
													<thead>
														<tr className="heading_color">
															<th className="text-center">S.No</th>
															<th className="text-center">Sort Code</th>
															<th className="text-center">Bank Name</th>
															<th className="text-center">Branch</th>
															<th className="text-center">Address</th>
															<th className="text-center">City</th>
															<th className="text-center">State</th>
															<th className="text-center">Country</th>
															<th className="text-center">Post Code</th>
															<th className="text-center">Action</th>
														</tr>
													</thead>
													<tbody>
														{filterData.map((fields,index) =>
														<tr key={index}>
															<td className="text-center">{index+1}</td>
															<td className="text-center">{fields.SortCode}</td>
															<td className="text-center">{fields.BankName}</td>
															<td className="text-center">{fields.Branch}</td>
															<td className="text-center">{fields.Address}</td>
															<td className="text-center">{fields.City}</td>
															<td className="text-center">{fields.State}</td>
															<td className="text-center">{fields.Country}</td>
															<td className="text-center">{fields.PostCode}</td>
															<td className="text-center buttons_action">
																<button type="button" className="btn btn-primary btn-sm btn-edit" onClick={(e) => {this.EditBankDetails(fields.id);this.setState({ AddForm:false,EditForm:true})}} title="Edit client details"><FontAwesomeIcon icon={faPencilAlt}/></button>
																<button type="button" className="btn btn-primary btn-sm btn-delete" title="Delete client" onClick={()=>{this.submit(fields.id)}}><FontAwesomeIcon icon={faTrash}/></button> 
																
															</td>
														</tr>
														)}
													</tbody>
												</table>
											</div>
											:null}
											{this.state.AddForm?
											<Form className="col-md-12" onSubmit={this.handleSubmit} className="col-md-12 mt-4">
											<div className="card-header mt-3 pad0">Add Bank Details </div>
											<FormGroup className="col-md-12">
												<Label className="col-md-4">
													<Label className="pad0">Bank Name :</Label>
													<Input type="text" name="BankName" onChange={this.handleInputChange}/>
												</Label>
												<Label className="col-md-4">
													<Label className="pad0"> Branch :</Label>
													<Input type="text" name="Branch" onChange={this.handleInputChange}/>
												</Label>
												<Label className="col-md-4">
													<Label className="pad0"> Sort Code :</Label>
													<Input type="text" name="SortCode" onChange={this.handleInputChange}/>
												</Label>
											</FormGroup>
											<Label className="col-md-12 heading_mid"> Address :</Label>
											<FormGroup className="col-md-12">
												<Label className="col-md-12">
													<Label className="pad0"> Complete Address :</Label>
													<textarea maxlength="20"   maxLength={200} rows="4" cols="10" className="form-control" name="Address" onChange={this.handleInputChange}/>
												</Label> 
											</FormGroup>
											<FormGroup className="col-md-12">
												<Label className="col-md-6">
													<Label className="pad0"> City :</Label>
													<Input type="text" name="City" onChange={this.handleInputChange}/>
												</Label>
												<Label className="col-md-6">
													<Label className="pad0"> State :</Label>
													<Input type="text" name="State" onChange={this.handleInputChange}/>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12"> 
												<Label className="col-md-6">
													<Label className="pad0"> Country :</Label>
													<Input type="text" name="Country" onChange={this.handleInputChange}/>
												</Label>
												<Label className="col-md-6">
													<Label className="pad0"> Post Code :</Label>
													<Input type="text" name="PostCode" onChange={this.handleInputChange}></Input>
												</Label> 
											</FormGroup>
											<FormGroup className="col-md-12 mt-3 text-right"> 
												<Label className="col-md-1">
													<Button type="submit" className="button">Done</Button>
												</Label>
											</FormGroup>
										</Form>		
										:null}
										{this.state.EditForm?
										<div className="col-md-12 mt-4">
											<Label className="col-md-12 heading_mid ml-3">Edit Form</Label>
											<EditUpdateBank EditData={EditData}/>
										</div>
									:null}
								</CardBody>
							</Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
};
export default ViewBanks;