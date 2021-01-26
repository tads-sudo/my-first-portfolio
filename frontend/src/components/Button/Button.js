import React from "react";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Button = ({
  children,
  color = "PRIMARY",
  size = "LG",
  corner = "0",
  disabled = false,
  type = "fill",
  ...props
}) => {
  const classes = useStyles({
    colorProps: color,
    sizeProps: size,
    cornerProps: corner,
    typeProps: type,
  });
  return (
    <motion.button className={classes.button} disabled={disabled} {...props}>
      {children}
    </motion.button>
  );
};

export const ButtonLink = ({
  children,
  color = "PRIMARY",
  size = "LG",
  corner = "0",
  type = "fill",
  to,
  href,
  target,
  rel,
  isExternalLink = false,
  ...props
}) => {
  const classes = useStyles({
    colorProps: color,
    sizeProps: size,
    cornerProps: corner,
    typeProps: type,
  });

  if (isExternalLink) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes.link}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes.link} to={to} target={target} rel={rel} {...props}>
      {children}
    </Link>
  );
};
