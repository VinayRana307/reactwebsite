import React, { Component } from "react";
import MetisMenu from 'react-metismenu';
import { FaAlignRight, FaClosedCaptioning } from 'react-icons/fa';
import { Row, FormGroup, Button, HelpBlock } from 'react-bootstrap';
import { Label, Input} from 'reactstrap';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import image1 from "../../../assets/images/homepage/image1.jpg"
import image2 from "../../../assets/images/homepage/image2.jpg"
import image3 from "../../../assets/images/homepage/image3.jpg"
import image4 from "../../../assets/images/homepage/image4.jpg"
import image5 from "../../../assets/images/homepage/image5.jpg"
//import Typical from 'react-typical';
class HomePage extends Component {
		state = {
			formData: {}, 
			toggle:false,
			icon:true,
		}
    Toggle = () => {
        this.setState({toggle:!this.state.toggle,icon:false})
    }
	handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		let { formData } = this.state;
		formData[name] = value;
		this.setState({
			formData: formData
		});
	}
	
	render() {
		const slideImages = [
			image1,
			image2,
			image3,
			image4,
			image5
		  ];
		  const li = [
            {
                link: "/",
                text:"Home"
            },
            {
                link: "#/about",
                text:"About us"
            },
            {
                link: "#/contact",
                text:"Contact us"
            },
			{
                link: "#/login",
                text:"Sign In"
            },
			{
                link: "#/contact",
                text:"Sign Up"
            }
 ];
		return (
			<div>
			<div className="navBar">
					<button onClick={this.Toggle}>
						<FaAlignRight />
					</button>
					<ul className={this.state.toggle ? "links show-nav" : "links"}>
						{
							li.map((objLink, i) => {
								return ( <li key={i}><a href={objLink.link}>{objLink.text}</a></li> )
							})
						}
					</ul>
			</div>
				{/*<Typical className="TyicalTxt"
					steps={['Hello,', 1000, 'Hello, My name is vinay kumar', 500, 'My age is 22 years old ...', 1000, 'I am working as on Web Development', 500]}
					loop={Infinity}
					wrapper="p"
				/>*/}
				<div className="slide_div">
					<Slide easing="ease">
						<div className="each-slide">
							<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
							</div>
						</div>
						<div className="each-slide">
							<div style={{'backgroundImage': `url(${slideImages[1]})`}}>
							</div>
						</div>
						<div className="each-slide">
							<div style={{'backgroundImage': `url(${slideImages[2]})`}}>
							</div>
						</div>
						<div className="each-slide">
							<div style={{'backgroundImage': `url(${slideImages[3]})`}}>
							</div>
						</div>
						<div className="each-slide">
							<div style={{'backgroundImage': `url(${slideImages[4]})`}}>
							</div>
						</div>
					</Slide>
				</div>
				<div className="photo_gallery_heading">
					<h3>Photo Gallery</h3>
				</div>
			</div>
		)
	}
}
export const RegisterUser = [
	{
		label: 'Sign up',
		to: '#/signup/registeruser',
	},
];
export const ForgotPassword = [
	{
		label: 'Forgot Password',
		to: '#/foregetpassword/resetpassword',
	},
];
export default HomePage;