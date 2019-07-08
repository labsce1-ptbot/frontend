import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";

import avatar from "../../assets/img/faces/marc.jpg";

const styles = {
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
  cardHeaderBlack: {
    color: "#000000",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: "12px",
    paddingBottom: "10px"
  },
  
};

const { REACT_APP_SERVER_URL } = process.env;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: [],
    };
  }
  async componentDidMount() {
    let userRequest;
    try {
      userRequest = await axios.get(
        `${REACT_APP_SERVER_URL}/profile`,
        {
          withCredentials: true
        }
      );
    } catch ({ response }) {
      userRequest = response;
    }

    console.log("User Request", userRequest.data.userInfo[0])
    await this.setState({
      user: userRequest.data.userInfo[0]
    })
  }
  render() {
    console.log("state", this.state)
    const { classes, name, email } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <form onSubmit={this.updateProfile}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Profile Info</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                    <h2 className={classes.cardHeaderBlack}>Email: {this.state.user.email}</h2>
                    <h2 className={classes.cardHeaderBlack}>First Name: {this.state.user.first_name}</h2>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                    <h2 className={classes.cardHeaderBlack}>Username: {this.state.user.username}</h2>
                    <h2 className={classes.cardHeaderBlack}>Last Name: {this.state.user.last_name}</h2>
                    <h2 className={classes.cardHeaderBlack}>Link Slack:</h2>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
          
                </CardFooter>
              </Card>
            </form>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={this.state.user.picture} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  email: PropTypes.string
};

export default withStyles(styles)(UserProfile);
