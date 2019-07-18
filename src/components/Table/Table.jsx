import React, { Component } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { deleteVacation } from "../Api/api.jsx";
// core components
import tableStyle from "../../assets/jss/material-dashboard-react/components/tableStyle.jsx";
import moment from "moment";
import { Icon, TableFooter, TablePagination } from "@material-ui/core";
import Vacations from "../../views/Vacations/Vacations.jsx";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

class CustomTable extends Component {
  state = {
    page: null,
    rowsPerPage: null
  };

  componentDidMount() {
    this.setState({
      page: 0,
      rowsPerPage: 5
    });
  }
  handleChangePage = (event, newPage) => {
    console.log(event.target.value);
    this.setState({
      page: newPage
    });
  };

  handleChangeRows = event => {
    this.setState({
      rowsPerPage: Number(event.target.value),
      page: 0
    });
  };

  removeVacation = id => {
    const { fetchVacations, userId } = this.props;
    deleteVacation(id)
      .then(res => {
        if (res) {
          fetchVacations(userId);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { classes, tableHead, tableData, tableHeaderColor } = this.props;
    console.log("table", this.state);

    const { page, rowsPerPage } = this.state;
    return (
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableHeadCell
                      }
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(prop => {
                return (
                  <TableRow key={prop._id}>
                    {/* {prop.map((prop, key) => {
                  return ( */}
                    <TableCell className={classes.tableCell}>
                      {moment(prop.startDate).format("MMMM Do, YYYY")}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {moment(prop.endDate).format("MMMM Do, YYYY")}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {prop.message.length > 0
                        ? prop.message[0].custom_message
                        : "No Saved Message"}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Icon
                        id="deleteVacay"
                        className={classes.deleteVacay}
                        onClick={() => this.removeVacation(prop._id)}
                      >
                        delete_outlined
                      </Icon>
                    </TableCell>
                    {/* ); */}
                    {/* })} */}
                  </TableRow>
                );
              })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={5}
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={this.state.page}
                SelectProps={{
                  inputProps: { "aria-label": "Rows Per Page" }
                }}
                onChangePage={this.handleChangePage}
                nextIconButtonProps={{
                  "aria-label": "Next Page"
                }}
                onChangeRowsPerPage={this.handleChangeRows}
                backIconButtonProps={{
                  "aria-label": "Previous Page"
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}
CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

// CustomTable.propTypes = {
//   classes: PropTypes.object.isRequired,
//   tableHeaderColor: PropTypes.oneOf([
//     "warning",
//     "primary",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ]),
//   tableHead: PropTypes.arrayOf(PropTypes.string)
// tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
// };

export default withStyles(tableStyle)(CustomTable);
