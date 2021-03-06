import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup.js";
import Signin from "./Components/Signin.js";
import AddressForm from "./Components/AddressForm.js";
import ProviderDetails from "./Components/ProviderDetails.js";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
        <Route path="/AddressForm" component={AddressForm} />
        <Route path="/ProviderDetails" component={ProviderDetails} />
      </Switch>
    </Router>
  );
}
