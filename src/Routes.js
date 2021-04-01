import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup.js";
import Signin from "./Components/Signin.js";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
      </Switch>
    </Router>
  );
}
