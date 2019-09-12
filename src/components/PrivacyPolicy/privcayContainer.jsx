import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import PrivacyPolicy from "./privacyPolicy";

const style = {
  privacyContainer: {
    position: "relative",
    top: "345px",
    width: "80%",
    margin: "auto"
  }
};

function PrivacyContainer(props) {
  const { classes } = props;
  return (
    <div className={classes.privacyContainer}>
      <PrivacyPolicy />
    </div>
  );
}

export default withStyles(style)(PrivacyContainer);
