import React, { Component } from "react";
// import "./styles/index.css";
import LandingPage from "./views/Pages/LandingPage/index";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

// core components
import Admin from "./layouts/Admin.jsx";
import Auth from "./layouts/Auth.jsx";
import RTL from "./layouts/RTL.jsx";

const hist = createBrowserHistory();

class App extends Component {
  state = {
    user: null,
    loading: false,
    loaded: false
  };

  updateUser = () => {
    if (this.state.loading === false) {
      this.setState({ loading: true, loaded: false }, () => {
        axios
          .get(process.env.REACT_APP_SERVER_URL + "/auth/profile", {
            withCredentials: true
          })
          .then(response => {
            const { user } = response.data;
            if (user) {
              this.setState({ user, loading: false, loaded: true });
            }
          })
          .catch(err => this.setState({ loaded: true, loading: false }));
      });
    }
  };

  handleClick = e => {
    this.setState({ testLogin: false });
  };

  componentDidMount() {
    this.updateUser();
  }

  render() {
    if (this.state.user) {
      return (
        <Switch history={hist}>
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      );
    } else if (
      this.state.loading === false &&
      this.state.loaded === true &&
      this.state.user === null
    ) {
      return (
        <div>
          <LandingPage handleClick={this.handleClick} />
        </div>
      );
    } else {
    }
  }
}

export default App;
