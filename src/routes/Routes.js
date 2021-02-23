import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "../components";

const AboutView = lazy(() => import("../pages/About/AboutView"));
const SkillsExperienceView = lazy(() =>
  import("../pages/SkillsExperience/SkillsExperienceView")
);
const ProjectsView = lazy(() => import("../pages/Projects/ProjectsView"));
const ContactView = lazy(() => import("../pages/Contact/ContactView"));

export const Routes = () => {
  const location = useLocation();

  const pageAnimation = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <Suspense fallback={<Preloader />}>
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
          <Route exact path="/">
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageAnimation}
            >
              <Redirect to="/about" />
            </motion.div>
          </Route>
          <Route exact path="">
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageAnimation}
            >
              <Redirect to="/about" />
            </motion.div>
          </Route>
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
};
