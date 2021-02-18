import React from "react";
import { useStyles } from "./style";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="none"
    strokeWidth="2"
    stroke="rgba(249,250,247,1)"
    strokeLinecap="round"
    transition={{ duration: "0.2", ease: "easeIn" }}
    {...props}
  />
);

export const CollapseButton = ({ toggle, ...props }) => {
  const classes = useStyles();
  return (
    <motion.button className={classes.button} onClick={toggle} {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          variants={{
            up: {
              d:
                "M20.485 15.535L12 7.05005L3.51499 15.535L4.92899 16.95L12 9.87805L19.071 16.95L20.485 15.535Z",
              rotate: [-360, 0],
            },
            down: {
              d:
                "M3.51501 8.46495L12 16.95L20.485 8.46495L19.071 7.04995L12 14.122L4.92901 7.04995L3.51501 8.46495Z",
              rotate: 360,
            },
          }}
        />
      </svg>
    </motion.button>
  );
};
