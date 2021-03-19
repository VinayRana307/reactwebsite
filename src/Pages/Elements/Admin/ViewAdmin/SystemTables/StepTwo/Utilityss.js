import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Form,FormGroup,Label,Input} from 'reactstrap';
class Utilities extends Component {
	constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			isOpen:false,councilTax:false,formData :{},Button:true,EditData:[]
		}
	}
	handleClick = (event) =>{
		const TaxCouncil = event.target.value;
		const councilTax = "Local Authority";
		if(TaxCouncil === councilTax){
			this.setState({councilTax : true,Button:false})
		}else{
			this.setState({councilTax : false,isOpen:false,Button:true})
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
					system_tableType : 'Utilities',
				})
			})
			.then((response)=>{
				console.log(response)
			})
			.then((data) => {
			if (this._isMounted) {
				this.setState({EditData: data.body})
				console.log(this.state.EditData)
				}
			})
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
     handleSubmit = () =>{
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
                system_tableType : 'Utilities',
                Company : formData.Company,
                Address : formData.Address,
                City  : formData.City,
                State  : formData.State,
                Country  : formData.Country,
                PostCode  : formData.PostCode,
                Email  : formData.Email,
                Web  : formData.Web,
                PhoneNo  : formData.PhoneNo,
                Fax  : formData.Fax,
                Type  : formData.Type,
                BandA  : formData.BandA,
                BandB : formData.BandB,
                BandC  : formData.BandC,
                BandD  : formData.BandD,
                BandE  : formData.BandE,
                BandF  : formData.BandF,
                BandG : formData.BandG,
                BandH  : formData.BandH,
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
    render() {
		const {EditData} = this.state;
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
									<div className="card-header mt-3 ">Utilities</div>
										<Form className="col-md-12" onSubmit={this.handleSubmit}>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Company : </Label>
													<Input name="Company" onChange={this.handleInputChange}/>
												</Label> 
											</FormGroup>	
											<Label className="col-md-12 heading_mid"> Address :</Label>
											<FormGroup className="col-md-12">
												<Label className="col-md-12">
													<Label className="pad0"> Complete Address :</Label>
													<textarea maxlength="20"   maxLength={200} rows="4" cols="10" className="form-control" onChange={this.handleInputChange} name="Address"/>
												</Label> 
											</FormGroup>
											<FormGroup className="col-md-12">
												<Label className="col-md-6">
													<Label className="pad0"> City :</Label>
													<Input type="text" onChange={this.handleInputChange} name="City"/>
												</Label>
												<Label className="col-md-6">
													<Label className="pad0"> State :</Label>
													<Input type="text" onChange={this.handleInputChange} name="State"/>
												</Label>
											</FormGroup>
											<FormGroup className="col-md-12"> 
												<Label className="col-md-6">
													<Label className="pad0"> Country :</Label>
													<Input type="text" onChange={this.handleInputChange} name="Country"/>
												</Label>
												<Label className="col-md-6">
													<Label className="pad0"> Post Code :</Label>
													<Input type="text" onChange={this.handleInputChange} name="PostCode "></Input>
												</Label> 
											</FormGroup>
											<Label className="col-md-12 heading_mid ml-3"> Internet :</Label>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Email : </Label>
													<Input onChange={this.handleInputChange} name="Email"/>
												</Label>
												<Label className="col-md-6"> 
													<Label className="pad0">Web : </Label>
													<Input onChange={this.handleInputChange} name="Web"/>
												</Label>	
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Phone No. : </Label>
													<Input onChange={this.handleInputChange} name="PhoneNo"/>
												</Label>
												<Label className="col-md-6"> 
													<Label className="pad0">Fax : </Label>
													<Input onChange={this.handleInputChange} name="Fax"/>
												</Label>	
											</FormGroup>
											<FormGroup className="col-md-12 pad0">
												<Label className="col-md-6"> 
													<Label className="pad0">Type : </Label>
													<select className="form-control" onClick={this.handleClick} onChange={this.handleInputChange} name="Type">
														<option>Select an Option</option>
														<option value="Local Authority">Local Authority</option>
														<option value="Gas">Gas</option>
														<option value="Electric">Electric</option>
														<option value="Water">Water</option>
														<option value="Telecoms">Telecoms</option>
													</select>
												</Label>
												{this.state.councilTax?
												<Label className="col-md-2">
													<Label className="pad0"></Label>
													<Button className="button" type="button" onClick={(e) => this.setState({ isOpen: true, })}>Council Tax</Button>
												</Label>
												:null}
											</FormGroup>
											{this.state.Button?
											<FormGroup className="col-md- text-right mt-4 pad0">
												<Label className="col-md-1">
													<Button className="button" type="submit">Ok</Button>
												</Label>
												<Label className="col-md-2">
													<Button className="button" type="button">Cancel</Button>
												</Label>
											</FormGroup>
											:null}
											{this.state.isOpen?
											<div>
												<Label className="col-md-12 heading_mid ml-3"> Council Tax Band :</Label>
												<FormGroup className="col-md-12 pad0">
													<Label className="col-md-12"> 
														<Label className="pad0">{EditData.Company} </Label>
													</Label> 
												</FormGroup>
												<FormGroup className="col-md-12 pad0">
													<Label className="col-md-3"> 
														<Label className="pad0">Band A : </Label>
														<Input placeholder="£10.000" onChange={this.handleInputChange} name="BandA"/>
													</Label>
													<Label className="col-md-3"> 
														<Label className="pad0">Band B : </Label>
														<Input placeholder="£20.000" onChange={this.handleInputChange} name="BandB"/>
													</Label>
													<Label className="col-md-3"> 
														<Label className="pad0">Band C : </Label>
														<Input placeholder="£30.000" onChange={this.handleInputChange} name="BandC"/>
													</Label>
													<Label className="col-md-3"> 
														<Label className="pad0">Band D : </Label>
														<Input placeholder="£40.000" onChange={this.handleInputChange} name="BandD"/>
													</Label>	
												</FormGroup>
												<FormGroup className="col-md-12 pad0">
													<Label className="col-md-3"> 
														<Label className="pad0">Band E : </Label>
														<Input placeholder="£50.000" onChange={this.handleInputChange} name="BandE"/>
													</Label>
													<Label className="col-md-3"> 
														<Label className="pad0">Band F : </Label>
														<Input placeholder="£60.000" onChange={this.handleInputChange} name="BandF"/>
													</Label>
													<Label className="col-md-3"> 
														<Label className="pad0">Band G : </Label>
														<Input placeholder="£70.000" onChange={this.handleInputChange} name="BandG"/>
													</Label>
													<Label className="col-md-3"> 
														<Label className="pad0">Band H : </Label>
														<Input placeholder="£80.000" onChange={this.handleInputChange} name="BandH"/>
													</Label>	
												</FormGroup>
												<FormGroup className="col-md-12 mt-4 text-right pad0">
												<Label className="col-md-1">
													<Button className="button" type="submit">Ok</Button>
												</Label>
												<Label className="col-md-2">
													<Button className="button" type="button" onClick={(e) => this.setState({ isOpen: false })}>Cancel</Button>
												</Label>
											</FormGroup>
											</div>:null}
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
export default Utilities;