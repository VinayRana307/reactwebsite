import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#e8e5e5',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

let btn = {
	marginTop:'3%',
	marginLeft:'3%',
};
class Delete extends Component {
    render() {
        let dialog = (
            <div style={dialogStyles} className="col-md-12">
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>x</button>
				 <div>{this.props.children}</div>
				 <div className="col-md-12 text-right">
				<button style={btn} className="col-md-4 btn-light btn" onClick={this.props.onClose}>Cancel</button>
				<button style={btn} className="col-md-4 btn-danger btn" onClick={this.props.onClose}>Confirm Delete</button>
				</div>
            </div>
        );

        if (! this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        );
    }
}

export default Delete;
