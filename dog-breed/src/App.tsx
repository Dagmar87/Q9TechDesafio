import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./auth/PrivateRoute";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RestrictedRoute from "./auth/RestrictedRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <RestrictedRoute exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
