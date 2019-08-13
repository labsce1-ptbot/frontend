import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import withStyles from "@material-ui/core/styles/withStyles";
import { Icon, TextField } from "@material-ui/core";
import PrivacyPolicy from "../PrivacyPolicy/privacyPolicy";

const styles = {
  modal: {}
};

const PrivacyModal = props => {
  const { open, closeHandler, classes } = props;
  return (
    <Dialog
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={closeHandler}
      className={classes.modal}
    >
      <PrivacyPolicy />
    </Dialog>
  );
};

export default withStyles(styles)(PrivacyModal);
