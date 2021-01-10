import React from "react";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import { routes } from "../../../config";

export const TopbarLink = ({ toggle }) => {
  const classes = useStyles();
  return (
    <>
      {routes.map((route, index) => {
        return (
          <li onClick={toggle} key={`nav-link-${index}`}>
            <NavLink
              to={route.routePath}
              className={classes.topbarLink}
              activeClassName={classes.activeNavLink}
            >
              {route.routeName}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
