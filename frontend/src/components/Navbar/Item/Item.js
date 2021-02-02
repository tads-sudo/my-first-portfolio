import React from "react";
import { useStyles } from "./style";
import { routes } from "../../../config";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Item = () => {
  const classes = useStyles();

  const item = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  };

  return (
    <>
      {routes.map((route, index) => {
        return (
          <motion.li key={`nav-link-${index}`} variants={item}>
            <NavLink
              to={route.routePath}
              className={classes.navLink}
              activeClassName={classes.activeNavLinks}
            >
              {route.routeName}
            </NavLink>
          </motion.li>
        );
      })}
    </>
  );
};
