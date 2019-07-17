import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import { getAllVacations, getProfile } from "../../components/Api/api";
import DatePicker from "../../components/DatePicker/DatePicker.jsx";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/CustomButtons/Button";
import "../../assets/css/calendar.css";
import VacationForm from "../../components/VacationForm/vacationForm.jsx";
import { Typography } from "@material-ui/core";
import Loader from "../../components/loader/loader.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  vacForm: {
    textAlign: "center",
    padding: ".9375rem 20px"
  },

  textField: {
    width: "100%"
  }
};

class Vacations extends Component {
  state = {
    vacations: [],
    error: false,
    id: null,
    slackRef: null,
    email: null,
    requestRec: false
  };

  componentDidMount() {
    if (this.state.id !== null) {
      this.fetchVacations(this.state.id);
    } else if (this.props[0] === undefined) {
      this.missingProfile();
    } else {
      this.fetchVacations(this.props[0]._id);
      this.setState({
        id: this.props[0]._id,
        slackRef: this.props[0].slack[0]
      });
    }
  }

  fetchVacations = id => {
    getAllVacations(id)
      .then(res => {
        this.setState({
          vacations: res.data,
          requestRec: true
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  };

  missingProfile = () => {
    getProfile()
      .then(res => {
        this.fetchVacations(res._id);
        this.setState({
          id: res._id,
          slackRef: res.slack[0],
          email: res.email
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    // console.log("vacations===", this.state);
    // console.log("vacay props===", this.props[0]);
    const { classes } = this.props;
    const { vacations, id, slackRef, email, requestRec } = this.state;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Vacations Scheduled</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              {!requestRec ? (
                <Loader />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Start Date", "End Date", "Message", "Actions"]}
                  tableData={vacations}
                />
              )}
              {vacations.length > 0 ? null : "No Vacations Scheduled"}
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Schedule a Vacation</h4>
            </CardHeader>
            <VacationForm
              id={id}
              slackRef={slackRef}
              email={this.props[0] !== undefined ? this.props[0].email : email}
              vacations={vacations[0]}
              fetchVacations={this.fetchVacations}
            />
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(Vacations);
