import React, { Component } from "react";
import { Switch } from "@material-ui/core";

class VacationSwitch extends Component {   
    state = {
      alert: false
    }

    handleChange = () => {
      this.setState({
        alert: !this.sate
      })
    }
    render() {
      const { alert } = this.state 
      const valueToggle = alert ? "on" : "off" 
      console.log("Logged from Switch Component", this.props)   
    return(
      <React.Fragment>
      <Switch
        value={valueToggle} onChange={this.props.deleteToggle}
      />
      </React.Fragment>
    )
  }
}

export default VacationSwitch;