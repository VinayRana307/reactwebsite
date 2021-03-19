import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Form,FormGroup,Label,Input} from 'reactstrap';
class DBParameters extends Component {
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			formData:{},DataBaseGroups:[],EditDataParameter :[],EditId:''
		}
	}
	handleInputChange = (event) =>{
		const target = event.target;
		const value = target.value;
		const name = target.name;
		if(name === 'codesChange'){
		this._isMounted = true;
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/editDataBaseParameterList/'+value,{
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
				this.setState({EditDataParameter : data.body[0],EditId :value})
				}
			})
		}
        let { formData } = this.state;
		formData[name] = value;
		this.setState({
			formData:formData,
			[name]:value,
		})
	}
	componentDidMount(){
		this._isMounted = true;
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/DataBaseParameterList',{
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
					groups : 'label'
				})
			})
			.then((response)=>{
				return response.json();
			})
			.then((data) => {
			if (this._isMounted) {
				this.setState({DataBaseGroups: data.body})
				}
			})
		}
		componentWillUnmount() {
			this._isMounted = false;
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
					'content-type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({
					wstoken: 'jwtToken',
					wsfunction: 'any_function',
					moodlewsrestformat: 'json',
					//step1 										
					id : this.state.EditId,
					Codes : formData.codes,
				})
				};
				return fetch('http://'+this.state.ServerPath+'/api/UpdateDataBaseParameterList', requestOptions)
				.then(handleResponse)
				.then(data => {
				});
				function handleResponse(response) {
				return response.text().then(text => {
					const data = text && JSON.parse(text);
					if (response.ok) {
						if(response.status === 200){
							console.log('success')
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
		const {DataBaseGroups,EditDataParameter} = this.state;
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
									<div className="card-header mt-3 ">DataBase Parameter</div>
										<FormGroup className="col-md-12">
											<Label className="col-md-3"> 
												<Label className="pad0">Groups : </Label>
												<select className="form-control" name="GroupsChange" onChange={this.handleInputChange}>
													<option>Select an Option</option>
													<option value="label">Labels</option>
												</select>
											</Label>
											<Label className="col-md-3"> 
												<Label className="pad0">Codes : </Label>
												<select className="form-control" name="codesChange" onChange={this.handleInputChange}>
													<option>Select an Option</option>
													{DataBaseGroups.map((fields,index) =>
														<option key={index} value={fields.id}>{fields.Codes}</option>
													)}
												</select>
											</Label>
											<Label className="col-md-3"> 
												<Label className="pad0">Value : </Label>
												<Input name="codes" defaultValue={EditDataParameter.Codes} onChange={this.handleInputChange}/>
											</Label>
											<Label className="col-md-2"> 
												<Button className="button" type="button" className="floatnone" onClick={this.handleSubmit}>Apply Change</Button>
											</Label>
										</FormGroup>
										<FormGroup className="col-md-12 text-right mt-4 pad0">
											<Label className="col-md-1">
												<Button className="button" type="button">Done</Button>
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
export default DBParameters;