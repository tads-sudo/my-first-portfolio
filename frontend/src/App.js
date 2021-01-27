import React, { useState } from "react";
import { Topbar, Navbar } from "./components";
import {
  AboutView,
  ContactView,
  ProjectsView,
  SkillsExperienceView,
} from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        handleCloseMenu={handleCloseMenu}
      />
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/about" exact component={AboutView} />
        <Route
          path="/skills-&-experience"
          exact
          component={SkillsExperienceView}
        />
        <Route path="/projects" exact component={ProjectsView} />
        <Route path="/contact" exact component={ContactView} />
      </Switch>
    </Router>
  );
};
