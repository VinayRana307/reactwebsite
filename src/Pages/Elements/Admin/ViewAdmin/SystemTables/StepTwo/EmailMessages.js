import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
     Row, Col,
    Card, CardBody,
    CardTitle,Form, FormGroup, Label, Input,
} from 'reactstrap';
class EmailMessages extends Component {
    constructor(props){
		super(props);
		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
            formData:{}
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
                wstoken: 'jwtToken',
                wsfunction: 'any_function',
                moodlewsrestformat: 'json',
                //step1 
                system_tableType : 'Email_Messages',
                Email  : formData.Email,
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
									<div className="card-header mt-3 ">Email Messages </div>
                                    <Form className="col-md-12" onSubmit={this.handleSubmit}>
                                         <Label className="pad0 ml-3"><b>Tenant demands and statements and supplier remittance advice notes can be
                                            sent as attachments to emails. You can define here the subject heading and
                                            body text of emails sent.</b></Label>
                                            <FormGroup className="col-md-12 mt-3"> 
                                                <Label className="col-md-6">
                                                    <Label className="pad0">Email :</Label>
                                                    <Input type="text" name="Email" onChange={this.handleInputChange}/>
                                                </Label>
                                                <Label className="col-md-2">
                                                     <Label className="pad0"></Label>
                                                    <Button type="submit" className="button">Submit</Button>
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
export default EmailMessages;