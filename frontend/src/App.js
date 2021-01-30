import React, { useState } from "react";
import { Topbar, Navbar, ScrollToTop } from "./components";
import {
  AboutView,
  ContactView,
  ProjectsView,
  SkillsExperienceView,
} from "./pages";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((currentState) => {
      return !currentState;
    });
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        handleCloseMenu={handleCloseMenu}
      />
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/contact" exact component={ContactView} />
        <Route path="/projects" exact component={ProjectsView} />
        <Route
          path="/skills-&-experience"
          exact
          component={SkillsExperienceView}
        />
        <Route path="/about" exact component={AboutView} />
        <Route exact path="">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
      </Switch>
    </Router>
  );
};
