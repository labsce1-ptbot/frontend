import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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
  FAQ: {
    marginTop: "70px"
  }
};
function FAQ(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Card>
        <CardHeader color="primary">
          <h3 className={classes.cardTitleWhite}>Getting Started and FAQ</h3>
        </CardHeader>
        <CardBody>
          <div className={classes.faq}>
            <div>
              <b>How do I use PTbOt in Slack?</b>
            </div>
            <p>
              <i>/vacation</i> is the command PTbOt is listening for in Slack.
              It must be followed by schedule, all, or help.
            </p>
          </div>
          <div className={classes.faq}>
            <div>
              <b>
                <i>/vacation schedule</i>
              </b>
            </div>
            <p>Opens a prompt to schedule your vacation.</p>
          </div>
          <div className={classes.faq}>
            <div>
              <b>
                <i>/vacation all</i>
              </b>
            </div>
            <p>
              Lists all of your vacations you have scheduled through PTbOt. Once
              the list is populated you are able to delete previously scheduled
              vacations .
            </p>
          </div>
          <div className={classes.faq}>
            <div>
              <b>
                <i>/vacation help</i>
              </b>
            </div>
            <p>
              Displays all commands and any relevant information to help a user
            </p>
          </div>
          <div className={classes.faq}>
            <div>
              <b>How do I connect Google Calendar?</b>
            </div>
            <p>
              Go to your user profile and click on the Google Calendar button.
              This will prompt Google requesting your permission. Click allow.
              We only add and delete events from your calendar. We do not read,
              save, and/or access events created outside of PTbOt
            </p>
          </div>
          <div className={classes.faq}>
            <div>
              <b>How do I connect to Slack?</b>
            </div>
            <p>
              if you logged in with Slack, then you are all set to begin using
              PTbOT. If you logged in with Google, all you have to do is go to
              your User Profile and click the connect Slack button.{" "}
            </p>
          </div>
          <div className={classes.faq}>
            <div>
              <b>What information does PTbOT save/store on me?</b>
            </div>
            <p>
              PTb0T does not save, store, sell, or read any of your Slack
              messages. Stored vacations are removed from our database the day
              after your vacation ends.
            </p>
          </div>
          <div className={classes.faq}>
            <div>
              <b>
                How can I verify PTbOt does not read or store any information?
              </b>
            </div>
          </div>
          <div className={classes.faq}>
            <p>
              PTbOt is entirely open source. You can review all code
              <a href="https://github.com/labsce1-ptbot"> here</a>.
            </p>
          </div>
          <div className={classes.faq}>
            <div>
              <b>
                Can I create a custom away message for certain groups or people?
              </b>
            </div>
            <p>
              Yes, if you schedule a vacation in Slack using the slash command{" "}
              <i>/vacation schedule</i> you will be prompted to leave an away
              message. At this point, you can choose an entire private channel
              to receive your custom away message, an individual, or everyone.
            </p>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default withStyles(style)(FAQ);
