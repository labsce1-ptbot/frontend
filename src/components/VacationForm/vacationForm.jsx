import React, { Component } from "react";
import DatePicker from "../DatePicker/DatePicker";
import Button from "../CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import { saveVacation } from "../../components/Api/api";
import moment from "moment";
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

class VacationForm extends Component {
  state = {
    start_date: null,
    end_date: null,
    msg: null
  };

  updateDate = (label, date) => {
    if (label === "Start Date") {
      label = "start_date";
    } else {
      label = "end_date";
    }
    this.setState({
      [label]: date
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const { end_date, start_date, msg } = this.state;
    const { slackID, teamID } = this.props.vacations;
    const userID = slackID;
    const vacay = {
      end_date,
      start_date,
      msg,
      userID,
      teamID
    };
    saveVacation(vacay)
      .then(res => {
        if (res.status === 200) {
          this.props.fetchVacations(this.props.id);
          this.setState({
            msg: null
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log("----props---->", this.props);
    return (
      <form className={classes.vacForm} onSubmit={this.submitHandler}>
        <DatePicker dateLabel={"Start Date"} updateDate={this.updateDate} />
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
          name="msg"
          onChange={this.changeHandler}
        />
        <Button type="submit" color="primary" round className={classes.saveBtn}>
          Save
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(VacationForm);
