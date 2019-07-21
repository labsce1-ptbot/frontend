import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { whiteColor } from "../../assets/jss/material-dashboard-react";

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
  },
});

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "purple"
      }
    },
    MuiPickersDay: {
      dayDisabled: {
        color: "gray !important"
      },
      daySelected: {
        backgroundColor: "purple",
        pointerEvents: "none",
        color: "white !important"
      },
      day: {
        color: "black !important"
      }
    },
    MuiSvgIcon: {
      root: {
        color: "gray"
      }
    }
  },
})

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
    const { dateLabel, saved } = this.props;
    const { setSelectedDate } = this.state;

    if (prevState.setSelectedDate !== setSelectedDate) {
      this.props.updateDate(dateLabel, setSelectedDate);
    } else if (prevProps.saved !== saved) {
      this.setState({
        setSelectedDate: null
      });
    }
  }

  render() {
    const { selectedDate, setSelectedDate } = this.state;
    const { dateLabel, classes } = this.props;
    return (
      <ThemeProvider theme={materialTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          disablePast="true"
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
              input: classes.input,
            }
          }}
        />
      </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(DatePicker);
