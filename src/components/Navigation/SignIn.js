import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/signin.css';

class SignIn extends Component {
	render() {
		return (
			<div className="signin">
				<Button variant="success">Sign In</Button>
			</div>
		);
	}
}

export default SignIn;
