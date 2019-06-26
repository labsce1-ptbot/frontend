import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ScheduleNow from './ScheduleNow';
import '../styles/landingpage.css';

class LandingPage extends Component {
	render() {
		return (
			<div className="landingpage">
				<div className="signin">
					<SignIn />
				</div>
				<div className="signup">
					<SignUp />
				</div>
				<div className="appname">
					<h1>PTbOt - Vacation Bot</h1>
				</div>
				<div>
					<img 
						className="beach"
						src="https://cdn.pixabay.com/photo/2016/10/07/12/06/beach-1721396_960_720.jpg"
						alt="beach"
					/>
				</div>
				<div className="schedulenow">
					<ScheduleNow />
				</div>
			</div>
		);
	}
}

export default LandingPage;
