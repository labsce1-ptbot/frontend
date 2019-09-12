import React, { Component } from "react";
// import { createBrowserHistory } from "history";
import { Route, Switch, Redirect } from "react-router-dom";
// import axios from "axios";

// core components
import Admin from "./layouts/Admin.jsx";
// import Auth from "./layouts/Auth.jsx";
// import RTL from "./layouts/RTL.jsx";
import LandingPage from "./layouts/LandingPage/index";
import PrivacyPolicy from "./components/PrivacyPolicy/privacyPolicy.jsx";

// import "./assets/css/material-dashboard-react.css?v=1.6.0";

// const hist = createBrowserHistory();

class App extends Component {
  state = {
    user: null,
    loading: false,
    loaded: false
  };

  // const PrivateRoute = () => {

  // }

  render() {
    return (
      <Switch>
        {/* <Route path="/auth" component={Auth} /> */}
        <Route path="/admin" component={Admin} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Redirect from="/" to="/admin/user" />
        {/* <PrivateRoute path="/" component={Admin} /> */}
      </Switch>
    );
  }
}

export default App;
