import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
