import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import VacationSwitch from "../../components/VacationSwitch/vacationSwitch.jsx"

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <h1>Hello Dashboard</h1>
        <VacationSwitch/>
        </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
