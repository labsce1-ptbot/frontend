import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

// core components
// import Admin from "./layouts/Admin.jsx";
// import Auth from "./layouts/Auth.jsx";
// import RTL from "./layouts/RTL.jsx";

import "./assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

// const location = hist.location;

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route path="/admin" component={Admin} />
//       <Route path="/auth" component={Auth} />
//       <Route path="/rtl" component={RTL} />
//       <Redirect from="/" to="/admin/dashboard" />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Router history={hist}>
    <App />
  </Router>,
  document.getElementById("root")
);
