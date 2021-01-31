import React from "react";
import {
  AboutView,
  ContactView,
  ProjectsView,
  SkillsExperienceView,
} from "../pages";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const Routes = () => {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};
