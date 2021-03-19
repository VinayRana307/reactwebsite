import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
//import "bootstrap-less/bootstrap/bootstrap.less";;
class TenantListing extends Component {
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
          onClick: ()=> '#/elements/tenantmain' 
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
			fetch('http://'+this.state.ServerPath+'/api/tenantsList',{
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
			.catch(console.log)
	  }
	  componentDelete = userid =>{
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/tenant/'+userid,{
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
                                    <div className="card-header pad0">Tenant Listings</div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
                                            <thead>
                                            <tr className="heading_color">
                                                <th className="text-center"> S.No</th>
                                                <th className="text-center"> Name</th>
                                                <th className="text-center">Contact</th>
                                                <th className="text-center">Address</th>
                                                <th className="text-center">City</th>
												<th className="text-center">State/Province</th>
												<th className="text-center">Country</th>
												<th className="text-center">Post Code</th>
												<th className="text-center">Record Type</th>
												<th className="text-center">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
											{formData.map((fields,index) =>
                                            <tr key={index}>
                                                <td className="text-center">{index+1}</td>
                                                <td className="text-center">{fields.tenant_firstName} {fields.tenant_surName}</td>
                                                <td className="text-center">{fields.tenant_contact}</td>
                                                <td className="text-center">{fields.tenant_address}</td>
												<td className="text-center">{fields.tenant_city}</td>
												<td className="text-center">{fields.tenant_state}</td>
												<td className="text-center">{fields.tenant_country}</td>
												<td className="text-center">{fields.tenant_postcode}</td>
												<td className="text-center text-muted"><div className="badge badge-warning">{fields.recordType}</div></td>		
                                                 <td className="text-center buttons_action">
													<button type="button" className="btn btn-primary btn-sm btn-delete" onClick={()=>{this.submit(fields.id)}}><FontAwesomeIcon icon={faTrash}/></button>
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
export default TenantListing;