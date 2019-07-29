import React from "react";
import "./assets/css/main.css";
import "./assets/css/fontawesome-all.min.css";
import CardBody from "../../components/Card/CardBody";
import Card from "../../components/Card/Card";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.jsx";
import logo from "../../assets/img/vacalogo.png";
import Button from "../../components/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import CardHeader from "../../components/Card/CardHeader";
import "../../assets/css/calendar.css";
import background from "../LandingPage/images/bg07.svg";

const styles = {
  joinBtn: {
    color: "white"
  },
  signUpBTN: {
    textAlign: "center"
  },

  logo: {
    height: "100px"
  },

  btnDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },

  homePageCard: {
    // background: "rgba(255, 255, 255, 0.8)"
    width: "500px",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    marginTop: 0
  },

  homePageHeader: {
    display: "flex",
    alignItem: "center"
  }
};

class LandingPage extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
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
            <ul className={classes.listItems}>
              <li className="listItems">Schedule away messages for Slack</li>
              <li className="listItems">
                PTbOt responds to anyone that mentions you while you're away
              </li>
              <li className="listItems">
                Create custom away messages for all users or target a specific
                group/user
              </li>
              <li className="listItems">
                <b>
                  PTbOt does not save, store and/or read any of your Slack
                  messages
                </b>
              </li>
              <li className="listItems">
                All of your stored vacations are removed from our database the
                day after your vacation ends
              </li>
              <li className="listItems">
                PTbOt is completely open source and free to use
              </li>
              <li className="listItems">Google calendar integration</li>
            </ul>
            <div className={classes.btnDiv}>
              <a
                href={`${process.env.REACT_APP_SERVER_URL}/auth/login`}
                className={classes.signUpBTN}
              >
                <Button color="primary" round>
                  <p className={classes.joinBtn}>Signup/SignIn</p>
                </Button>
              </a>
            </div>
          </CardBody>
        </Card>

        {/* //<!-- Footer --> */}
        <div className="footer">
          <ul class="icons">
            {/* <React.Fragment className="icons"> */}
            <li>
              <a href="##" className="icon brands fa-twitter">
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="##" className="icon brands fa-instagram">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="##" className="icon brands fa-github">
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="##" className="icon fa-envelope">
                <span class="label">Email</span>
              </a>
            </li>
            {/* </React.Fragment> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
