import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "../../assets/jss/material-dashboard-react/components/footerStyle.jsx";
import { Switch, Link, Redirect } from "react-router-dom";
import PrivacyPolicy from "../PrivacyPolicy/privacyPolicy";
import '../../assets/css/material-dashboard-react.css'


function Footer({ ...props }) {
  const { classes, newRoute } = props;
  console.log("props=====", props);
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link
          to={
            newRoute[newRoute.length - 1].layout +
            newRoute[newRoute.length - 1].path
          }
          activeClassName="active"
        >
          <p className={classes.right}>Terms of Service and Privacy Policy</p>
        </Link>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
