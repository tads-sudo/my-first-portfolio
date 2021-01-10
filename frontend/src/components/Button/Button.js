import React from "react";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Button = ({
  children,
  color = "PRIMARY",
  size = "LG",
  corner = "0",
  disabled = false,
  type = "fill",
  whileHover,
  whileTap,
}) => {
  const classes = useStyles({
    colorProps: color,
    sizeProps: size,
    cornerProps: corner,
    typeProps: type,
  });
  return (
    <motion.button
      className={classes.button}
      disabled={disabled}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.button>
  );
};

export const ButtonLink = ({
  children,
  href = "#",
  color = "PRIMARY",
  size = "LG",
  corner = "0",
  type = "fill",
  target = "",
  rel = "",
  whileHover,
  whileTap,
}) => {
  const classes = useStyles({
    colorProps: color,
    sizeProps: size,
    cornerProps: corner,
    typeProps: type,
  });
  return (
    <motion.span
      className={classes.button}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      <NavLink className={classes.navlink} to={href} target={target} rel={rel}>
        {children}
      </NavLink>
    </motion.span>
  );
};
