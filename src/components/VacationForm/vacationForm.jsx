import React, { Component } from "react";
import DatePicker from "../DatePicker/DatePicker";
import Button from "../CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import { saveVacation } from "../../components/Api/api";

const styles = theme => ({
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
    width: "276px",
    [theme.breakpoints.down("sm")]: {
      width: "276px"
    }
  },

  textSaveBtn: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },

  saveBtn: {
    width: "276px",
    padding: 23
  }
});

class VacationForm extends Component {
  state = {
    start_date: null,
    end_date: null,
    msg: null,
    saved: false
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
    const { id, email } = this.props;
    // const userID = slackID;
    const vacay = {
      end_date,
      start_date,
      msg,
      id,
      email
    };
    // console.log("<----save--form->", vacay);
    saveVacation(vacay)
      .then(res => {
        if (res.status === 200) {
          this.props.fetchVacations(this.props.id);
          this.setState({
            msg: "",
            saved: !this.state.saved
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
    const { saved } = this.state;
    // console.log("props to vacay form", this.props);
    return (
      <form className={classes.vacForm} onSubmit={this.submitHandler}>
        <DatePicker
          dateLabel={"Start Date"}
          updateDate={this.updateDate}
          saved={saved}
        />
        <DatePicker
          dateLabel={"End Date"}
          updateDate={this.updateDate}
          saved={saved}
        />
        <div className={classes.textSaveBtn}>
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
            value={this.state.msg}
            onChange={this.changeHandler}
          />
          <Button
            type="submit"
            color="primary"
            square
            className={classes.saveBtn}
          >
            Save
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(VacationForm);
