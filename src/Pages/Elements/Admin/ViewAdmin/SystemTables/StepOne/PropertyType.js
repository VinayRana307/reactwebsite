import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
class ViewPropertyType extends Component {
    constructor(props) {
        super(props);
        const ServerPath = JSON.parse(localStorage.getItem('ServerPath'));
        this.state = {
            ServerPath: ServerPath,
            formData: {}, PropertyList: [], EditPropertyList: [], editId: '', AddForm: false, Editform: false, Table: false
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
    EditId = id => {
        this.setState({ editId: id })
        this._isMounted = true;
        const ww = localStorage.getItem('res');
        const myObject = JSON.parse(ww);
        const token = myObject.body.token;
        fetch('http://' + this.state.ServerPath + '/api/editSystemTableList/' + id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer' + ' ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (this._isMounted) {
                    this.setState({ EditPropertyList: data.body })
                }
            })
    }
    componentDidMount() {
        this._isMounted = true;
        const ww = localStorage.getItem('res');
        const myObject = JSON.parse(ww);
        const token = myObject.body.token;
        fetch('http://' + this.state.ServerPath + '/api/SystemTableList', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer' + ' ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                wstoken: 'jwtToken',
                wsfunction: 'any_function',
                moodlewsrestformat: 'json',
                system_tableType: 'Property_Type',
            })
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (this._isMounted) {
                    this.setState({ PropertyList: data.body })
                    if (this.state.PropertyList == '') {
                        this.setState({Table: false })
                    } else {
                        this.setState({Table: true })
                    }
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
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer' + ' ' + token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    wstoken: 'jwtToken',
                    wsfunction: 'any_function',
                    moodlewsrestformat: 'json',
                    //step1 
                    system_tableType: 'Property_Type',
                    PropertyType: formData.PropertyType,
                })
            };
            return fetch('http://' + this.state.ServerPath + '/api/addSystemTable', requestOptions)
                .then(handleResponse)
                .then(res => {
                });
            function handleResponse(response) {
                return response.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (response.ok) {
                        if (response.status === 200) {
                            window.location.reload();
                        }
                    }
                    else {
                        if (response.status === 401) {
                            // auto logout if 401 response returned from api
                        } else if (response.status === 400) {
                            //(response.statusText);
                            //errors.email = "asd";
                        }
                        const error = (data && data.message) || response.statusText;
                    }
                    return data;
                });

            }
        }
        UpdateData = (event) => {
            event.preventDefault();
            const formData = this.state.formData;
            const ww = localStorage.getItem('res');
            const myObject = JSON.parse(ww);
            const token = myObject.body.token;
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer' + ' ' + token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    wstoken: 'jwtToken',
                    wsfunction: 'any_function',
                    moodlewsrestformat: 'json',
                    //step1 
                    id: this.state.editId,
                    system_tableType: 'Property_Type',
                    PropertyType: formData.PropertyType,
                })
            };
            return fetch('http://' + this.state.ServerPath + '/api/updateSyatemTableList', requestOptions)
                .then(handleResponse)
                .then(res => {
                });
            function handleResponse(response) {
                return response.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (response.ok) {
                        if (response.status === 200) {
                            window.location.reload();
                        }
                    }
                    else {
                        if (response.status === 401) {
                            // auto logout if 401 response returned from api
                        } else if (response.status === 400) {
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
        const { PropertyList, EditPropertyList } = this.state;
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
                                    <div className="card-header ml-3">
                                        <div className="ml-0">Property Type </div>
                                        <div className="btn-actions-pane-right">
                                            <div>
                                                <button className="newbtn" onClick={(e) => this.setState({ AddForm: true, Editform: false })}>+ Add</button>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.AddForm ?
                                        <Form className="col-md-12 mt-4" onSubmit={this.handleSubmit}>
                                            <div>
                                                <FormGroup className="col-md-12 mt-3">
                                                <Label className="col-md-2">
                                                        <Label className="pad0"> Property Type :</Label>
                                                    </Label>
                                                    <Label className="col-md-4">
                                                        <Input type="text" onChange={this.handleInputChange} name="PropertyType" />
                                                    </Label>
                                                    <Label className="col-md-2">
                                                        <Label className="pad0"></Label>
                                                        <Button type="submit" className="button">Submit</Button>
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        </Form>
                                        : null}
                                    {this.state.Editform ?
                                        <Form className="col-md-12 mt-4" onSubmit={this.UpdateData}>
                                            <div>
                                                <FormGroup className="col-md-12 mt-3">
                                                    <Label className="col-md-2">
                                                        <Label className="pad0"> Property Type :</Label>
                                                    </Label>
                                                    <Label className="col-md-4">
                                                        <Input type="text" defaultValue={EditPropertyList.PropertyType} onChange={this.handleInputChange} name="PropertyType" />
                                                    </Label>
                                                    <Label className="col-md-2">
                                                        <Label className="pad0"></Label>
                                                        <Button type="submit" className="button">Update</Button>
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        </Form>
                                        : null}
                                        {this.state.Table ?
                                        <div className="table-responsive mt-5">
                                            <table className="align-middle mb-0 table table-borderless table-striped table-hover table_clients">
                                                <thead>
                                                    <tr className="heading_color">
                                                        <th className="text-center">S.No</th>
                                                        <th className="text-center">Property Type</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {PropertyList.map((fields, index) =>
                                                        <tr key={index}>
                                                            <td className="text-center">{index + 1}</td>
                                                            <td className="text-center">{fields.PropertyType}</td>
                                                            <td className="text-center buttons_action">
                                                                <button type="button" className="btn btn-primary btn-sm btn-edit" title="Edit client details" onClick={() => { this.EditId(fields.id); this.setState({ Editform: true, AddForm: false }) }}><FontAwesomeIcon icon={faPencilAlt} /></button>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                        : null}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
};
export default ViewPropertyType;