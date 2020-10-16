import React from "react";
import Nav from "./components/Nav";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import ProjectPage from "./components/ProjectPage";
import Main from "./components/Main";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <ScrollToTop />
        <Nav />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/project/:id' exact component={ProjectPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
