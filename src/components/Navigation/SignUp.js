import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/signup.css';

class SignUp extends Component {
	render() {
		return (
			<div className="signup">
				<Button variant="primary">Sign Up</Button>
			</div>
		);
	}
}

export default SignUp;
