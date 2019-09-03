import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import footerStyle from "../../assets/jss/material-dashboard-react/components/footerStyle.jsx";
import { Link } from "react-router-dom";
import "../../assets/css/material-dashboard-react.css";

function Footer({ ...props }) {
  const { newRoute } = props;
  console.log("props=====", props);
  return (
    <footer className="footer">
      <Link
        to={
          newRoute[newRoute.length - 1].layout +
          newRoute[newRoute.length - 1].path
        }
        activeclassname="active"
      >
        <div className="footer-policy">Terms of Service and Privacy Policy</div>
      </Link>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
