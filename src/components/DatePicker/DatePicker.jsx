import React, { Component } from "react";
// import "date-fns";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

class DatePicker extends Component {
  state = {
    selectDate: null,
    setSelectedDate: null
  };

  render() {
    const { selectedDate, setSelectedDate } = this.state;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Date picker"
          value={selectedDate}
          //   onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default DatePicker;
