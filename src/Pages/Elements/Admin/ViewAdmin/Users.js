import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Form,FormGroup,Label,Input} from 'reactstrap';
class AdminUsers extends Component {
    constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
            formData:{},UserList:[],EditUser:[],editId:'',AddForm:false,EditForm:false,Table:false
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
    EditId = id =>{
        this.setState({editId :id})
    }
    componentDidMount(){
		this._isMounted = true;
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/adminUserList',{
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
				this.setState({UserList : data.body})
				console.log(this.state.UserList)
					if(this.state.UserList == ''){
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
                wstoken: 'jwtToken',
                wsfunction: 'any_function',
                moodlewsrestformat: 'json',
                //step1 
                email : formData.email,
				password : formData.password,
				ReEnterPassword : formData.ReEnterPassword,
            })
            };
            return fetch('http://'+this.state.ServerPath+'/api/adduserByAdmin',requestOptions)
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
		handleUpdateSubmit = (event) =>{ 
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
                    id : this.state.editId,
					oldPassword : formData.oldPassword,
               		password : formData.password,
               		confirm_password : formData.confirm_password,
                })
                };
                return fetch('http://'+this.state.ServerPath+'/api/updatePasswordUserAdmin',requestOptions)
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
        const {UserList,EditUser} = this.state;
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
                                        <div className="card-header"><div className="ml-0">Users</div> </div>
                                        {this.state.Table?
                                        <div className="table-responsive">
												<table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
													<thead>
														<tr className="heading_color">
															<th className="text-center">S.No</th>
															<th className="text-center">Login</th>
															<th className="text-center">Role</th>
														</tr>
													</thead>
													<tbody>
														{UserList.map((fields,index) =>
														<tr key={index}>
															<td className="text-center"><Input type="radio" name="changePassword" onClick={()=>{this.EditId(fields.id);this.setState({AddForm:false})}}/>  {index+1}</td>
															<td className="text-center">{fields.email}</td>
															<td className="text-center">{fields.roleType}</td>
														</tr>
														)}
													</tbody>
												</table>
											</div>
                                            :null}
                                           <FormGroup className="col-md-12 mt-4 text-right pad0">
										  		 <Label className="col-md-3">
													<Button className="button" type="button" onClick={(e) => this.setState({EditForm:true,AddForm:false })}>New Password</Button>
												</Label>
												<Label className="col-md-1 text-right">
													<Button className="button" type="button" onClick={(e) => this.setState({AddForm:true,EditForm:false})}>Add</Button>
												</Label>
												<Label className="col-md-1">
													<Button className="button" type="button">Close</Button>
												</Label>
											</FormGroup>
											{this.state.AddForm?
											<Form className="col-md-12" onSubmit={this.handleSubmit}>
											<div>
												<Label className="col-md-12 heading_mid ml-3"> New User :</Label>
												<FormGroup className="col-md-12 pad0">
													<Label className="col-md-4">
														<Label className="pad0">User Name :</Label>
														<Input type="text" name="email" onChange={this.handleInputChange}/>
													</Label>
													<Label className="col-md-4">
														<Label className="pad0">Password :</Label>
														<Input type="password" name="password" onChange={this.handleInputChange}/>
													</Label>
													<Label className="col-md-4">
														<Label className="pad0">Re-enter Password :</Label>
														<Input type="password" name="ReEnterPassword" onChange={this.handleInputChange}/>
													</Label>
												</FormGroup>
												<FormGroup className="col-md-12 pad0">	
													<Label className="col-md-6"> 
														<Label className="pad0"><Input onChange={this.handleInputChange} type="checkbox"/>  Read-only user</Label>	
													</Label>
												</FormGroup>
												<FormGroup className="col-md-12 mt-4 pad0 text-right">
													<Label className="col-md-2">
														<Button className="button" type="submit">Submit</Button>
													</Label>
													<Label className="col-md-2">
														<Button className="button" type="button" onClick={(e) => this.setState({AddForm:false })}>Cancel</Button>
													</Label>
												</FormGroup>
										</div>
										</Form>
										:null}	
										{this.state.EditForm?
											<Form className="col-md-12" onSubmit={this.handleUpdateSubmit}>
											<div>
												<Label className="col-md-12 heading_mid ml-3"> Update User Password :</Label>
												<FormGroup className="col-md-12 pad0">
													<Label className="col-md-4">
														<Label className="pad0">Old Password :</Label>
														<Input type="password" name="oldPassword" onChange={this.handleInputChange}/>
													</Label>
													<Label className="col-md-4">
														<Label className="pad0">Password :</Label>
														<Input type="password" defaultValue={EditUser} name="password" onChange={this.handleInputChange}/>
													</Label>
													<Label className="col-md-4">
														<Label className="pad0">Re-enter Password :</Label>
														<Input type="password" defaultValue={EditUser} name="confirm_password" onChange={this.handleInputChange}/>
													</Label>
												</FormGroup>
												<FormGroup className="col-md-12 pad0">	
													<Label className="col-md-6"> 
														<Label className="pad0"><Input onChange={this.handleInputChange} type="checkbox"/>  Read-only user</Label>	
													</Label>
												</FormGroup>
												<FormGroup className="col-md-12 mt-4 pad0">
													<Label className="col-md-12 text-center">
														<Button className="button" type="submit">Update</Button>
														<Button className="button" type="button" onClick={(e) => this.setState({EditForm:false})}>Cancel</Button>
													</Label>
												</FormGroup>
										</div>
										</Form>
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
export default AdminUsers;