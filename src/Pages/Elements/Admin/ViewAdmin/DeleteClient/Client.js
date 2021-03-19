import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
class ClientListing extends Component {
	constructor(props) {
        super(props);

		const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
		this.state = {
			ServerPath: ServerPath,
			 formData:[],
        };      
    }
componentDidMount() {
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/clientList',{
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
  handleClick = userId => {
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/clients/'+userId,{
				method: 'DELETE',
				headers: { 
				'Authorization':'Bearer'+' '+ token,
				'Content-Type': 'application/json',
				'Accept':'application/json',
				}
			})
  .then((response) => {
		return response.json();
  })
  .then((result)=>{ 
               window.location.reload();
			})
    }	    
 submit = userId => {
     confirmAlert({
     message: 'Are you sure you want to delete this ?',
     buttons: [
        {
		  label: 'No',
          onClick: ()=> '#/elements/clients-list' 
        },
        {
         label: 'Confirm',
		 onClick:() => {this.handleClick(userId)} 
        }
      ]
    })
  };
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
                                <div className="card-header mt-1 pad0">Client Listings</div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients" >
                                            <thead>
                                                <tr className="heading_color">
                                                    <th className="text-center">S.No</th>
                                                    <th className="text-center">Name</th>
                                                    <th className="text-center">email</th>
                                                    <th className="text-center">Address</th>
                                                    <th className="text-center">Contact</th>
                                                    <th className="text-center">Saluation</th>
                                                    <th className="text-center">Post Code</th>
                                                    <th className="text-center">Record Type</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
											{formData.map((fields,index) =>
                                                <tr key={index}>
                                                    <td className="text-center">{index+1}</td>
                                                    <td className="text-center">{fields.firstName}  {fields.surName}</td>
                                                    <td className="text-center">{fields.email}</td>
                                                    <td className="text-center">{fields.address}</td>
                                                    <td className="text-center">{fields.contact}</td>
                                                    <td className="text-center">{fields.salutation}</td>
                                                    <td className="text-center">{fields.postCode}</td>
                                                    <td className="text-center">{fields.recordType}</td>
                                                    <td className="text-center buttons_action">
                                                        <button type="button" className="btn btn-primary btn-sm btn-delete" title="Delete client" onClick={()=>{this.submit(fields.id)}} ><FontAwesomeIcon icon={faTrash}/></button> 	
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
export default ClientListing;