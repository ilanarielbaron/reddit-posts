import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { fetchPostsRequest } from "./store/posts/actions";
import { theme } from "./theme";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest({}));
  }, [dispatch]);

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
