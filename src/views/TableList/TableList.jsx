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
import axios from "axios";

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

class TableList extends Component {
  state = {
    vacations: [],
    error: false,
    id: null,
    vacationStartDate: null,
    vacationEndDate: null,
    message: ""
  };

  componentDidMount() {
    if (this.state.id !== null) {
      this.fetchVacations(this.state.id);
    } else if (this.props[0] === undefined) {
      this.missingProfile();
    } else {
      this.fetchVacations(this.props[0]._id);
      this.setState({
        id: this.props[0]._id
      });
    }
    console.log(this.props);
  }

  fetchVacations = id => {
    console.log("============hell ya");
    getAllVacations(id)
      .then(res => {
        this.setState({
          vacations: res.data
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
        console.log("res====>", res);
        this.fetchVacations(res);
        this.setState({
          id: res
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  };

  updateDate = (label, date) => {
    if (label === "Start Date") {
      label = "vacationStartDate";
    } else {
      label = "vacationEndDate";
    }
    this.setState({
      [label]: date
    });
  };

  render() {
    console.log("props tablelist", this.state);
    const { classes } = this.props;
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
              <Table
                tableHeaderColor="primary"
                tableHead={["Name", "Country", "City", "Salary"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                  ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                  [
                    "Doris Greene",
                    "Malawi",
                    "Feldkirchen in Kärnten",
                    "$63,542"
                  ],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Schedule a Vacation</h4>
            </CardHeader>
            <form className={classes.vacForm}>
              <DatePicker
                dateLabel={"Start Date"}
                updateDate={this.updateDate}
              />
              <DatePicker dateLabel={"End Date"} updateDate={this.updateDate} />
              <TextField
                id="outlined-multiline-static"
                label="Away Message"
                multiline
                rows="4"
                placeholder="Optional"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <Button color="primary" round className={classes.saveBtn}>
                Save
              </Button>
            </form>
            {/* <CardBody profile>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
            </CardBody> */}
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(TableList);
