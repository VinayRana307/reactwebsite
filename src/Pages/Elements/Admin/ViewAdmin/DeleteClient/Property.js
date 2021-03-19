import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Row,Col,Card,CardBody} from 'reactstrap';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
class PropertyListing extends Component {
	constructor(props) {
        super(props);

		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			 formData:[],
        };      
    }
 submit = userid => {
     confirmAlert({
     message: 'Are you sure you want to delete this ?',
     buttons: [
        {
		  label: 'No',
          onClick: ()=> '#/elements/propertylistings' 
        },
        {
         label: 'Confirm',
		 onClick:() => {this.componentDelete(userid)} 
        }
      ]
    })
  };
	  componentDidMount() {
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/propertysList',{
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
	  componentDelete = userid =>{
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/property/'+userid,{
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
			.then((data)=>{ 
               window.location.reload();
			})
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
                                    <div className="card-header pad0">Property Listings</div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
                                            <thead>
                                            <tr className="heading_color">
											    <th className="text-center">S.NO</th>
                                                <th className="text-center">Name</th>
                                                <th className="text-center">Address</th>
												<th className="text-center">City</th>
                                                <th className="text-center">State</th>
												<th className="text-center">Country</th>
												<th className="text-center">Post Code</th>
												<th className="text-center">Contact Us</th>
												<th className="text-center">Record Type</th>
												<th className="text-center">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
											{formData.map((fields,index) =>
                                            <tr key={index}>        
											    <td className="text-center">{index+1}</td>
                                                <td className="text-center">{fields.proName}</td>		
                                                <td className="text-center">{fields.proAddress}</td>		
                                                <td className="text-center">{fields.proCity}</td>	
                                                <td className="text-center">{fields.proState}</td>	
                                                <td className="text-center">{fields.proCountry}</td>	
												<td className="text-center">{fields.proPostCode}</td>
												<td className="text-center">{fields.proPhone}</td>
                                                <td className="text-center">{fields.proRecordType}</td>		
                                                <td className="text-center buttons_action">
													<button type="button"  onClick={()=>{this.submit(fields.id)}} className="btn btn-primary btn-sm btn-delete" ><FontAwesomeIcon icon={faTrash}/></button>
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
export default PropertyListing;
