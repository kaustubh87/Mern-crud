import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

const Routes = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
