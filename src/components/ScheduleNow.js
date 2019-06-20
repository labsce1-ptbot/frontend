import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import '../styles/landingpage.css';

class ScheduleNow extends Component {
    render() {
        return(
            <div className="schedulenow">
                <Button variant="outline-success" size="lg">Schedule Now!</Button>
            </div>
        )
    }
}

export default ScheduleNow;