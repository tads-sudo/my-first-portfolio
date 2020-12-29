import React from "react";
import { useStyles } from "./style";
import { routes } from "../../../config";
import { NavLink } from "react-router-dom";

export const Item = () => {
  const classes = useStyles();

  return (
    <>
      {routes.map((route, index) => {
        return (
          <NavLink
            key={`nav-link-${index}`}
            to={route.routePath}
            className={classes.navLink}
            activeClassName={classes.activeNavLinks}
            // activeStyle={{
            //   fontWeight: "bold",
            //   color: "red",
            // }}
          >
            {route.routeName}
          </NavLink>
        );
      })}
    </>
  );
};
