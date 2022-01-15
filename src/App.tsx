import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Layout>
            <Route component={Home} />
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
