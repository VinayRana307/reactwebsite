import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Form,FormGroup,Label,Input,Textarea} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt,faTrash} from '@fortawesome/free-solid-svg-icons';
import EditUpdateBank from './Edit_UpdateBank/AddEdit';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import Modal from "react-responsive-modal";

class Testcertificates extends Component {
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			AddBankList:[],formData:{},AddForm:false,EditData:[],Table:false,
			open: false,
		}
	 }
	onOpenModal = () => {
        this.setState({ open: true, });
    };
    onCloseModal = () => {
        this.setState({ open: false, });
    };
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
                    certificateName1 : formData.certificateName1,
					certificateName2  : formData.certificateName2,
					certificateName3  : formData.certificateName3,
					certificateName4 : formData.certificateName4,
					certificateName5 : formData.certificateName5,
				})
				};
				return fetch('http://'+this.state.ServerPath+'/api/addCertificates',requestOptions)
				.then(handleResponse)
				.then(res => {
				});
				function handleResponse(response) {
				return response.text().then(text => {
					const data = text && JSON.parse(text);
					if (response.ok) {
						if(response.status === 200){
							window.location.href="#/elements/admin";
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
			fetch('http://'+this.state.ServerPath+'/api/getCertificates',{
				method: 'GET',
				headers: { 
				'Authorization':'Bearer'+' '+ token,
				'Content-Type': 'application/json',
				'Accept':'application/json',
				},
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
    render() {
		const {EditData,AddBankList,open} = this.state;
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
										<div className="card-header"><div className="ml-3">Test Certificates</div>
											<div className="btn-actions-pane-right">
												<div>
													<button className="addbtn" onClick={this.onOpenModal}>+ Add</button>
												</div>
											</div>
										</div>
										{this.state.Table?
											<div className="table-responsive">
												<table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
													<thead>
														<tr className="heading_color">
															<th className="text-center">S.No</th>
															<th className="text-center">certificate One</th>
															<th className="text-center">Certificate Two</th>
															<th className="text-center">Certificate Three</th>
															<th className="text-center">Certificate Four</th>
															<th className="text-center">Certificate Five</th>
														</tr>
													</thead>
													<tbody>
														{AddBankList.map((fields,index) =>
														<tr key={index}>
															<td className="text-center">{index+1}</td>
															<td className="text-center">{fields.certificateName1}</td>
															<td className="text-center">{fields.certificateName2}</td>
															<td className="text-center">{fields.certificateName3}</td>
															<td className="text-center">{fields.certificateName4}</td>
															<td className="text-center">{fields.certificateName5}</td>
														</tr>
														)}
													</tbody>
												</table>
											</div>
											:null}

											<Modal open={open} onClose={this.onCloseModal}>
											<Form className="col-md-12" onSubmit={this.handleSubmit} className="col-md-12 mt-4">
											<div className="card-header mt-3 ml-3  pad0">Add Test Certificates </div>
											<FormGroup className="col-md-12">
												<Label className="col-md-4">
													<Label className="pad0">Certificate One :</Label>
													<Input type="text" name="certificateName1" onChange={this.handleInputChange}/>
												</Label>
												<Label className="col-md-4">
													<Label className="pad0"> Certificate Two :</Label>
													<Input type="text" name="certificateName2" onChange={this.handleInputChange}/>
												</Label>
												<Label className="col-md-4">
													<Label className="pad0"> Certificate Three :</Label>
													<Input type="text" name="certificateName3" onChange={this.handleInputChange}/>
												</Label>
                                                <Label className="col-md-4">
													<Label className="pad0"> Certificate Four :</Label>
													<Input type="text" name="certificateName4" onChange={this.handleInputChange}/>
												</Label>
												<Label className="col-md-4">
													<Label className="pad0"> Certificate Five :</Label>
													<Input type="text" name="certificateName5" onChange={this.handleInputChange}/>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12 mt-3 text-right"> 
												<Label className="col-md-1">
													<Button type="submit" className="button">ADD</Button>
												</Label>
											</FormGroup>
										</Form>	
										</Modal>	
										
								</CardBody>
							</Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
};
export default Testcertificates;