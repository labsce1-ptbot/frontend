import React from "react";
import "./assets/css/main.css";
import "./assets/css/fontawesome-all.min.css";
import CardBody from "../../components/Card/CardBody";
import Card from "../../components/Card/Card";
import Button from "../../components/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import "../../assets/css/calendar.css";
import PrivacyModal from "../../components/modal/modal";

const styles = {
  joinBtn: {
    color: "white"
  },

  header: {
    color: "black",
    fontWeight: "bold",
    margin: 10
  },

  btnLog: {
    color: "#9C27B0",
    margin: 0
  },

  signUpBTN: {
    textAlign: "center",
    width: "250px"
  },

  logo: {
    height: "100px"
  },

  btnDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },

  landing_page_btn: {
    width: "250px"
  },

  logIn: {
    width: "250px",
    border: "2px solid #9C27B0"
  },

  homePageCard: {
    // background: "rgba(255, 255, 255, 0.8)"
    maxWidth: "500px",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    marginTop: 0
  },

  homePageHeader: {
    display: "flex",
    alignItem: "center"
  },

  yes: {
    marginLeft: "20px"
  },

  listItems: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  privacyLink: {
    textDecoration: "underline",
    color: "#9C27B0",
    cursor: "pointer",
    fontSize: "13px"
  },

  list: {
    fontSize: "20px",
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: "10px"
  }
};

class LandingPage extends React.Component {
  state = {
    open: false
  };

  openHandler = key => {
    this.setState({ open: !this.state.open, movieIndex: key });
  };

  closeHandler = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className="landingpage">
        {/* //<!-- Header --> */}
        {/* <img src={background} alt="vacation beach" /> */}

        {/* //<!-- Signup Form --> */}
        {/* <form id="signup-form" method="post" action="#">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              /> */}
        {/* <a href={`https://pt-b0t.herokuapp.com/auth/login`}>Start Now!</a> */}
        {/* <a href={`${process.env.REACT_APP_SERVER_URL}/auth/login`}>
                <strong>Start Now!</strong>
              </a>
            </form> */}

        <Card className={classes.homePageCard}>
          <CardBody className={classes.listItems}>
            <h2 className={classes.header}>
              PTb0t: keeping you Away while you’re away
            </h2>
            {/* <h3 className={classes.header}>Vacation mode made simple</h3> */}
            <p className={classes.list}>
              A free, open-source Slack plugin that automatically sends away
              messages when you're away. Schedule vacation time in Slack or on
              our dashboard and your vacation is added to your Google calendar.
              Create custom messages for specific channels or users, or set an
              automated message for any time you’re mentioned while you’re OOO.
            </p>

            <div className={classes.btnDiv}>
              <a
                href={`${process.env.REACT_APP_SERVER_URL}/auth/login`}
                className={classes.signUpBTN}
              >
                <Button
                  color="primary"
                  block
                  className={classes.landing_page_btn}
                  id="sign_up"
                >
                  <p className={classes.joinBtn}>Sign Up</p>
                </Button>
              </a>
            </div>
            <div className={classes.btnDiv}>
              <a
                href={`${process.env.REACT_APP_SERVER_URL}/auth/login`}
                className={classes.signUpBTN}
              >
                <Button color="white" block className={classes.logIn}>
                  <p className={classes.btnLog}>Log In</p>
                </Button>
              </a>
            </div>
            {/* <div className={classes.btnDiv}>
              <a href={url}>
                <img src="https://api.slack.com/img/sign_in_with_slack.png" />
              </a>
              <a href="https://slack.com/oauth/authorize?client_id=653204882022.639613575554&scope=chat:write:bot,chat:write:user,groups:history,im:read,im:write,mpim:history,mpim:read,mpim:write,im:history,groups:read,groups:write,bot,commands,channels:read,channels:history,team:read">
                <img
                  alt="Add to Slack"
                  height="40"
                  width="139"
                  src="https://platform.slack-edge.com/img/add_to_slack.png"
                  srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                />
              </a>
            </div> */}
          </CardBody>
          <div className={classes.yes}>
            <PrivacyModal closeHandler={this.closeHandler} open={open} />
            <p onClick={this.openHandler} className={classes.privacyLink}>
              Terms of Service and Privacy Policy
            </p>
          </div>
        </Card>

        {/* //<!-- Footer --> */}
        {/* <div className={classes.footer}>
          <PrivacyModal closeHandler={this.closeHandler} open={open} />
          <p onClick={this.openHandler} className={classes.privacyLink}>
            Terms of Service and Privacy Policy
          </p>
        </div> */}
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
