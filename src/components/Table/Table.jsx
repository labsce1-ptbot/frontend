import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "../../assets/jss/material-dashboard-react/components/tableStyle.jsx";
import moment from "moment";

function CustomTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  console.log("table", tableData);
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
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
          {tableData.map((prop, key) => {
            console.log("djfdlakfjkladkfladkljfakdlfj", prop);
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
                {/* ); */}
                {/* })} */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
