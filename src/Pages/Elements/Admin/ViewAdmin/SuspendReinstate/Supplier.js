import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody} from 'reactstrap';
class ViewSupplier extends Component {
	constructor(props) {
        super(props);

		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			 formData:[],ids:false
        };      
    }
   componentDidMount() {
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/supplierList',{
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
				this.setState({formData: data.body})
			})
	  }
	  SubmitData = Id => {
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
                id : Id,
                type: 'Supplier',
                SuspendReinstate : this.state.ids,
            })
            };
            return fetch('http://'+this.state.ServerPath+'/api/suspendedAndRainState', requestOptions)
            .then(handleResponse)
            .then(res => {
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
                    }else if(response.status === 400){
                        alert('Please enter correct email/password.');
                        //(response.statusText);
                    }

                    const error = (data && data.message) || response.statusText;
                }
                return data;
            });
            }
}
ToggleButton = (event) =>{
	const target = event.target;
	const toggle = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ids :toggle})
}
    render() {
		const {formData} = this.state;
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
                        <Col lg="12">
                            <Card className="main-card mb-3 card_client min-vh-100">
                                <CardBody>
                                    <div className="card-header mt-1 pad0">Supplier Listings</div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
                                            <thead>
												<tr className="heading_color">
													<th className="text-center">S.No</th>
													<th className="text-center">Company</th>
													<th className="text-center">Contact</th>
													<th className="text-center">City</th>
													<th className="text-center">State</th>
													<th className="text-center">Country</th>
													<th className="text-center">Phone</th>
													<th className="text-center">Post Code</th>
													<th className="text-center">Actions</th>
												</tr>
                                            </thead>
                                            <tbody>
											{formData.map((fields,index) =>
												<tr key={index}>
													<td className="text-center">{index+1}</td>
													<td className="text-center">{fields.supplier_Company}</td>
													<td className="text-center">{fields.supplier_Contact}</td>
													<td className="text-center">{fields.supplier_City}</td>
													<td className="text-center">{fields.supplier_State}</td>
													<td className="text-center">{fields.supplier_Country}</td>
													<td className="text-center">{fields.supplier_Phone}</td>
													<td className="text-center">{fields.supplier_Postcode}</td>
													<td className="text-center">
                                                        <input type="checkbox" onChange={()=>this.SubmitData(fields.id)} onClick={this.ToggleButton}/>
                                                	</td>
                                            	</tr>
												)}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
};
export default ViewSupplier;
