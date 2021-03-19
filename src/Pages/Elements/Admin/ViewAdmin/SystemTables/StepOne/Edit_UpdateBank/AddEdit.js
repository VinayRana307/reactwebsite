import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
class EditUpdateBank extends Component{
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			formData:{},
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
					id : this.props.EditData.id,
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
				return fetch('http://'+this.state.ServerPath+'/api/updateSyatemTableList',requestOptions)
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
	render(){
		const {EditData}=this.props;
		return(
			<div className="form-group">
				<Form className="col-md-12" onSubmit={this.handleSubmit}>
					<FormGroup className="col-md-12">
						<Label className="col-md-4">
							<Label className="pad0">Bank Name :</Label>
							<Input type="text" name="BankName" defaultValue={EditData.BankName} onChange={this.handleInputChange}/>
						</Label>
						<Label className="col-md-4">
							<Label className="pad0"> Branch :</Label>
							<Input type="text" name="Branch" defaultValue={EditData.Branch} onChange={this.handleInputChange}/>
						</Label>
						<Label className="col-md-4">
							<Label className="pad0"> Sort Code :</Label>
							<Input type="text" name="SortCode" defaultValue={EditData.SortCode} onChange={this.handleInputChange}/>
						</Label>
					</FormGroup>
					<Label className="col-md-12 heading_mid"> Address :</Label>
					<FormGroup className="col-md-12">
						<Label className="col-md-12">
							<Label className="pad0"> Complete Address :</Label>
							<textarea maxlength="20"   maxLength={200} rows="4" cols="10" className="form-control" defaultValue={EditData.Address} name="Address" onChange={this.handleInputChange}/>
						</Label> 
					</FormGroup>
					<FormGroup className="col-md-12">
						<Label className="col-md-6">
							<Label className="pad0"> City :</Label>
							<Input type="text" name="City" defaultValue={EditData.City} onChange={this.handleInputChange}/>
						</Label>
						<Label className="col-md-6">
							<Label className="pad0"> State :</Label>
							<Input type="text" name="State" defaultValue={EditData.State} onChange={this.handleInputChange}/>
						</Label>
					</FormGroup>
					<FormGroup className="col-md-12"> 
						<Label className="col-md-6">
							<Label className="pad0"> Country :</Label>
							<Input type="text" name="Country" defaultValue={EditData.Country} onChange={this.handleInputChange}/>
						</Label>
						<Label className="col-md-6">
							<Label className="pad0"> Post Code :</Label>
							<Input type="text" name="PostCode" defaultValue={EditData.PostCode} onChange={this.handleInputChange}></Input>
						</Label> 
					</FormGroup>
					<FormGroup className="col-md-12 mt-3 text-right"> 
						<Label className="col-md-1">
							<Button type="submit" className="button">Update</Button>
						</Label>
					</FormGroup>
				</Form>		
			</div>
		);
	}
};

export default EditUpdateBank;