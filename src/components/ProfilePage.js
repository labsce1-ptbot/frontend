import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ConnectProfile from './ConnectProfile';
import axios from 'axios';
import '../styles/profilepage.css';

class ProfilePage extends Component {
	state = {
		selectedFile : null
	};

	fileSelectedHandler = (event) => {
		// store file
		this.setState({
			selectedFile : event.target.files[0]
		});
	};

	fileUploadHandler = () => {
		//send http request for upload
		const profilePic = new FormData();
		profilePic.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('', profilePic)
        .then(res => {
            console.log(res)
        });
	};

	render() {
		return (
			<div>
				<div className="schedulevacation">
					<Button variant="primary">Schedule Vacation</Button>
				</div>
				<div>
					{/* className for styling? */}
					<div>
						{/* upload profile picture */}
						<input type="file" onChange={this.fileSelectedHandler} />
						profile picture
						<button onClick={this.fileUploadHandler}>Upload</button>
					</div>
					<div> username first/last </div>
					<div className="connectprofile">
						<ConnectProfile />
					</div>
					<div>Scheduled vacations show here</div>
					<div>Scheduled vacations show here</div>
					<div>Scheduled vacations show here</div>
					<div>Scheduled vacations show here</div>
				</div>
			</div>
		);
	}
}

export default ProfilePage;
