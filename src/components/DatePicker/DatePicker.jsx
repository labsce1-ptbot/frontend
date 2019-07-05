import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const styles = theme => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  cardHeaderBlack: {
    color: "#000000",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: "12px",
    paddingBottom: "10px"
  }
});

class DatePicker extends Component {
  state = {
    selectDate: Date.now(),
    setSelectedDate: null
  };

  changeHandler = date => {
    this.setState({
      setSelectedDate: date._d
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.setSelectedDate !== this.state.setSelectedDate) {
      this.props.updateDate(this.props.dateLabel, this.state.setSelectedDate);
    }
  }

  render() {
    console.log(this.state);
    const { selectedDate, setSelectedDate } = this.state;
    const { dateLabel, classes } = this.props;
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          margin="normal"
          className={classes.input}
          id="date"
          label={dateLabel}
          value={setSelectedDate ? setSelectedDate : selectedDate}
          variant="underline"
          onChange={this.changeHandler}
          InputProps={{
            classes: {
              input: classes.input
            }
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
            classes: {
              input: classes.input
            }
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default withStyles(styles)(DatePicker);
