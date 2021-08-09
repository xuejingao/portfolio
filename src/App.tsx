import React from "react";
// import logo from './logo.svg';
// import './App.css';

import { Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./pages/Landing";
import AboutMePage from "./pages/AboutMe";
import ProjectsPage from "./pages/Projects";
import BlogPage from "./pages/Blog";
import ErrorPage from "./pages/Error404";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about" component={AboutMePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/error404" component={ErrorPage} />
      <Redirect to="/error404" />
    </Switch>
  );
}

export default App;
