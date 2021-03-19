import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Row,Col,Card,CardBody,Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import {faTrash} from '@fortawesome/free-solid-svg-icons';
class SupplierListing extends Component {
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
          onClick: ()=> '#/elements/supplierlisting' 
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
	  componentDelete = userid =>{
			const ww = localStorage.getItem('res');
			const myObject = JSON.parse(ww);
			const token = myObject.body.token;
			fetch('http://'+this.state.ServerPath+'/api/deleteSupplier/'+userid,{
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
export default SupplierListing;
